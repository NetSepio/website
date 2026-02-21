'use client';

import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const Winners = () => {
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
      text: "4th Place Solana Radarhack DePIN",
      url: "https://arena.colosseum.org/projects/explore/netsepio",
    },
    {
      text: "Grand Prize at ETH SEA Demoday, Bali",
      url: "https://netsepio.substack.com/p/erebrus-protocol-by-netsepio-wins",
    },
    {
      text: "Grand Prize at IVS Crypto Demoday, Japan",
      url: "https://x.com/NetSepio/status/1810538904186982587",
    },
    {
      text: "Grand Prize at Aptos Hackathon, Singapore",
      url: "https://x.com/overmind_xyz/status/1701980625128071375",
    },
    {
      text: "On the Fast Track Prize at Soonami Venturethon",
      url: "https://soonami.io/post/soonami-cohort-4-winners",
    },
    {
      text: "Several Prizes at Akindo WaveHack",
      url: "https://app.akindo.io/communities/0n1VBlaXvCRPQVDG/products/La4OvOMglhWdMwjp",
    },
  ];

  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-5xl font-bold text-center text-white mb-20"
        >
          Join the <span className="text-gradient">Winners</span>!
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-6"
          >
            {partners.map((partner, index) => (
              <motion.div
                key={partner.img}
                whileHover={{ scale: 1.05 }}
                className="aspect-square glass rounded-2xl p-6 flex items-center justify-center hover:bg-white/5 transition-colors group"
              >
                <img
                  src={`/images/${partner.img}.png`}
                  alt={partner.name}
                  className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all duration-300"
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {highlights.map((item, index) => (
              <motion.a
                key={index}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                whileHover={{ x: 10 }}
                className="group flex items-center justify-between p-5 glass-card hover:border-brand-cyan/50 hover:bg-white/5 transition-all"
              >
                <span className="text-gray-300 group-hover:text-white font-medium pr-4">
                  {item.text}
                </span>
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 text-brand-cyan group-hover:bg-brand-cyan group-hover:text-black transition-colors shrink-0">
                  <FiArrowRight />
                </div>
              </motion.a>
            ))}
            <div className="p-5 text-center text-gray-500 font-medium italic">
              + many more exciting milestones!
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Winners;
