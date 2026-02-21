'use client';

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Connectivity = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="glass-card p-12 md:p-16 text-center max-w-4xl mx-auto relative group overflow-hidden"
        >
          {/* Subtle gradient hover effect inside the card */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/5 to-brand-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Empowering <span className="text-gradient">Connectivity</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 relative z-10">
            NetSepio delivers private, secure, and censorship-free internet with
            an AI coordination layer for secure data and inference, shaping an
            agentic future. Powered by a DePIN-enabled ÐVPN protocol, we provide
            a decentralized, resilient network that empowers humanity with
            unmatched digital freedom.
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/mission"
              className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-brand-cyan to-brand-green text-black font-bold tracking-wide shadow-lg shadow-brand-cyan/20 hover:shadow-brand-cyan/40 transition-shadow relative z-10"
            >
              Our Mission
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Connectivity;
