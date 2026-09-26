"use client";

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';
import ScrollIndicator from '@/components/ScrollIndicator';
import { personalInfo } from '@/data/portfolio';
import { staggerContainer, fadeInUp, scaleIn } from '@/lib/utils';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      <AnimatedBackground />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          {/* Status Badge */}
          <motion.div variants={fadeInUp} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-success/30 bg-success/10 text-success text-sm font-medium">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success"></span>
              </span>
              Open to Opportunities
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary mb-6">
            Building <span className="gradient-text">Intelligent Systems</span> for the Real World.
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-8 leading-relaxed">
            {personalInfo.subtitle}
          </motion.p>

          {/* Tagline */}
          <motion.div variants={fadeInUp} className="mb-6">
            <p className="text-sm tracking-widest uppercase text-text-muted font-mono">
              AI/ML &times; Software &times; Cloud &times; Data
            </p>
          </motion.div>

          {/* AI System Pipeline Visualization */}
          <motion.div variants={fadeInUp} className="mb-8 w-full max-w-sm sm:max-w-md mx-auto">
            <div className="flex items-center justify-between p-2.5 px-4 rounded-xl border border-border/80 bg-surface/60 backdrop-blur-sm text-xs font-mono text-text-secondary shadow-lg shadow-black/40">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent/60 animate-pulse"></span>
                <span className="text-text-primary font-semibold tracking-wider">DATA</span>
              </div>
              
              <div className="flex items-center gap-1 text-accent/60">
                <div className="h-[1px] w-5 sm:w-8 bg-gradient-to-r from-accent/30 via-accent to-accent/30"></div>
                <span className="text-accent text-[11px]">&gt;</span>
              </div>

              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-accent/10 border border-accent/30 text-accent font-semibold">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
                </span>
                <span>INTELLIGENCE</span>
              </div>

              <div className="flex items-center gap-1 text-violet-light/60">
                <div className="h-[1px] w-5 sm:w-8 bg-gradient-to-r from-accent/30 via-violet to-violet/30"></div>
                <span className="text-violet-light text-[11px]">&gt;</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-text-primary font-semibold tracking-wider">SOLUTION</span>
                <span className="w-2 h-2 rounded-full bg-success/80 animate-pulse"></span>
              </div>
            </div>
          </motion.div>


          {/* Role Chips */}
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center items-center gap-3 mb-10">
            {personalInfo.roles.map((role, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full border border-border text-sm text-text-secondary">
                  {role}
                </span>
                {index < personalInfo.roles.length - 1 && (
                  <span className="text-text-muted hidden md:inline-block">&middot;</span>
                )}
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mb-12">
            <a 
              href="#projects" 
              className="bg-accent hover:bg-accent-light text-background font-medium px-6 py-3 rounded-lg transition-colors flex items-center justify-center"
            >
              View My Work
            </a>
            <a 
              href={personalInfo.resumeUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border hover:border-accent text-text-primary font-medium px-6 py-3 rounded-lg transition-colors flex items-center justify-center"
            >
              Download Resume
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={scaleIn} className="flex items-center justify-center gap-6">
            <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors">
              <Github size={24} />
            </a>
            <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors">
              <Linkedin size={24} />
            </a>
            <a href={`mailto:${personalInfo.social.email}`} className="text-text-secondary hover:text-accent transition-colors">
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
