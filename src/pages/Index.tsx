
import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Hobbies from "@/components/Hobbies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main>
        <section id="home" className="scroll-mt-16">
          <Hero />
        </section>
        
        <section id="about" className="scroll-mt-16">
          <About />
        </section>
        
        <section id="skills" className="scroll-mt-16">
          <Skills />
        </section>
        
        <section id="experience" className="scroll-mt-16">
          <Experience />
        </section>
        
        <section id="education" className="scroll-mt-16">
          <Education />
        </section>
        
        <section id="projects" className="scroll-mt-16">
          <Projects />
        </section>
        
        <section id="certificates" className="scroll-mt-16">
          <Certificates />
        </section>
        
        <section id="hobbies" className="scroll-mt-16">
          <Hobbies />
        </section>
        
        <section id="contact" className="scroll-mt-16">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
