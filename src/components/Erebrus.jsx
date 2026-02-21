'use client';

import React from "react";
import { motion } from "framer-motion";

const Erebrus = () => {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1 relative"
        >
          <div className="absolute inset-0 bg-brand-green/20 blur-[100px] rounded-full -z-10"></div>
          <img
            src="/images/Erebrus_Mobile.png"
            alt="Erebrus Platform"
            className="w-full h-auto rounded-3xl border border-white/10 shadow-2xl shadow-brand-green/10"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="order-1 lg:order-2 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-brand-green/30 text-brand-green font-medium text-sm">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
            Decentralized VPN
          </div>

          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight">
            Erebrus: The Future of <br />
            <span className="text-gradient">Secure Connectivity</span>
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            Erebrus provides a decentralized, resilient, and enterprise-grade VPN
            solution built on the NetSepio protocol. Experience true digital freedom
            without central points of failure, governed by a global network of nodes.
          </p>

          <div className="pt-6">
            <a
              href="https://erebrus.io/"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-8 py-3 rounded-full bg-brand-green text-black font-semibold hover:bg-opacity-80 transition-all shadow-lg shadow-brand-green/20 hover:-translate-y-1"
            >
              Learn More
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Erebrus;
