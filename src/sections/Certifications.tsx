"use client";

import { motion } from "framer-motion";
import { certifications } from "@/data/portfolio";
import SectionHeading from "@/components/SectionHeading";
import { Award, Cloud, Cpu } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/utils";

// Map certification titles to icons (just a simple heuristic)
const getIcon = (title: string) => {
  if (title.includes("AWS") || title.includes("Cloud")) return <Cloud size={22} />;
  if (title.includes("Oracle") || title.includes("Java")) return <Cpu size={22} />;
  return <Award size={22} />;
};

export default function Certifications() {
  return (
    <section className="py-24 px-4 max-w-6xl mx-auto">
      <SectionHeading title="Certifications" />
      
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            variants={fadeInUp}
            whileHover={{ y: -2 }}
            className="bg-surface border border-border rounded-xl p-6 hover:border-accent/40 transition-colors duration-300"
          >
            <div className="w-11 h-11 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-4">
              {getIcon(cert.title)}
            </div>
            
            <h4 className="text-lg font-bold text-text-primary mt-4">
              {cert.title}
            </h4>
            
            <div className="text-text-secondary text-sm mt-1">
              {cert.provider}
            </div>
            
            <div className="text-text-muted text-sm mt-2 font-medium">
              {cert.date}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
