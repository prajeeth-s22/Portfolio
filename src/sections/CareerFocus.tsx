"use client";

import { motion } from "framer-motion";
import { Brain, Code2, Database, Cloud } from "lucide-react";
import { careerFocus } from "@/data/portfolio";
import { staggerContainer, fadeInUp } from "@/lib/utils";
import SectionHeading from "@/components/SectionHeading";

const iconMap: Record<string, React.ElementType> = {
  Brain,
  Code2,
  Database,
  Cloud,
};

const colorMap: Record<string, string> = {
  "accent": "text-accent bg-accent/10",
  "violet": "text-violet bg-violet/10",
  "success": "text-success bg-success/10",
  "accent-light": "text-accent-light bg-accent-light/10",
};

export default function CareerFocus() {
  return (
    <section id="career" className="py-24 px-4 max-w-6xl mx-auto">
      <SectionHeading title="What I'm Looking For" />
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {careerFocus.map((item, index) => {
          const Icon = iconMap[item.icon] || Code2;
          const colorClasses = colorMap[item.color] || colorMap["accent"];
          
          return (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="bg-surface border border-border rounded-2xl p-8 hover:border-accent/50 transition-colors"
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${colorClasses}`}>
                <Icon size={24} />
              </div>
              

              <h3 className="text-xl font-bold text-text-primary mt-4">{item.title}</h3>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {item.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="px-3 py-1 text-sm rounded-full bg-surface-light text-text-secondary border border-border/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
