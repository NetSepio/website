'use client';

import React from "react";
import { motion } from "framer-motion";
import ScrambleText from "./ScrambleText";
import ParticleNetwork from "./ParticleNetwork";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40"
        >
          <source src="/assets/HeroVideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
        <ParticleNetwork />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-tight">
            DePIN Powered <br />
            <span className="text-gradient"><ScrambleText text="Private, Secure & Agentic Internet" /></span>
          </h1>

          <p className="max-w-2xl mx-auto text-xl text-gray-300 mb-10 leading-relaxed">
            ÐVPN and AI Coordination Layer for Privacy and Sovereignty
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://x.com/netsepio"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-100 transition-colors w-full sm:w-auto"
            >
              Follow on X
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://discordapp.com/invite/5uaFhNpRF6"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-full glass text-white font-semibold hover:bg-white/10 transition-colors w-full sm:w-auto"
            >
              Join Discord
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-cyan/20 rounded-full blur-[100px] animate-blob mix-blend-screen pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-brand-green/20 rounded-full blur-[100px] animate-blob mix-blend-screen animation-delay-2000 pointer-events-none"></div>
    </div>
  );
};

export default Hero;
