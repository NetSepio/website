'use client';

import React from "react";
import { motion } from "framer-motion";
import ScrambleText from "./ScrambleText";
import ParticleNetwork from "./ParticleNetwork";

const stats = [
  { key: "PRIVACY", value: "DEFAULT" },
  { key: "CENSORSHIP", value: "RESISTED" },
  { key: "INFRA", value: "DECENTRALIZED" },
  { key: "AI", value: "USER-OWNED" },
];

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-12">
      {/* Layered backdrop: video signal + blueprint grid + particle mesh */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src="/assets/HeroVideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-hud-grid"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-void/70 via-void/40 to-void"></div>
        <ParticleNetwork />
      </div>

      {/* HUD chrome */}
      <div className="absolute top-24 left-6 hidden md:block font-mono text-[10px] uppercase tracking-[0.25em] text-brand-cyan/50 space-y-1 z-10">
        <p>netsepio://sovereignty_stack</p>
        <p>secure_channel :: open</p>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center flex-grow flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="font-mono text-xs md:text-sm text-brand-cyan/80 tracking-[0.3em] uppercase mb-8">
            <span className="text-brand-cyan/40">&gt;</span>{" "}
            <ScrambleText text="INITIALIZING SOVEREIGNTY STACK" />
            <span className="animate-blink text-brand-cyan">_</span>
          </p>

          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 leading-[1.05] uppercase">
            The Sovereignty<br />
            <span className="text-gradient text-glow">Stack For The</span><br />
            Open Internet
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-12 leading-relaxed">
            NetSepio builds privacy-first, censorship-resistant tools for people
            who want control over how they connect, share, protect, and remember
            in a surveilled digital world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="/#suite"
              className="btn-hud w-full sm:w-auto"
            >
              Explore the Stack
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="https://x.com/netsepio"
              target="_blank"
              rel="noreferrer"
              className="btn-hud-outline w-full sm:w-auto"
            >
              Follow on X
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="https://discordapp.com/invite/5uaFhNpRF6"
              target="_blank"
              rel="noreferrer"
              className="btn-hud-ghost w-full sm:w-auto"
            >
              Join Discord
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* HUD stat strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-16"
      >
        <div className="hidden md:flex justify-end font-mono text-[10px] uppercase tracking-[0.25em] text-brand-cyan/50 gap-8 mb-3">
          <p>surveillance :: rejected</p>
          <p>ownership :: transferred_to_user</p>
        </div>
        <div className="hud-panel grid grid-cols-2 md:grid-cols-4 divide-x divide-brand-cyan/10 border-brand-cyan/20">
          {stats.map((stat) => (
            <div key={stat.key} className="px-5 py-4 text-center">
              <p className="font-mono text-[10px] tracking-[0.3em] text-gray-500 uppercase mb-1">{stat.key}</p>
              <p className="font-mono text-xs md:text-sm tracking-[0.15em] text-brand-cyan uppercase">{stat.value}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Decorative glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-cyan/15 rounded-full blur-[120px] animate-blob mix-blend-screen pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-neon/10 rounded-full blur-[120px] animate-blob mix-blend-screen pointer-events-none" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default Hero;
