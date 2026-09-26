"use client";

import { motion } from "framer-motion";
import { achievements } from "@/data/portfolio";
import SectionHeading from "@/components/SectionHeading";
import { Rocket, Globe, Bot, Lightbulb, Zap, LucideIcon } from "lucide-react";
import { staggerContainer, scaleIn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Rocket,
  Globe,
  Bot,
  Lightbulb,
  Zap,
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-4 max-w-6xl mx-auto">
      <SectionHeading 
        title="Beyond the Code" 
        subtitle="Activities, communities, and hackathons" 
      />
      
      <div className="relative min-h-[400px] flex items-center justify-center mt-12">
        {/* Subtle Background Connecting Lines using CSS */}
        <div className="absolute inset-0 z-0 hidden md:block">
          <div className="w-full h-full border-t border-b border-border/20 absolute top-1/2 -translate-y-1/2" />
          <div className="w-full h-full border-l border-r border-border/20 absolute left-1/3 -translate-x-1/2" />
          <div className="w-full h-full border-l border-r border-border/20 absolute left-2/3 -translate-x-1/2" />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative z-10 w-full grid grid-cols-2 md:grid-cols-3 gap-8"
        >
          {achievements.map((item, idx) => {
            const Icon = iconMap[item.icon] || Rocket;
            
            return (
              <motion.div
                key={idx}
                variants={scaleIn}
                className="bg-surface border border-border rounded-xl p-5 text-center cursor-pointer group hover:border-accent/40 hover:shadow-[0_0_20px_rgba(0,180,216,0.1)] transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 text-accent mx-auto flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-background transition-colors duration-300">
                  <Icon size={24} />
                </div>
                
                <h4 className="text-text-primary font-medium mt-3 text-sm px-2">
                  {item.title}
                </h4>
                
                <p className="text-text-muted text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-0 group-hover:h-auto overflow-hidden">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
