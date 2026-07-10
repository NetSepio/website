'use client';

import React from "react";
import { motion } from "framer-motion";
import ScrambleText from "./ScrambleText";
import { Corners, SectionHeader } from "./hud";

const principles = [
  {
    label: "CONNECT",
    title: "Private by design",
    description: "Erebrus VPN gives users resilient private connectivity through decentralized infrastructure.",
  },
  {
    label: "SHARE",
    title: "Local when it matters",
    description: "Erebrus Drop keeps nearby file transfers simple, direct, and independent of cloud platforms.",
  },
  {
    label: "PROTECT",
    title: "Defense against control",
    description: "Security and firewall tools will help people resist unwanted tracking, intrusion, and manipulation.",
  },
  {
    label: "REMEMBER",
    title: "A second brain you own",
    description: "ClawBrick unifies your notes, documents, and conversations into a sovereign second brain, powered by an inference layer you choose.",
  },
];

const Success = () => {
  return (
    <section className="py-24 bg-void relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-cyan/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <SectionHeader
          index="04"
          code="THREAT_MODEL"
          title={<>The Need For <span className="text-gradient"><ScrambleText text="True Sovereignty" /></span></>}
          sub="A surveilled internet pushes people toward rented access, rented storage, rented intelligence, and rented security. NetSepio is built for the opposite: practical tools that return control to the user."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="hud-panel p-8 group relative overflow-hidden hover:border-brand-cyan/40 transition-colors"
            >
              <Corners size="w-2 h-2" className="border-brand-cyan/25" />
              <div className="absolute inset-0 bg-brand-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="font-mono text-[11px] tracking-[0.3em] text-brand-cyan mb-5 relative z-10">
                <span className="text-brand-cyan/40">[</span> {principle.label} <span className="text-brand-cyan/40">]</span>
              </div>

              <h3 className="font-heading font-bold text-white text-xl mb-3 uppercase tracking-tight relative z-10">{principle.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed relative z-10">{principle.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Success;
