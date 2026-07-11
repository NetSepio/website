'use client';

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Corners, SectionHeader } from "./hud";
import {
  pressableScale,
  revealScale,
  viewportOnce,
  viewportOnceEarly,
} from "../lib/motion";

const manifesto = [
  { cmd: "cat /etc/netsepio/ethos", out: null },
  {
    cmd: null,
    out: "NetSepio is the sovereignty stack for digital agency: DePIN-powered where resilience matters, privacy-first everywhere, and built for people who want to own their connection, sharing, defenses, and AI.",
  },
  {
    cmd: null,
    out: "Access shouldn't depend on permission. Memory shouldn't live on someone else's servers. Intelligence shouldn't be rented.",
  },
  {
    cmd: null,
    out: "Every platform we ship — from encrypted decentralized connectivity to a sovereign second brain — is built on one principle: you own it.",
    accent: true,
  },
];

const Connectivity = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-void">
      <div className="absolute inset-0 bg-hud-grid-fine opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader
          index="00"
          code="ETHOS"
          title={<>Infrastructure For <span className="text-gradient">Digital Agency</span></>}
        />

        <motion.div
          {...revealScale}
          viewport={viewportOnceEarly}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="hud-panel-solid max-w-4xl mx-auto relative overflow-hidden scanlines"
        >
          <Corners />

          {/* Terminal title bar */}
          <div className="flex items-center justify-between px-6 py-3 border-b border-brand-cyan/15 bg-black/30">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-white/15"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-white/15"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan/60"></span>
            </div>
            <span className="font-mono text-[11px] tracking-[0.2em] text-gray-500 uppercase">netsepio://manifesto</span>
          </div>

          {/* Terminal body */}
          <div className="p-8 md:p-12 font-mono text-sm md:text-base leading-relaxed space-y-5 text-left">
            {manifesto.map((line, i) => (
              <div key={i}>
                {line.cmd && (
                  <p className="text-brand-cyan">
                    <span className="text-brand-cyan/40 mr-2">$</span>
                    {line.cmd}
                  </p>
                )}
                {line.out && (
                  <p className={line.accent ? "text-white" : "text-gray-400"}>
                    {line.out}
                  </p>
                )}
              </div>
            ))}
            <p className="text-brand-cyan/60">
              <span className="text-brand-cyan/40 mr-2">$</span>
              <span className="animate-blink">█</span>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <motion.span {...pressableScale} className="inline-block">
            <Link href="/mission" className="btn-hud">
              Read Our Mission
            </Link>
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
};

export default Connectivity;
