"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { experiences } from "@/data/portfolio";
import { fadeInUp } from "@/lib/utils";
import SectionHeading from "@/components/SectionHeading";

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-24 px-4 max-w-6xl mx-auto">
      <SectionHeading title="Experience" />
      
      <div className="mt-16 relative">
        <div className="absolute left-[7px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px] bg-border" />
        
        <div className="flex flex-col gap-8 md:gap-16">
          {experiences.map((exp, index) => {
            const isExpanded = expandedIndex === index;
            
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-start md:items-center pl-8 md:pl-0`}
              >
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 mt-1.5 md:mt-0 w-4 h-4 rounded-full bg-accent border-4 border-background transition-shadow duration-300 hover:shadow-[0_0_8px_rgba(0,180,216,0.8)] z-10" />

                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 lg:pr-16" : "md:pl-12 lg:pl-16"} w-full`}>
                  <div 
                    onClick={() => toggleExpand(index)}
                    className="bg-surface border border-border rounded-xl p-6 max-w-lg cursor-pointer hover:border-border/80 transition-colors"
                  >
                    <h3 className="text-accent font-semibold text-lg">{exp.company}</h3>
                    <h4 className="text-text-primary font-medium mt-1">{exp.role}</h4>
                    
                    <div className="flex flex-wrap items-center gap-3 text-text-muted text-sm mt-2">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      {exp.location && (
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      )}
                    </div>
                    
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <ul className="text-text-secondary text-sm mt-4 space-y-2">
                            {exp.description.map((desc, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" />
                                <span>{desc}</span>
                              </li>
                            ))}
                          </ul>
                          
                          {exp.tags && (
                            <div className="flex flex-wrap gap-1.5 mt-4">
                              {exp.tags.map((tag, sIdx) => (
                                <span key={sIdx} className="bg-surface-light text-text-muted text-xs px-2 py-0.5 rounded-full">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
