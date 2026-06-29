import GlassCard from "./GlassCard";
import Reveal from "./Reveal";
import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <section id="certifications" className="relative px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="mb-12 flex flex-col items-center text-center">
            <span className="mb-3 rounded-full bg-white/12 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-foreground/60 backdrop-blur">
              Credentials
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Certifications
            </h2>
            <p className="mt-3 max-w-md text-sm text-foreground/60">
              Industry credentials across project management, cybersecurity,
              networking, and cloud.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <GlassCard
              key={cert.name}
              borderRadius={26}
              interactive
              delay={i * 0.08}
              surfaceClassName="h-full"
              className="h-full"
            >
              <div className="flex h-full items-center gap-4 p-6">
                {/* Seal */}
                <div className="relative grid h-16 w-16 shrink-0 place-items-center">
                  <span className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-white/25" />
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-white/30 to-white/5 text-[11px] font-bold tracking-tight backdrop-blur">
                    {cert.abbr}
                  </span>
                </div>

                <div className="min-w-0">
                  <h3 className="text-base font-semibold leading-tight tracking-tight">
                    {cert.name}
                  </h3>
                  <p className="mt-1 text-xs text-foreground/60">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
