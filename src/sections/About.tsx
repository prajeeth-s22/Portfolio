"use client";

import { motion } from "framer-motion";
import { personalInfo, aboutText } from "@/data/portfolio";
import { fadeInUp, slideInRight } from "@/lib/utils";
import SectionHeading from "@/components/SectionHeading";

export default function About() {
  return (
    <section id="about" className="py-24 px-4 max-w-6xl mx-auto">
      <SectionHeading title="A little about me" />
      
      <div className="lg:grid lg:grid-cols-5 gap-12 mt-12">
        <motion.div 
          className="lg:col-span-3 flex flex-col"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {aboutText.map((paragraph, index) => (
            <p key={index} className="text-text-secondary text-lg leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}
        </motion.div>

        <motion.div 
          className="lg:col-span-2"
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="bg-surface border border-border rounded-2xl p-6">
            <div className="border-b border-border py-3">
              <div className="text-text-muted text-sm uppercase tracking-wider mb-1">Education</div>
              <div className="text-text-primary font-medium">VIT Vellore</div>
            </div>
            <div className="border-b border-border py-3">
              <div className="text-text-muted text-sm uppercase tracking-wider mb-1">Degree</div>
              <div className="text-text-primary font-medium">B.Tech CSE – AI & ML</div>
            </div>
            <div className="border-b border-border py-3">
              <div className="text-text-muted text-sm uppercase tracking-wider mb-1">CGPA</div>
              <div className="text-text-primary font-medium">8.0 / 10.0</div>
            </div>
            <div className="border-b border-border py-3">
              <div className="text-text-muted text-sm uppercase tracking-wider mb-1">Location</div>
              <div className="text-text-primary font-medium">Hosur, Tamil Nadu, India</div>
            </div>
            <div className="py-3">
              <div className="text-text-muted text-sm uppercase tracking-wider mb-1">Graduation</div>
              <div className="text-text-primary font-medium">2027</div>
            </div>
          </div>

          <div className="mt-8 relative h-32 w-full bg-surface border border-border rounded-2xl overflow-hidden flex items-center justify-center">
            {/* Animated visualization */}
            <motion.div
              className="absolute w-3 h-3 rounded-full bg-accent z-10"
              animate={{ y: [-3, 3, -3], x: [-3, 3, -3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{ top: '30%', left: '20%' }}
            />
            <motion.div
              className="absolute w-4 h-4 rounded-full bg-accent z-10"
              animate={{ y: [4, -4, 4], x: [4, -4, 4] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{ top: '60%', left: '45%' }}
            />
            <motion.div
              className="absolute w-3 h-3 rounded-full bg-accent z-10"
              animate={{ y: [-2, 2, -2], x: [4, -4, 4] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              style={{ top: '35%', left: '75%' }}
            />
            {/* Connecting lines */}
            <motion.div
              className="absolute border-t border-accent/30 origin-left"
              style={{ top: '33%', left: '23%', width: '30%' }}
              animate={{ rotate: [30, 25, 30] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute border-t border-accent/30 origin-left"
              style={{ top: '63%', left: '48%', width: '30%' }}
              animate={{ rotate: [-40, -45, -40] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
