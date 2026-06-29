import GlassCard from "./GlassCard";
import Reveal from "./Reveal";
import { timeline } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="mb-12 flex flex-col items-center text-center">
            <span className="mb-3 rounded-full bg-white/12 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-foreground/60 backdrop-blur">
              Journey
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Experience &amp; Education
            </h2>
          </div>
        </Reveal>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-white/35 via-white/15 to-transparent md:left-1/2" />

          <div className="flex flex-col gap-8">
            {timeline.map((entry, i) => (
              <div
                key={`${entry.org}-${i}`}
                className={`relative flex md:items-center ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Node */}
                <div className="absolute left-4 z-20 -translate-x-1/2 md:left-1/2">
                  <span className="grid h-4 w-4 place-items-center rounded-full bg-foreground ring-4 ring-[var(--background)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--background)]" />
                  </span>
                </div>

                <div className="w-full pl-12 md:w-1/2 md:px-8">
                  <GlassCard borderRadius={24} interactive delay={i * 0.08}>
                    <div className="p-6">
                      <div className="mb-2 flex items-center gap-2">
                        <span className="rounded-full bg-white/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-foreground/70 backdrop-blur">
                          {entry.type === "work" ? "Work" : "Education"}
                        </span>
                        <span className="text-xs text-foreground/45">
                          {entry.period}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold tracking-tight">
                        {entry.role}
                      </h3>
                      <p className="mb-3 text-sm font-medium text-foreground/70">
                        {entry.org}
                        {entry.location ? (
                          <span className="text-foreground/45">
                            {" "}
                            · {entry.location}
                          </span>
                        ) : null}
                      </p>
                      <p className="text-sm leading-relaxed text-foreground/75">
                        {entry.description}
                      </p>
                    </div>
                  </GlassCard>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
