'use client';

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ScrambleText from "./ScrambleText";

const StatCounter = ({ end, duration = 2, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const endVal = parseFloat(end);
      if (start === endVal) return;

      const incrementTime = (duration / endVal) * 1000;

      let timer = setInterval(() => {
        start += (endVal / (duration * 60)); // 60fps
        if (start >= endVal) {
          clearInterval(timer);
          setCount(endVal);
        } else {
          setCount(start);
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {Number.isInteger(parseFloat(end)) ? Math.floor(count) : count.toFixed(1)}
      {suffix}
    </span>
  );
};

const Success = () => {
  const stats = [
    {
      value: "10.5",
      suffix: "T",
      prefix: "$",
      title: "Global Cybercrime Cost",
      description: "Estimated annual global cost of cybercrime by 2025, emphasizing the massive need for secure infrastructure.",
    },
    {
      value: "82",
      suffix: "%",
      prefix: "",
      title: "Data Breaches",
      description: "Of all cyber breaches involve data stored in the cloud, exposing the weakness of centralized providers.",
    },
    {
      value: "1.5",
      suffix: "B",
      prefix: "",
      title: "VPN Users Worldwide",
      description: "The rapidly growing number of users prioritizing personal privacy and circumventing censorship directly.",
    },
    {
      value: "100",
      suffix: "%",
      prefix: "",
      title: "Decentralized Solution",
      description: "NetSepio offers a truly sovereign alternative, ensuring zero single-point-of-failure network protection.",
    },
  ];

  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-green/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            The Need For <span className="text-gradient"><ScrambleText text="True Sovereignty" /></span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Traditional internet infrastructure and centralized VPNs inherently pose security tracking risks.
            The global shift demands verifiable, permissionless connectivity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="glass-card p-8 group relative overflow-hidden border border-white/5 hover:border-brand-green/30 transition-colors"
            >
              <div className="absolute inset-0 bg-brand-green/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-green mb-4">
                <StatCounter end={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </div>

              <h3 className="font-bold text-white text-xl mb-3">{stat.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Success;