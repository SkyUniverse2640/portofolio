import GlassCard from "./GlassCard";
import Reveal from "./Reveal";
import { profile } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="mb-10 flex flex-col items-center text-center">
            <span className="mb-3 rounded-full bg-white/12 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-foreground/60 backdrop-blur">
              About
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Grounded in data &amp; truth
            </h2>
          </div>
        </Reveal>

        <GlassCard borderRadius={32} interactive delay={0.1}>
          <div className="grid gap-8 p-8 sm:p-10 md:grid-cols-[1.5fr_1fr]">
            <div className="space-y-4">
              <p className="text-base leading-relaxed text-foreground/85 sm:text-lg">
                {profile.summary}
              </p>
              <p className="text-sm leading-relaxed text-foreground/65">
                {profile.summaryExtended}
              </p>
            </div>
            <dl className="flex flex-col gap-4 border-t border-white/15 pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
              <Detail label="Role" value={profile.role} />
              <Detail label="Location" value={profile.location} />
              <Detail label="Education" value={profile.education} />
              <Detail label="Experience" value="2+ years in IT operations" />
            </dl>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-widest text-foreground/45">
        {label}
      </dt>
      <dd className="mt-1 text-sm font-medium text-foreground/90">{value}</dd>
    </div>
  );
}
