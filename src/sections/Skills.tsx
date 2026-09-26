"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Terminal, Globe, Cloud, Layers, Cpu, Users } from "lucide-react";
import { skillCategories } from "@/data/portfolio";
import { staggerContainer, fadeInUp } from "@/lib/utils";
import SectionHeading from "@/components/SectionHeading";

const iconMap: Record<string, React.ElementType> = {
  Brain,
  Terminal,
  Globe,
  Cloud,
  Layers,
  Cpu,
  Users
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...skillCategories.map(c => c.name)];

  const visibleCategories = activeCategory === "All" 
    ? skillCategories 
    : skillCategories.filter(c => c.name === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 max-w-6xl mx-auto">
      <SectionHeading title="Skills & Technologies" />
      
      <div className="mt-12">
        <div className="flex overflow-x-auto pb-4 mb-8 gap-2 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat 
                  ? "bg-accent text-background" 
                  : "bg-surface text-text-secondary border border-border hover:border-text-secondary/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div 
          className="flex flex-col gap-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <AnimatePresence mode="popLayout">
            {visibleCategories.map((category) => {
              const Icon = iconMap[category.icon] || Terminal;
              
              return (
                <motion.div 
                  key={category.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-2 mb-3 text-text-muted text-sm uppercase tracking-wider">
                    <Icon size={16} />
                    <span>{category.name}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <motion.div
                        key={skill}
                        variants={fadeInUp}
                        className="px-4 py-2 bg-surface-light border border-border rounded-lg text-text-primary text-sm hover:border-accent/50 hover:text-accent transition-colors cursor-default"
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
