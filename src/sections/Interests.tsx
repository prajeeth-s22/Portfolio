"use client";

import { motion } from "framer-motion";
import { interests } from "@/data/portfolio";
import SectionHeading from "@/components/SectionHeading";
import { staggerContainer, fadeIn } from "@/lib/utils";

export default function Interests() {
  return (
    <section id="interests" className="py-24 px-4 max-w-6xl mx-auto">
      <SectionHeading title="What I'm Curious About" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-wrap justify-center gap-4 mt-8"
      >
        {interests.map((interest, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 3 + (index % 3), // 3-5s
              repeat: Infinity,
              delay: index * 0.2,
              ease: "easeInOut",
            }}
            className="px-5 py-2.5 bg-surface border border-border rounded-full text-text-secondary text-sm hover:border-accent/50 hover:text-accent hover:bg-accent/5 transition cursor-default"
          >
            {interest}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
