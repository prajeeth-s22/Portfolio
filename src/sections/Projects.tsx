"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import SectionHeading from "@/components/SectionHeading";
import { ExternalLink, Github } from "lucide-react";
import { cn, fadeInUp, staggerContainer } from "@/lib/utils";

export default function Projects() {
  const featuredProject = projects.find(p => p.featured);
  const remainingProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 px-4 max-w-6xl mx-auto">
      <SectionHeading title="Things I've Built" />
      
      {featuredProject && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="w-full bg-surface border border-border rounded-2xl p-8 md:p-10 mb-10 hover:border-accent/40 transition-colors duration-300 relative group overflow-hidden"
        >
          {/* Subtle Glow */}
          <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
          
          <div className="relative z-10">
            <div className="text-accent text-sm font-medium uppercase tracking-wider mb-2">
              Featured Project
            </div>
            
            {featuredProject.category && (
              <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs rounded-full mb-3">
                {featuredProject.category}
              </div>
            )}
            
            <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              {featuredProject.title}
            </h3>
            
            <p className="text-text-secondary text-lg leading-relaxed mb-6 max-w-3xl">
              {featuredProject.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {featuredProject.technologies.map(tech => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-surface-light border border-border rounded-full text-sm text-text-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex gap-4">
              <a
                href={featuredProject.github || "#"}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-text-secondary hover:text-accent hover:bg-accent/10 rounded-full transition-colors"
                aria-label="GitHub Repository"
              >
                <Github size={24} />
              </a>
              <a
                href={featuredProject.link || "#"}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-text-secondary hover:text-accent hover:bg-accent/10 rounded-full transition-colors"
                aria-label="Live Demo"
              >
                <ExternalLink size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      )}

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
      >
        {remainingProjects.map((project, idx) => (
          <motion.div
            key={idx}
            variants={fadeInUp}
            whileHover={{ y: -4 }}
            className="bg-surface border border-border rounded-xl p-6 group transition-colors hover:border-accent/30 flex flex-col h-full relative"
          >
            {project.badge && (
              <div className={cn(
                "inline-block px-2 py-0.5 text-xs rounded-full font-medium mb-3 w-fit",
                project.badge.includes('IEEE') ? "bg-violet/10 text-violet" : "bg-accent/10 text-accent"
              )}>
                {project.badge}
              </div>
            )}
            
            {project.category && (
              <div className="text-text-muted text-xs uppercase tracking-wider mb-2">
                {project.category}
              </div>
            )}
            
            <h4 className="text-lg font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">
              {project.title}
            </h4>
            
            <p className="text-text-secondary text-sm mb-4 line-clamp-3 flex-grow">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.technologies.map(tech => (
                <span
                  key={tech}
                  className="px-2 py-0.5 bg-surface-light text-text-muted text-xs rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="mt-auto pt-4 border-t border-border/50">
              <a
                href={project.github || "#"}
                target="_blank"
                rel="noreferrer"
                className="text-text-secondary hover:text-accent transition-colors inline-block"
                aria-label="GitHub Repository"
              >
                <Github size={20} />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
