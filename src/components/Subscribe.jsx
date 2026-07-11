'use client';

import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { Corners, MonoTag } from "./hud";
import {
  pressableScale,
  revealScale,
  revealUp,
  viewportOnce,
} from "../lib/motion";

const Subscribe = () => {
  return (
    <section className="py-24 bg-void relative overflow-hidden">
      <div className="absolute inset-0 bg-hud-grid-fine opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Transmission signup */}
        <motion.div
          {...revealUp}
          viewport={viewportOnce}
          className="relative overflow-hidden mb-24 max-w-5xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan via-brand-darkgreen to-neon opacity-10"></div>

          <div className="relative hud-panel-solid p-12 md:p-16 text-center scanlines overflow-hidden">
            <Corners />
            <div className="scan-beam"></div>

            <MonoTag className="mb-6">TRANSMISSION <span className="text-brand-cyan/40">{"//"}</span> SUBSCRIBE</MonoTag>

            <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6 leading-tight uppercase tracking-tight">
              Build With The <br /> <span className="text-gradient text-glow">Sovereignty Stack</span>
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
              Follow NetSepio for updates on private connectivity, local-first
              sharing, security tools, and user-owned AI infrastructure.
            </p>
            <motion.a
              {...pressableScale}
              href="https://netsepio.substack.com/"
              target="_blank"
              rel="noreferrer"
              className="btn-hud"
            >
              Subscribe <FiArrowUpRight />
            </motion.a>
          </div>
        </motion.div>

        {/* Community */}
        <motion.div
          {...revealScale}
          viewport={viewportOnce}
          className="text-center"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-10 uppercase tracking-tight">
            Join Our Community. <span className="text-brand-cyan">Join the Future.</span>
          </h2>

          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <motion.a
              {...pressableScale}
              href="https://discordapp.com/invite/5uaFhNpRF6"
              target="_blank"
              rel="noreferrer"
              className="btn-hud-outline w-full sm:w-auto"
            >
              Discord <FiArrowUpRight />
            </motion.a>
            <motion.a
              {...pressableScale}
              href="https://t.me/NetSepio"
              target="_blank"
              rel="noreferrer"
              className="btn-hud-outline w-full sm:w-auto"
            >
              Telegram <FiArrowUpRight />
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Subscribe;
