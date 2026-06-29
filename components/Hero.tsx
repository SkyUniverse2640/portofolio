"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import GlassSurface from "./GlassSurface";
import { profile } from "@/lib/data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.25 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center justify-center px-4 pb-16 pt-24 md:pt-28"
    >
      <div className="w-full max-w-5xl">
        <GlassSurface
          width="100%"
          height="auto"
          borderRadius={36}
          backgroundOpacity={0.07}
          saturation={1.5}
          blur={14}
          displace={1.2}
          distortionScale={-160}
          redOffset={2}
          greenOffset={10}
          blueOffset={20}
          brightness={64}
          opacity={0.92}
          className="w-full"
        >
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid w-full items-center gap-10 px-6 py-12 sm:px-10 sm:py-16 md:grid-cols-[auto_1fr] md:gap-12 md:px-14"
          >
            {/* Portrait */}
            <motion.div variants={item} className="mx-auto md:mx-0">
              <div className="relative">
                <span
                  aria-hidden
                  className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-indigo-400/30 via-fuchsia-400/20 to-sky-400/30 blur-xl"
                />
                <div className="relative h-40 w-40 overflow-hidden rounded-[2rem] border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.5)] sm:h-48 sm:w-48">
                  <Image
                    src={profile.photo}
                    alt={`${profile.name} — ${profile.role}`}
                    fill
                    priority
                    sizes="(max-width: 640px) 160px, 192px"
                    className="object-cover"
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                  />
                </div>
              </div>
            </motion.div>

            {/* Copy */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <motion.span
                variants={item}
                className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-medium tracking-wide text-foreground/75 backdrop-blur"
              >
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                Open to opportunities · {profile.location}
              </motion.span>

              <motion.h1
                variants={item}
                className="bg-gradient-to-br from-foreground to-foreground/50 bg-clip-text text-4xl font-bold leading-[1.05] tracking-tight text-transparent sm:text-6xl"
              >
                {profile.name}
              </motion.h1>

              <motion.p
                variants={item}
                className="mt-3 text-lg font-medium text-foreground/85 sm:text-xl"
              >
                {profile.title} · {profile.role}
              </motion.p>

              <motion.p
                variants={item}
                className="mt-2 max-w-md text-sm italic text-foreground/60"
              >
                “{profile.tagline}” — {profile.taglineMeaning}
              </motion.p>

              <motion.div
                variants={item}
                className="mt-7 flex flex-wrap items-center justify-center gap-3 md:justify-start"
              >
                <a
                  href="#contact"
                  className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-[var(--background)] transition-transform hover:scale-105"
                >
                  Let’s connect
                </a>
                <a
                  href="#experience"
                  className="rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-foreground/90 backdrop-blur transition-colors hover:bg-white/20"
                >
                  View experience
                </a>
              </motion.div>
            </div>
          </motion.div>
        </GlassSurface>
      </div>
    </section>
  );
}
