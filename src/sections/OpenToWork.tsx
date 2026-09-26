"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { fadeInUp } from "@/lib/utils";
import Link from "next/link";

export default function OpenToWork() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/[0.03] to-background" />
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative max-w-3xl mx-auto text-center z-10"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-text-primary">
          Let's Build Something <span className="gradient-text">Intelligent.</span>
        </h2>
        <p className="text-text-secondary text-lg mt-6 max-w-2xl mx-auto">
          I'm currently open to opportunities where I can learn, build, solve real-world problems, and contribute to impactful technology.
        </p>
        
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {personalInfo.roles.map((role, index) => (
            <div
              key={index}
              className="px-4 py-2 border border-accent/30 text-accent rounded-full text-sm font-medium hover:bg-accent/10 transition"
            >
              {role}
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-10">
          <Link
            href="#contact"
            className="bg-accent hover:bg-accent-light text-background font-medium px-8 py-3 rounded-lg transition"
          >
            Let's Connect
          </Link>
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-border hover:border-accent text-text-primary px-8 py-3 rounded-lg transition"
          >
            View Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}
