import Navbar from '@/components/Navbar';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import CareerFocus from '@/sections/CareerFocus';
import Skills from '@/sections/Skills';
import Experience from '@/sections/Experience';
import Projects from '@/sections/Projects';
import Research from '@/sections/Research';
import Certifications from '@/sections/Certifications';
import Achievements from '@/sections/Achievements';
import Interests from '@/sections/Interests';
import OpenToWork from '@/sections/OpenToWork';
import Contact from '@/sections/Contact';
import CommandPalette from '@/components/CommandPalette';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <CareerFocus />
      <Experience />
      <Projects />
      <Skills />
      <Research />
      <Certifications />
      <Achievements />
      <Interests />
      <OpenToWork />
      <Contact />
      <CommandPalette />
      
      <footer className="py-6 text-center text-sm text-text-secondary border-t border-border">
        © 2026 Partha Sarathi S. Built with passion and code.
      </footer>
    </div>
  );
}
