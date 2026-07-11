'use client';

import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { Corners, SectionHeader } from "./hud";
import {
  revealFromLeft,
  revealFromRight,
  viewportOnce,
} from "../lib/motion";

const partners = [
  { img: "radarthack", name: "Radar Hackathon" },
  { img: "ethsea", name: "ETH SEA" },
  { img: "ivscrypto", name: "IVS Crypto" },
  { img: "aptos", name: "Aptos" },
  { img: "soonami", name: "Soonami" },
  { img: "akindo", name: "Akindo" },
];

const highlights = [
  {
    tag: "4TH_PLACE",
    text: "4th Place Solana Radarhack DePIN",
    url: "https://arena.colosseum.org/projects/explore/netsepio",
  },
  {
    tag: "GRAND_PRIZE",
    text: "Grand Prize at ETH SEA Demoday, Bali",
    url: "https://netsepio.substack.com/p/erebrus-protocol-by-netsepio-wins",
  },
  {
    tag: "GRAND_PRIZE",
    text: "Grand Prize at IVS Crypto Demoday, Japan",
    url: "https://x.com/NetSepio/status/1810538904186982587",
  },
  {
    tag: "GRAND_PRIZE",
    text: "Grand Prize at Aptos Hackathon, Singapore",
    url: "https://x.com/overmind_xyz/status/1701980625128071375",
  },
  {
    tag: "FAST_TRACK",
    text: "On the Fast Track Prize at Soonami Venturethon",
    url: "https://soonami.io/post/soonami-cohort-4-winners",
  },
  {
    tag: "MULTI_WIN",
    text: "Several Prizes at Akindo WaveHack",
    url: "https://app.akindo.io/communities/0n1VBlaXvCRPQVDG/products/La4OvOMglhWdMwjp",
  },
];

const Winners = () => {
  return (
    <section className="py-24 bg-void relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-hud-grid-fine opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader
          index="02"
          code="FIELD_LOG"
          title={<>Join the <span className="text-gradient">Winners</span></>}
          sub="Battle-tested across the world's toughest hackathons and demo days — logged, verified, and public."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          <motion.div
            {...revealFromLeft}
            viewport={viewportOnce}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
          >
            {partners.map((partner) => (
              <motion.div
                key={partner.img}
                whileHover={{ scale: 1.04 }}
                className="aspect-square hud-panel p-6 flex items-center justify-center hover:border-brand-cyan/40 transition-colors group relative"
              >
                <Corners size="w-2 h-2" className="border-brand-cyan/25" />
                <img
                  src={`/images/${partner.img}.png`}
                  alt={partner.name}
                  className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 group-hover:drop-shadow-[0_0_10px_rgba(8,217,197,0.4)] transition-all duration-300"
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            {...revealFromRight}
            viewport={viewportOnce}
            className="space-y-3"
          >
            {highlights.map((item, index) => (
              <motion.a
                key={index}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                whileHover={{ x: 8 }}
                className="group flex items-center justify-between gap-4 px-5 py-4 hud-panel hover:border-brand-cyan/50 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 min-w-0">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-brand-cyan shrink-0">
                    [{item.tag}]
                  </span>
                  <span className="text-gray-300 group-hover:text-white font-medium truncate">
                    {item.text}
                  </span>
                </div>
                <div className="w-9 h-9 flex items-center justify-center border border-brand-cyan/25 text-brand-cyan group-hover:bg-brand-cyan group-hover:text-black transition-colors shrink-0">
                  <FiArrowUpRight />
                </div>
              </motion.a>
            ))}
            <div className="px-5 py-4 font-mono text-[11px] uppercase tracking-[0.25em] text-gray-500 text-center">
              + many more milestones logged
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Winners;
