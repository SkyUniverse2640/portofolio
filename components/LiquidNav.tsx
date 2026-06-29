"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import GlassSurface from "./GlassSurface";
import { navItems } from "@/lib/data";

type Pos = { left: number; width: number; center: number };

const SPRING = { type: "spring", stiffness: 550, damping: 42 } as const;

/**
 * LiquidNav — iOS-style liquid-glass navigator.
 * A colored glass "lens" sits under the section labels and can be dragged
 * left/right; on release it snaps precisely to the nearest section and scrolls
 * there. A scroll-spy keeps it in sync while you scroll. Floats top on desktop,
 * docks bottom on mobile — draggable in both.
 */
export default function LiquidNav() {
  const trackRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const posRef = useRef<Pos[]>([]);
  const draggingRef = useRef(false);
  const lockUntilRef = useRef(0);

  const [active, setActive] = useState(0);
  const [ready, setReady] = useState(false);
  const [holding, setHolding] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [constraint, setConstraint] = useState({ left: 0, right: 0 });

  // Thumb geometry (precise px), driven by the measured item it covers.
  const x = useMotionValue(0);
  const w = useMotionValue(0);

  const measure = useCallback(() => {
    const positions: Pos[] = itemRefs.current.map((el) => {
      const left = el?.offsetLeft ?? 0;
      const width = el?.offsetWidth ?? 0;
      return { left, width, center: left + width / 2 };
    });
    posRef.current = positions;
    if (positions.length) {
      setConstraint({
        left: positions[0].left,
        right: positions[positions.length - 1].left,
      });
    }
  }, []);

  const place = useCallback(
    (i: number, withAnim: boolean) => {
      const p = posRef.current[i];
      if (!p) return;
      if (withAnim) {
        animate(x, p.left, SPRING);
        animate(w, p.width, SPRING);
      } else {
        x.set(p.left);
        w.set(p.width);
      }
    },
    [x, w]
  );

  const nearest = useCallback(() => {
    const center = x.get() + w.get() / 2;
    let idx = 0;
    let best = Infinity;
    posRef.current.forEach((p, i) => {
      const d = Math.abs(p.center - center);
      if (d < best) {
        best = d;
        idx = i;
      }
    });
    return idx;
  }, [x, w]);

  const navigate = useCallback((i: number) => {
    lockUntilRef.current = performance.now() + 800;
    document.getElementById(navItems[i].id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  // Measure on mount + whenever the track resizes (fonts, breakpoint changes).
  useEffect(() => {
    measure();
    place(active, false);
    setReady(true);
    const ro = new ResizeObserver(() => {
      measure();
      if (!draggingRef.current) place(active, false);
    });
    if (trackRef.current) ro.observe(trackRef.current);
    return () => ro.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [measure]);

  // Glue thumb to active item whenever it changes (and we're not dragging).
  useEffect(() => {
    if (!draggingRef.current) place(active, true);
  }, [active, place]);

  // Scroll-spy: reflect the section currently in view.
  useEffect(() => {
    const sections = navItems
      .map((n) => document.getElementById(n.id))
      .filter(Boolean) as HTMLElement[];
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (draggingRef.current || performance.now() < lockUntilRef.current)
          return;
        const vis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (vis) {
          const idx = navItems.findIndex((n) => n.id === vis.target.id);
          if (idx !== -1) setActive(idx);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const handleSelect = (i: number) => {
    setActive(i);
    place(i, true);
    navigate(i);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: ready ? 1 : 0, y: ready ? 0 : 10 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="
        pointer-events-none fixed inset-x-0 z-50 flex justify-center px-4
        bottom-[max(1rem,env(safe-area-inset-bottom))]
        md:bottom-auto md:top-4
      "
    >
      <div className="pointer-events-auto">
        <GlassSurface
          width="auto"
          height="auto"
          borderRadius={999}
          backgroundOpacity={0.5}
          saturation={2.2}
          blur={30}
          displace={0.8}
          distortionScale={-130}
          greenOffset={7}
          blueOffset={14}
          brightness={64}
        >
          <div ref={trackRef} className="relative flex items-center gap-1 p-1.5">
            {/*
              Drag handle: invisible by itself, always parked over the active
              item so a press can grab it. The visual liquid-glass lens only
              materializes while held/dragged.
            */}
            <motion.div
              drag="x"
              dragConstraints={{ left: constraint.left, right: constraint.right }}
              dragElastic={0.06}
              dragMomentum={false}
              onPointerDown={() => setHolding(true)}
              onPointerUp={() => setHolding(false)}
              onPointerCancel={() => setHolding(false)}
              onDragStart={() => {
                draggingRef.current = true;
                setDragging(true);
                setHolding(true);
              }}
              onDrag={() => setActive(nearest())}
              onDragEnd={() => {
                const i = nearest();
                draggingRef.current = false;
                setDragging(false);
                setHolding(false);
                setActive(i);
                place(i, true);
                navigate(i);
              }}
              style={{ x, width: w }}
              className="absolute inset-y-1.5 left-0 z-20 cursor-grab touch-none active:cursor-grabbing"
            >
              {/* Visual lens — fades + pops in only while holding/dragging */}
              <motion.div
                initial={false}
                animate={{
                  opacity: holding || dragging ? 1 : 0,
                  scale: holding || dragging ? 1 : 0.55,
                }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
                style={{ transformOrigin: "center" }}
              >
                {/* Liquid-glass magnifier — real chromatic refraction */}
                <GlassSurface
                  width="100%"
                  height="100%"
                  borderRadius={999}
                  backgroundOpacity={dragging ? 0 : 0.12}
                  saturation={1.5}
                  blur={dragging ? 11 : 5}
                  displace={dragging ? 15 : 3}
                  distortionScale={-150}
                  redOffset={dragging ? 5 : 2}
                  greenOffset={dragging ? 15 : 8}
                  blueOffset={dragging ? 25 : 14}
                  brightness={60}
                  opacity={dragging ? 0.8 : 0.9}
                  mixBlendMode="screen"
                  className="h-full w-full"
                  style={{
                    transition:
                      "backdrop-filter 0.4s ease, background 0.4s ease",
                  }}
                />
                {/* glass rim + specular highlight */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-full border border-white/45 shadow-[0_4px_22px_rgba(0,0,0,0.22),inset_0_1px_1px_rgba(255,255,255,0.6)]"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-2 top-1 h-1/3 rounded-full bg-gradient-to-b from-white/55 to-transparent blur-[1px]"
                />
              </motion.div>
            </motion.div>

            {/* Labels */}
            {navItems.map((item, i) => (
              <button
                key={item.id}
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                onClick={() => handleSelect(i)}
                aria-current={active === i ? "page" : undefined}
                className={`relative z-10 select-none whitespace-nowrap rounded-full px-3 py-2 text-xs font-medium transition-colors duration-300 sm:px-4 sm:text-sm ${
                  active === i
                    ? "font-semibold text-foreground"
                    : "text-foreground/55 hover:text-foreground/85"
                }`}
              >
                <span className="hidden sm:inline">{item.label}</span>
                <span className="sm:hidden">{item.short}</span>
              </button>
            ))}
          </div>
        </GlassSurface>
      </div>
    </motion.div>
  );
}
