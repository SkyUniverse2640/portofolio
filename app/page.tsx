import MeshBackground from "@/components/MeshBackground";
import LiquidNav from "@/components/LiquidNav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <MeshBackground />
      <LiquidNav />
      <main className="relative pb-24 md:pb-0">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Certifications />
        <Contact />
      </main>
    </>
  );
}
