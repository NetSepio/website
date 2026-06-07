'use client';

import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiCpu, FiHardDrive, FiShield, FiWifi } from "react-icons/fi";

const products = [
  {
    name: "Erebrus VPN",
    title: "Private, resilient connectivity",
    description:
      "A decentralized VPN for censorship-resistant access, private routing, and fewer central points of failure across the network.",
    href: "https://erebrus.io/",
    cta: "Explore VPN",
    icon: FiWifi,
  },
  {
    name: "Erebrus Drop",
    title: "Local-first file transfers",
    description:
      "Simple private sharing over WiFi or hotspot, built for direct device-to-device transfer without depending on centralized platforms.",
    cta: "Local sharing",
    icon: FiHardDrive,
  },
  {
    name: "ClawBrick",
    title: "Personal agents and PEFT SLMs",
    description:
      "Fine-tune, PEFT, deploy, and host smaller language models and personal agents on infrastructure you control.",
    href: "https://clawbrick.com/",
    cta: "Visit ClawBrick",
    icon: FiCpu,
  },
  {
    name: "Security Tools",
    title: "Defend devices and networks",
    description:
      "Upcoming firewall and security products will help users resist unwanted tracking, intrusion, and control.",
    cta: "Coming soon",
    icon: FiShield,
  },
];

const Erebrus = () => {
  return (
    <section id="suite" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">

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
              alt="Erebrus VPN mobile app"
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
              Sovereignty Stack
            </div>

            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight">
              Tools to Own Your <br />
              <span className="text-gradient">Connection, Compute, and AI</span>
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              NetSepio brings together Erebrus VPN, Erebrus Drop, upcoming
              security tools, and ClawBrick into a privacy-first suite for users
              and organizations that want agency over their digital lives.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2 text-sm text-gray-300">
              {["Connect privately", "Share locally", "Protect devices", "Host intelligence"].map((item) => (
                <div key={item} className="glass rounded-lg px-4 py-3 text-center">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {products.map((product) => {
            const Icon = product.icon;

            const content = (
              <>
                <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-brand-cyan mb-6 group-hover:text-brand-green transition-colors">
                  <Icon size={24} />
                </div>
                <p className="text-sm font-semibold text-brand-green mb-3">
                  {product.name}
                </p>
                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                  {product.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
                  {product.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  {product.cta}
                  {product.href && <FiArrowUpRight />}
                </div>
              </>
            );

            return product.href ? (
              <a
                key={product.name}
                href={product.href}
                target="_blank"
                rel="noreferrer"
                className="glass-card p-6 group relative overflow-hidden min-h-[360px] flex flex-col hover:border-brand-cyan/40 hover:bg-white/5 transition-all"
              >
                {content}
              </a>
            ) : (
              <div
                key={product.name}
                className="glass-card p-6 group relative overflow-hidden min-h-[360px] flex flex-col hover:border-brand-green/40 hover:bg-white/5 transition-all"
              >
                {content}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Erebrus;
