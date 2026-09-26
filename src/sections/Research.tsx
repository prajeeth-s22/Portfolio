"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { BookOpen, Award, Shield } from "lucide-react";
import { fadeInUp } from "@/lib/utils";

export default function Research() {
  return (
    <section id="research" className="py-24 px-4 max-w-6xl mx-auto">
      <SectionHeading title="Research & Innovation" />
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="bg-surface border border-border rounded-2xl p-8 md:p-10 relative overflow-hidden"
      >
        {/* Subtle background decoration */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle at center, rgba(0,180,216,0.3) 1px, transparent 1px)",
            backgroundSize: "24px 24px"
          }}
        />

        {/* Animated Network Visualization */}
        <div className="absolute right-[-10%] top-[-10%] w-[300px] h-[300px] pointer-events-none hidden md:block opacity-30">
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-accent"
          />
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-3/4 left-1/3 w-2 h-2 rounded-full bg-accent"
          />
          <motion.div 
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-accent"
          />
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-1/4 right-1/3 w-2.5 h-2.5 rounded-full bg-accent"
          />
          
          {/* Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full text-accent/40" style={{ strokeWidth: 1 }}>
            <motion.line 
              x1="25%" y1="25%" x2="75%" y2="50%" 
              stroke="currentColor" 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.line 
              x1="25%" y1="25%" x2="33%" y2="75%" 
              stroke="currentColor"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
            />
            <motion.line 
              x1="75%" y1="50%" x2="66%" y2="75%" 
              stroke="currentColor"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: 1 }}
            />
          </svg>
        </div>
        
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-2 text-accent text-sm font-medium mb-4">
            <BookOpen size={18} />
            <span className="uppercase tracking-wider">Published Research</span>
          </div>
          
          <div className="inline-flex items-center gap-2 bg-violet/10 border border-violet/30 text-violet px-3 py-1 rounded-full text-sm font-medium mb-2">
            <Award size={16} />
            <span>IEEE Conference Accepted · 2025</span>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold text-text-primary mt-4 mb-4">
            Supervised ML-based Intrusion Detection System
          </h3>
          
          <p className="text-text-secondary text-lg leading-relaxed mb-6">
            Developed supervised ML models for IoT intrusion detection, improving detection while reducing false positives through feature optimization.
          </p>
          
          <div className="flex flex-wrap gap-2 mt-6">
            {['Machine Learning', 'IoT Security', 'Intrusion Detection', 'Feature Optimization'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-surface-light border border-border rounded-full text-sm text-text-secondary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
