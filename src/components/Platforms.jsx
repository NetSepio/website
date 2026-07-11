'use client';

import React from "react";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCpu,
  FiEdit3,
  FiFileText,
  FiHardDrive,
  FiMessageSquare,
  FiMonitor,
  FiShield,
  FiSmartphone,
  FiWifi,
  FiZap,
} from "react-icons/fi";
import { Corners, MonoTag, SectionHeader } from "./hud";
import {
  pressableScale,
  revealFromLeft,
  revealFromRight,
  viewportOnceEarly,
} from "../lib/motion";

const Feature = ({ children }) => (
  <li className="flex items-start gap-3">
    <span className="mt-1.5 font-mono text-brand-cyan text-xs shrink-0">▸</span>
    <span className="text-gray-300 leading-relaxed">{children}</span>
  </li>
);

const PlatformTag = ({ icon: Icon, index, children }) => (
  <div className="inline-flex items-center gap-3 px-4 py-2 border border-brand-cyan/25 bg-brand-cyan/5 font-mono text-[11px] uppercase tracking-[0.25em] text-brand-cyan">
    <Icon size={14} />
    <span className="text-brand-cyan/40">SYS.{index}</span>
    <span className="text-brand-cyan/40">{"//"}</span>
    {children}
  </div>
);

const DeviceChip = ({ icon: Icon, label }) => (
  <div className="hud-panel px-5 py-6 flex flex-col items-center gap-3 min-w-[110px] relative">
    <Corners size="w-2 h-2" className="border-brand-cyan/40" />
    <Icon size={28} className="text-brand-cyan" />
    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-400">{label}</span>
  </div>
);

const Platforms = () => {
  return (
    <section id="suite" className="py-24 bg-void relative overflow-hidden scroll-mt-20">
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section header */}
        <SectionHeader
          index="01"
          code="PLATFORMS"
          title={<>Tools to Own Your<br /><span className="text-gradient">Connection, Compute, and AI</span></>}
          sub="NetSepio brings together Erebrus VPN, Erebrus Drop, upcoming security tools, and ClawBrick into a privacy-first suite for users and organizations that want agency over their digital lives — built with cutting-edge tech: DePIN infrastructure, encrypted peer-to-peer transport, local-first design, and user-owned AI."
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnceEarly}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 font-mono text-xs uppercase tracking-[0.15em] text-gray-300 max-w-4xl mx-auto mb-24"
        >
          {["Connect privately", "Share locally", "Protect devices", "Remember everything"].map((item) => (
            <div key={item} className="hud-panel px-4 py-3 text-center relative">
              <Corners size="w-2 h-2" className="border-brand-cyan/30" />
              {item}
            </div>
          ))}
        </motion.div>

        {/* ── Erebrus VPN ─────────────────────────────── */}
        <div id="erebrus-vpn" className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-28 scroll-mt-28">
          <motion.div
            {...revealFromLeft}
            viewport={viewportOnceEarly}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-brand-cyan/15 blur-[100px] rounded-full -z-10"></div>
            <div className="hud-panel p-3 relative overflow-hidden">
              <Corners />
              <div className="scan-beam"></div>
              <img
                src="/images/Erebrus_Mobile.png"
                alt="Erebrus VPN mobile app"
                className="w-full h-auto"
              />
              <div className="absolute bottom-5 left-5 font-mono text-[10px] uppercase tracking-[0.25em] text-brand-cyan/70 bg-void/70 px-3 py-1.5 border border-brand-cyan/20">
                erebrus://tunnel_active
              </div>
            </div>
          </motion.div>

          <motion.div
            {...revealFromRight}
            viewport={viewportOnceEarly}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            <PlatformTag icon={FiWifi} index="01">Erebrus_VPN</PlatformTag>

            <h3 className="font-heading text-3xl md:text-4xl font-bold text-white leading-tight uppercase tracking-tight">
              Private, resilient <span className="text-gradient">connectivity</span>
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed">
              A decentralized VPN for censorship-resistant access, private
              routing, and fewer central points of failure. Erebrus runs on a
              DePIN network of community-operated nodes instead of one
              company&apos;s servers — so your connection has no single choke
              point to block, surveil, or switch off.
            </p>

            <ul className="space-y-3">
              <Feature>Decentralized node network — no central point of failure or control</Feature>
              <Feature>Encrypted, censorship-resistant routing that keeps working under pressure</Feature>
              <Feature>Community-run DePIN infrastructure spanning the globe</Feature>
              <Feature>Private by design: your traffic is your business, not a product</Feature>
            </ul>

            <motion.div {...pressableScale} className="inline-block pt-2">
              <a href="https://erebrus.io/" target="_blank" rel="noreferrer" className="btn-hud">
                Explore VPN <FiArrowUpRight />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Erebrus Drop ────────────────────────────── */}
        <div id="erebrus-drop" className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-28 scroll-mt-28">
          <motion.div
            {...revealFromLeft}
            viewport={viewportOnceEarly}
            transition={{ duration: 0.6 }}
            className="space-y-6 order-2 lg:order-1"
          >
            <PlatformTag icon={FiHardDrive} index="02">Erebrus_Drop</PlatformTag>

            <h3 className="font-heading text-3xl md:text-4xl font-bold text-white leading-tight uppercase tracking-tight">
              Local-first <span className="text-gradient">file transfers</span>
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed">
              Simple private sharing over WiFi or hotspot, built for direct
              device-to-device transfer without depending on centralized
              platforms. When the people are in the same room, your files
              shouldn&apos;t take a round trip through someone else&apos;s cloud.
            </p>

            <ul className="space-y-3">
              <Feature>Direct device-to-device transfer over WiFi or hotspot</Feature>
              <Feature>No cloud handoff — files never leave your local network</Feature>
              <Feature>Works where the internet doesn&apos;t: offline, air-gapped, or censored</Feature>
              <Feature>Private by default, simple enough for anyone</Feature>
            </ul>

            <div className="flex flex-wrap gap-3 pt-2">
              {["WIFI", "HOTSPOT", "DEVICE-TO-DEVICE"].map((chip) => (
                <span key={chip} className="font-mono text-[10px] tracking-[0.2em] text-gray-400 border border-white/15 px-4 py-2">
                  {chip}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...revealFromRight}
            viewport={viewportOnceEarly}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="order-1 lg:order-2"
          >
            <div className="hud-panel relative overflow-hidden min-h-[380px] flex items-center justify-center p-10 scanlines">
              <Corners />

              {/* Radar rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="absolute w-[28rem] h-[28rem] rounded-full border border-brand-cyan/10"></div>
                <div className="absolute w-80 h-80 rounded-full border border-brand-cyan/15"></div>
                <div className="absolute w-56 h-56 rounded-full border border-brand-cyan/20"></div>
                {/* Radar sweep */}
                <div className="absolute w-80 h-80 rounded-full overflow-hidden animate-spin-slow">
                  <div className="absolute inset-0" style={{ background: "conic-gradient(from 0deg, rgba(0,255,225,0.12), transparent 70deg)" }}></div>
                </div>
              </div>

              <div className="relative z-10 flex items-center gap-4 md:gap-6">
                <DeviceChip icon={FiSmartphone} label="Your phone" />
                <div className="flex items-center gap-1.5">
                  {[0, 1, 2, 3].map((i) => (
                    <span
                      key={i}
                      className="w-1.5 h-1.5 bg-brand-cyan animate-pulse"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    ></span>
                  ))}
                </div>
                <DeviceChip icon={FiMonitor} label="Their laptop" />
              </div>

              <div className="absolute bottom-6 inset-x-0 text-center font-mono text-[11px] uppercase tracking-[0.25em] text-gray-500">
                No cloud in the middle — ever
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── ClawBrick ───────────────────────────────── */}
        <div id="clawbrick" className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-28 scroll-mt-28">
          <motion.div
            {...revealFromLeft}
            viewport={viewportOnceEarly}
            transition={{ duration: 0.6 }}
          >
            <div className="hud-panel p-8 md:p-10 relative overflow-hidden scanlines">
              <Corners />
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-cyan/10 rounded-full blur-[80px] pointer-events-none"></div>

              <div className="relative z-10 flex flex-col items-center">
                {/* Knowledge inputs — deliberately abstract */}
                <div className="grid grid-cols-3 gap-3 w-full">
                  {[
                    { icon: FiEdit3, name: "Notes" },
                    { icon: FiFileText, name: "Documents" },
                    { icon: FiMessageSquare, name: "Conversations" },
                  ].map(({ icon: Icon, name }) => (
                    <div key={name} className="hud-panel p-4 flex flex-col items-center gap-2 text-center relative">
                      <Corners size="w-2 h-2" className="border-brand-cyan/30" />
                      <Icon size={20} className="text-brand-cyan" />
                      <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-gray-300">{name}</span>
                    </div>
                  ))}
                </div>

                {/* Merge connectors */}
                <div className="grid grid-cols-3 w-full">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="h-6 w-px bg-gradient-to-b from-brand-cyan/40 to-neon/40 mx-auto"></div>
                  ))}
                </div>
                <div className="w-2/3 h-px bg-brand-cyan/30"></div>
                <div className="h-6 w-px bg-gradient-to-b from-brand-cyan/40 to-neon/40"></div>

                {/* Inference layer */}
                <div className="border border-brand-cyan/30 bg-brand-cyan/5 px-6 py-3 flex items-center gap-3">
                  <FiZap size={14} className="text-brand-cyan" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-white">Inference Core</span>
                </div>

                <div className="h-6 w-px bg-gradient-to-b from-brand-cyan/40 to-neon/40"></div>

                {/* Second brain core */}
                <div className="relative">
                  <div className="absolute inset-0 bg-neon/20 blur-2xl rounded-full pointer-events-none"></div>
                  <div className="relative hud-panel-solid px-8 py-6 flex items-center gap-4 border-brand-cyan/40">
                    <Corners size="w-2.5 h-2.5" />
                    <FiCpu size={28} className="text-neon" />
                    <div>
                      <div className="text-white font-heading font-bold text-lg tracking-wide uppercase">ClawBrick</div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-gray-400">Your second brain</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            {...revealFromRight}
            viewport={viewportOnceEarly}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            <PlatformTag icon={FiCpu} index="03">ClawBrick</PlatformTag>

            <h3 className="font-heading text-3xl md:text-4xl font-bold text-white leading-tight uppercase tracking-tight">
              A second brain for <span className="text-gradient">businesses and people</span>
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed">
              ClawBrick turns scattered notes, documents, and conversations
              into a second brain you actually own — one system that captures,
              connects, and recalls everything you know, powered by an
              inference layer you control instead of a platform you rent.
            </p>

            <ul className="space-y-3">
              <Feature>All your knowledge — notes, documents, conversations — one connected memory</Feature>
              <Feature>A unified inference layer — choose the models, keep the control</Feature>
              <Feature>Organizational memory for businesses, a personal archive for individuals</Feature>
              <Feature>Your knowledge compounds on infrastructure you govern — not a platform&apos;s</Feature>
            </ul>

            <motion.div {...pressableScale} className="inline-block pt-2">
              <a href="https://clawbrick.com/" target="_blank" rel="noreferrer" className="btn-hud">
                Visit ClawBrick <FiArrowUpRight />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Security tools — coming soon ────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnceEarly}
          transition={{ duration: 0.6 }}
          className="hud-panel p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 relative"
        >
          <Corners />
          <div className="w-14 h-14 border border-brand-cyan/25 bg-brand-cyan/5 flex items-center justify-center text-brand-cyan shrink-0">
            <FiShield size={26} />
          </div>
          <div className="flex-grow">
            <MonoTag className="mb-2">SYS.04 <span className="text-brand-cyan/40">{"//"}</span> Security_Tools</MonoTag>
            <h3 className="text-2xl font-heading font-bold text-white mb-2 uppercase tracking-tight">Defend devices and networks</h3>
            <p className="text-gray-400 leading-relaxed">
              Upcoming firewall and security products will help users resist
              unwanted tracking, intrusion, and control.
            </p>
          </div>
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-ember border border-ember/30 bg-ember/5 px-5 py-2.5 shrink-0 animate-blink">
            Coming soon
          </span>
        </motion.div>

      </div>
    </section>
  );
};

export default Platforms;
