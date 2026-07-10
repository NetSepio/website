'use client';

import React from "react";
import { motion } from "framer-motion";

/* Corner brackets for HUD panels — parent must be relative */
export const Corners = ({ className = "border-brand-cyan/60", size = "w-3 h-3" }) => (
  <>
    <span aria-hidden className={`absolute top-0 left-0 ${size} border-t border-l ${className}`}></span>
    <span aria-hidden className={`absolute top-0 right-0 ${size} border-t border-r ${className}`}></span>
    <span aria-hidden className={`absolute bottom-0 left-0 ${size} border-b border-l ${className}`}></span>
    <span aria-hidden className={`absolute bottom-0 right-0 ${size} border-b border-r ${className}`}></span>
  </>
);

/* [ 01 // CODE ] terminal tag */
export const MonoTag = ({ children, className = "" }) => (
  <span className={`mono-label inline-flex items-center gap-2 ${className}`}>
    <span className="text-brand-cyan/40">[</span>
    {children}
    <span className="text-brand-cyan/40">]</span>
  </span>
);

/* Pulsing status dot with label */
export const StatusDot = ({ children, color = "bg-brand-green" }) => (
  <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-gray-400">
    <span className={`w-1.5 h-1.5 ${color} animate-blink`}></span>
    {children}
  </span>
);

/* Numbered section heading with rule lines */
export const SectionHeader = ({ index, code, title, sub, align = "center" }) => {
  const isCenter = align === "center";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`${isCenter ? "text-center" : "text-left"} mb-16`}
    >
      <div className={`flex items-center gap-4 mb-6 ${isCenter ? "justify-center" : ""}`}>
        <span className="hidden sm:block h-px w-12 bg-brand-cyan/30"></span>
        <MonoTag>
          {index} <span className="text-brand-cyan/40">//</span> {code}
        </MonoTag>
        <span className="hidden sm:block h-px w-12 bg-brand-cyan/30"></span>
      </div>
      <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight uppercase">
        {title}
      </h2>
      {sub && (
        <p className={`text-gray-400 text-lg leading-relaxed mt-6 max-w-3xl ${isCenter ? "mx-auto" : ""}`}>
          {sub}
        </p>
      )}
    </motion.div>
  );
};

export default Corners;
