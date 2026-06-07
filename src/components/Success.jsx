'use client';

import React from "react";
import { motion } from "framer-motion";
import ScrambleText from "./ScrambleText";

const Success = () => {
  const principles = [
    {
      label: "Connect",
      title: "Private by design",
      description: "Erebrus VPN gives users resilient private connectivity through decentralized infrastructure.",
    },
    {
      label: "Share",
      title: "Local when it matters",
      description: "Erebrus Drop keeps nearby file transfers simple, direct, and independent of cloud platforms.",
    },
    {
      label: "Protect",
      title: "Defense against control",
      description: "Security and firewall tools will help people resist unwanted tracking, intrusion, and manipulation.",
    },
    {
      label: "Train and host",
      title: "AI on your terms",
      description: "ClawBrick brings sovereignty to personal agents, PEFT, SLM deployment, and model hosting.",
    },
  ];

  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-green/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            The Need For <span className="text-gradient"><ScrambleText text="True Sovereignty" /></span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A surveilled internet pushes people toward rented access, rented
            storage, rented intelligence, and rented security. NetSepio is built
            for the opposite: practical tools that return control to the user.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="glass-card p-8 group relative overflow-hidden border border-white/5 hover:border-brand-green/30 transition-colors"
            >
              <div className="absolute inset-0 bg-brand-green/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-cyan mb-4">
                {principle.label}
              </div>

              <h3 className="font-bold text-white text-xl mb-3">{principle.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{principle.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Success;
