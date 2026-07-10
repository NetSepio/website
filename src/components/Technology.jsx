'use client';

import React from "react";
import { motion } from "framer-motion";
import { Corners, SectionHeader } from "./hud";

export const technologies = [
  {
    title: "Decentralized Infrastructure",
    description: "DePIN remains part of the stack where it matters: resilient connectivity, permissionless participation, and fewer centralized choke points.",
  },
  {
    title: "Private Connectivity",
    description: "Erebrus VPN routes users through encrypted, censorship-resistant paths designed for privacy, continuity, and control.",
  },
  {
    title: "Local-First Sharing",
    description: "Erebrus Drop keeps file transfer close to the user with private WiFi and hotspot sharing that avoids cloud-dependent handoffs.",
  },
  {
    title: "Device and Network Defense",
    description: "Upcoming firewall and security tools will help users block unwanted tracking, intrusion, and control across their devices and networks.",
  },
  {
    title: "User-Owned AI",
    description: "ClawBrick fuses your notes, documents, and conversations into a second brain through a unified inference layer — on your terms, not a platform's.",
  },
  {
    title: "Sovereign Hosting",
    description: "The stack extends agency from the network layer into knowledge, inference, and hosting choices that remain under user control.",
  },
];

export function Technology() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 bg-void relative overflow-hidden">
      <div className="absolute inset-0 bg-hud-grid opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-neon/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader
          index="03"
          code="STACK_MODULES"
          title={<>Sovereignty <span className="text-gradient">Stack Layers</span></>}
          sub="Privacy, resilience, local ownership, and user-controlled AI across the modern internet stack."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {technologies.map((tech, idx) => (
            <motion.div
              key={tech.title}
              variants={item}
              whileHover={{ y: -5 }}
              className="hud-panel p-8 group relative overflow-hidden h-full flex flex-col hover:border-brand-cyan/40 transition-colors"
            >
              <Corners size="w-2 h-2" className="border-brand-cyan/25" />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <p className="font-mono text-[10px] tracking-[0.3em] text-brand-cyan/60 uppercase mb-4 relative z-10">
                MOD.{String(idx + 1).padStart(2, "0")}
              </p>

              <h3 className="font-heading text-xl font-bold text-white mb-4 uppercase tracking-tight group-hover:text-brand-cyan transition-colors relative z-10">
                {tech.title}
              </h3>

              <p className="text-gray-400 leading-relaxed flex-grow relative z-10">
                {tech.description}
              </p>

              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-brand-cyan via-neon to-brand-darkgreen opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Technology;
