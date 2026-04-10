import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Metrics />
        <Skills />
        <Experience />
        <Projects />
        <Education />
      </main>
      <Footer />
    </>
  );
}
