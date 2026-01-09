import Certifications from "@/components/sections/Certifications";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/ui/Navbar";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="pt-20 md:pt-24">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}
