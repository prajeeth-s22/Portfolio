"use client";

import { personalInfo } from "@/data/portfolio";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { Mail, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/utils";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 max-w-6xl mx-auto">
      <SectionHeading
        title="Have an idea, opportunity, or project?"
        subtitle="Let's connect and build something meaningful."
      />
      
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid lg:grid-cols-2 gap-12 mt-12"
      >
        <motion.div variants={fadeInUp}>
          <h3 className="text-xl font-bold text-text-primary">Get in Touch</h3>
          <p className="text-text-secondary mt-2">
            I'm always open to discussing product design work or partnership opportunities. Feel free to reach out through any of these platforms.
          </p>
          
          <div className="flex flex-col gap-4 mt-6">
            <a
              href={`mailto:${personalInfo.social.email}`}
              className="flex items-center gap-3 text-text-secondary hover:text-accent transition group"
            >
              <div className="w-10 h-10 rounded-lg bg-surface-light flex items-center justify-center group-hover:bg-accent/10 transition">
                <Mail size={20} />
              </div>
              <span>{personalInfo.social.email}</span>
            </a>
            
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-text-secondary hover:text-accent transition group"
            >
              <div className="w-10 h-10 rounded-lg bg-surface-light flex items-center justify-center group-hover:bg-accent/10 transition">
                <Linkedin size={20} />
              </div>
              <span>LinkedIn Profile</span>
            </a>
            
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-text-secondary hover:text-accent transition group"
            >
              <div className="w-10 h-10 rounded-lg bg-surface-light flex items-center justify-center group-hover:bg-accent/10 transition">
                <Github size={20} />
              </div>
              <span>GitHub Profile</span>
            </a>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <ContactForm />
        </motion.div>
      </motion.div>
    </section>
  );
}
