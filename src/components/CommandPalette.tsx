"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { commands } from "@/data/portfolio";
import { Command, Search } from "lucide-react";

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setResult(null);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  const filteredCommands = commands.filter((cmd) =>
    cmd.command.toLowerCase().includes(query.toLowerCase()) ||
    cmd.label.toLowerCase().includes(query.toLowerCase())
  );

  const handleCommandClick = (cmd: typeof commands[0]) => {
    if (cmd.command === "whoami") {
      setResult(cmd.label);
    } else if (cmd.section) {
      setIsOpen(false);
      const sectionId = cmd.section.replace('#', '');
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-start justify-center pt-[20vh]">
          <div className="absolute inset-0" onClick={() => setIsOpen(false)} />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="bg-surface border border-border rounded-xl w-full max-w-lg shadow-2xl overflow-hidden relative z-10 mx-4"
          >
            <div className="flex items-center px-4 py-3 border-b border-border">
              <Search className="text-text-muted mr-3" size={20} />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command... try /projects or whoami"
                className="w-full bg-transparent text-text-primary placeholder:text-text-muted focus:outline-none"
              />
              <Command className="text-text-muted ml-3" size={20} />
            </div>

            <div className="max-h-64 overflow-y-auto py-2">
              {result && (
                <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 mx-4 mb-4 text-accent text-sm">
                  {result}
                </div>
              )}
              
              {filteredCommands.length > 0 ? (
                filteredCommands.map((cmd, index) => (
                  <button
                    key={index}
                    onClick={() => handleCommandClick(cmd)}
                    className="px-4 py-2.5 w-full text-left hover:bg-surface-light transition flex items-center gap-3"
                  >
                    <span className="text-text-muted font-mono text-sm w-20">
                      {cmd.command}
                    </span>
                    <span className="text-text-secondary text-sm">
                      {cmd.label}
                    </span>
                  </button>
                ))
              ) : (
                <div className="px-4 py-3 text-text-muted text-sm text-center">
                  No commands found.
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
