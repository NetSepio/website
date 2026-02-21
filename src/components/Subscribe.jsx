'use client';

import React from "react";
import { motion } from "framer-motion";

const Subscribe = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Newsletter Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden mb-24 max-w-5xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-green via-brand-darkgreen to-brand-cyan opacity-20"></div>

          <div className="relative glass p-12 md:p-16 text-center border border-white/10">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Transforming Internet Through <br /> the Power of <span className="text-gradient">DePIN and AI</span>
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
              Subscribe to our newsletter for insights and the next meta.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://netsepio.substack.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-10 py-4 rounded-full bg-white text-black font-semibold shadow-xl hover:bg-gray-200 transition-colors"
            >
              Subscribe
            </motion.a>
          </div>
        </motion.div>

        {/* Community Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-10">
            Join Our Community. <span className="text-brand-cyan">Join the Future.</span>
          </h2>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://discordapp.com/invite/5uaFhNpRF6"
              target="_blank"
              rel="noreferrer"
              className="px-12 py-4 rounded-full bg-[#5865F2] text-white font-semibold flex items-center justify-center gap-3 hover:bg-[#4752C4] transition-colors shadow-lg shadow-[#5865F2]/20 border border-[#5865F2]"
            >
              Discord
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://t.me/NetSepio"
              target="_blank"
              rel="noreferrer"
              className="px-12 py-4 rounded-full bg-[#0088cc] text-white font-semibold flex items-center justify-center gap-3 hover:bg-[#0077b5] transition-colors shadow-lg shadow-[#0088cc]/20 border border-[#0088cc]"
            >
              Telegram
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Subscribe;
