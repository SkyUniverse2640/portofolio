"use client";

import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import Reveal from "./Reveal";
import { skillCategories } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="relative px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="mb-12 flex flex-col items-center text-center">
            <span className="mb-3 rounded-full bg-white/12 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-foreground/60 backdrop-blur">
              Toolkit
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Skills &amp; Tech Stack
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {skillCategories.map((cat, i) => (
            <GlassCard
              key={cat.name}
              borderRadius={28}
              interactive
              delay={i * 0.1}
              surfaceClassName="h-full"
              className="h-full"
            >
              <div className="flex h-full flex-col p-7">
                <span className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-white/15 text-xl backdrop-blur">
                  {cat.icon}
                </span>
                <h3 className="mb-4 text-lg font-semibold tracking-tight">
                  {cat.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.06, y: -2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 18 }}
                      className="cursor-default rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-foreground/85 backdrop-blur"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
