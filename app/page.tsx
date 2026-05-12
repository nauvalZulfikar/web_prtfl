import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Metrics from "@/components/Metrics";
import Services from "@/components/Services";
import StartHere from "@/components/StartHere";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import ProjectArchive from "@/components/ProjectArchive";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import LeadMagnet from "@/components/LeadMagnet";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import { projects } from "@/lib/data";

export default function Home() {
  const archive = projects.filter((p) => p.tier === 2);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <Metrics />
        <Services />
        <StartHere />
        <Projects />
        <Testimonials />
        <ProjectArchive projects={archive} heading="Selected Work" />
        <About />
        <LeadMagnet />
        <Skills />
        <Experience />
        <Education />
      </main>
      <Footer />
    </>
  );
}
