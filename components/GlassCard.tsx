"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import GlassSurface, { GlassSurfaceProps } from "./GlassSurface";
import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: ReactNode;
  /** classes for the inner content wrapper (your padding/layout lives here) */
  className?: string;
  /** classes applied to the GlassSurface element itself (sizing/width) */
  surfaceClassName?: string;
  borderRadius?: number;
  /** lift + scale on hover */
  interactive?: boolean;
  /** scroll-reveal animation */
  reveal?: boolean;
  delay?: number;
  /** override any GlassSurface displacement/lighting prop */
  glass?: Partial<GlassSurfaceProps>;
};

/**
 * GlassCard — composition layer over React Bits <GlassSurface />.
 * Provides responsive sizing (width 100% / height auto), readability tuning,
 * Framer Motion reveal + liquid hover, while delegating the real chromatic
 * displacement + lighting to the official component.
 */
export default function GlassCard({
  children,
  className = "",
  surfaceClassName = "",
  borderRadius = 28,
  interactive = false,
  reveal = true,
  delay = 0,
  glass = {},
}: GlassCardProps) {
  return (
    <motion.div
      initial={reveal ? { opacity: 0, y: 28 } : false}
      whileInView={reveal ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, margin: "-80px" }}
      whileHover={interactive ? { y: -6, scale: 1.012 } : undefined}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ borderRadius }}
      className="will-change-transform"
    >
      <GlassSurface
        width="100%"
        height="auto"
        borderRadius={borderRadius}
        backgroundOpacity={0.06}
        saturation={1.4}
        blur={12}
        displace={1}
        distortionScale={-150}
        redOffset={0}
        greenOffset={8}
        blueOffset={16}
        brightness={60}
        opacity={0.9}
        className={cn("w-full", surfaceClassName)}
        {...glass}
      >
        <div className={cn("relative w-full", className)}>
          {/* Soft readability veil so text stays crisp over the mesh */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-br from-white/[0.07] to-white/[0.02] dark:from-white/[0.05] dark:to-transparent"
          />
          <div className="relative z-10">{children}</div>
        </div>
      </GlassSurface>
    </motion.div>
  );
}
