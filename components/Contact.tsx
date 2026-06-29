import GlassCard from "./GlassCard";
import { socials, profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="relative px-4 pb-16 pt-24">
      <div className="mx-auto max-w-4xl">
        <GlassCard borderRadius={36}>
          <div className="flex flex-col items-center gap-8 p-10 text-center sm:p-14">
            <div>
              <span className="mb-3 inline-block rounded-full bg-white/12 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-foreground/60 backdrop-blur">
                Contact
              </span>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Let’s build something reliable
              </h2>
              <p className="mx-auto mt-3 max-w-md text-sm text-foreground/70">
                Open to collaborations, opportunities, and conversations about
                infrastructure, DevOps, and the web.
              </p>
            </div>

            <div className="grid w-full gap-3 sm:grid-cols-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
                >
                  <p className="text-xs uppercase tracking-widest text-foreground/45">
                    {s.label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground/90 group-hover:text-foreground">
                    {s.handle}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </GlassCard>

        <footer className="mt-10 flex flex-col items-center gap-1 text-center text-xs text-foreground/45">
          <p>
            © {new Date().getFullYear()} {profile.name}. {profile.tagline}.
          </p>
          <p>Built with Next.js, Tailwind CSS, Framer Motion &amp; React Bits.</p>
        </footer>
      </div>
    </section>
  );
}
