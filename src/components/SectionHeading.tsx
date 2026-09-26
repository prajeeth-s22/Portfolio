"use client";

import { motion } from 'framer-motion';
import { cn, fadeInUp } from '@/lib/utils';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={cn("flex flex-col items-center justify-center text-center mb-12", className)}
    >
      <div className="w-12 h-1 bg-accent rounded-full mb-4" />
      <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-secondary max-w-2xl text-base md:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
