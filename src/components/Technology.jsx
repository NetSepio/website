'use client';

import React from "react";
import { motion } from "framer-motion";

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
    description: "ClawBrick lets builders fine-tune, PEFT, deploy, and host personal agents and SLMs without depending entirely on closed platforms.",
  },
  {
    title: "Sovereign Hosting",
    description: "The stack extends agency from the network layer into computation, intelligence, and hosting choices that remain under user control.",
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
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Sovereignty <span className="text-brand-green">Stack Layers</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Privacy, resilience, local ownership, and user-controlled AI across
            the modern internet stack.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {technologies.map((tech, idx) => (
            <motion.div
              key={tech.title}
              variants={item}
              whileHover={{ y: -5 }}
              className="glass-card p-8 group relative overflow-hidden h-full flex flex-col"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-brand-cyan transition-colors relative z-10">
                {tech.title}
              </h3>

              <p className="text-gray-400 leading-relaxed flex-grow relative z-10">
                {tech.description}
              </p>

              {/* Decorative line */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-brand-cyan via-brand-green to-brand-darkgreen opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Technology;
