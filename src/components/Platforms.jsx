'use client';

import React from "react";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCalendar,
  FiCpu,
  FiFileText,
  FiGlobe,
  FiHardDrive,
  FiMessageSquare,
  FiRadio,
  FiServer,
  FiShield,
  FiWifi,
  FiZap,
} from "react-icons/fi";
import { Corners, SectionHeader } from "./hud";
import {
  pressableScale,
  revealFromLeft,
  revealFromRight,
  viewportOnceEarly,
} from "../lib/motion";
import ErebrusPhone from "./ErebrusPhone";

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

const StatusChip = ({ children, tone = "cyan" }) => (
  <span
    className={`whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.25em] px-3 py-1.5 border ${
      tone === "ember" ? "text-ember border-ember/30 bg-ember/5" : "text-brand-cyan border-brand-cyan/30 bg-brand-cyan/5"
    }`}
  >
    {children}
  </span>
);

const Chips = ({ items }) => (
  <div className="flex flex-wrap gap-3 pt-2">
    {items.map((chip) => (
      <span key={chip} className="font-mono text-[10px] tracking-[0.2em] text-gray-400 border border-white/15 px-4 py-2 uppercase">
        {chip}
      </span>
    ))}
  </div>
);

const platforms = [
  { index: "01", id: "erebrus", name: "Erebrus", domain: "erebrus.io", role: "Connect · Share · Run AI", status: "Available" },
  { index: "02", id: "clawbrick", name: "ClawBrick", domain: "clawbrick.com", role: "Agentic as a Service", status: "Now open" },
  { index: "03", id: "sotreus", name: "Sotreus", domain: "sotreus.com", role: "Signal awareness", status: "Early access", tone: "ember" },
];

const erebrusModules = [
  {
    id: "erebrus-vpn",
    code: "VPN",
    icon: FiGlobe,
    title: "Private, resilient connectivity",
    text: "Encrypted tunnels over a community-run node network, with WireGuard, VLESS REALITY, and Hysteria2.",
    url: "https://erebrus.io/vpn",
  },
  {
    id: "erebrus-drop",
    code: "Drop",
    icon: FiHardDrive,
    title: "Local-first file transfer",
    text: "Send files, photos, or text to nearby devices over Wi-Fi or hotspot. No cloud in the middle.",
    url: "https://erebrus.io/drop",
  },
  {
    id: "erebrus-ai",
    code: "Private_AI",
    icon: FiServer,
    title: "Models on trusted hardware",
    text: "Run models from 0.5B to 32B parameters on your own computer, server, or private node.",
    url: "https://erebrus.io/ai",
  },
  {
    id: "erebrus-firewall",
    code: "Firewall",
    icon: FiShield,
    title: "DNS and network protection",
    text: "Block malware, phishing, and trackers with policies for individuals, families, and teams.",
    url: "https://erebrus.io/firewall",
  },
];

const agents = [
  { icon: FiFileText, name: "Contract Helper", sector: "Law" },
  { icon: FiCalendar, name: "Booking Assistant", sector: "Clinics" },
  { icon: FiMessageSquare, name: "Customer Support", sector: "Hospitality" },
];

const signals = [
  { label: "BLE", top: "18%", left: "62%" },
  { label: "WI-FI", top: "62%", left: "20%" },
  { label: "AIRCRAFT", top: "28%", left: "16%" },
  { label: "SATELLITE", top: "70%", left: "64%" },
];

const Platforms = () => {
  return (
    <section id="suite" className="py-24 bg-void relative overflow-hidden scroll-mt-20">
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section header */}
        <SectionHeader
          index="01"
          code="PLATFORMS"
          title={<>Tools to Own Your<br /><span className="text-gradient">Connection, AI, and Surroundings</span></>}
          sub="The sovereignty stack spans three platforms: Erebrus for private connectivity, local sharing, and private AI; ClawBrick for AI agents that run your business; and Sotreus for awareness of the signals around you. Each has its own home — here's what they do and where to go next."
        />

        {/* Platform index */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnceEarly}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-5xl mx-auto mb-24"
        >
          {platforms.map((p) => (
            <a
              key={p.id}
              href={`#${p.id}`}
              className="hud-panel px-5 py-4 relative group flex flex-col gap-1 hover:border-brand-cyan/40 transition-colors"
            >
              <Corners size="w-2 h-2" className="border-brand-cyan/30" />
              <div className="flex items-center justify-between gap-3 mb-2">
                <p className="font-mono text-[10px] tracking-[0.25em] text-brand-cyan/60 uppercase">SYS.{p.index}</p>
                <StatusChip tone={p.tone}>{p.status}</StatusChip>
              </div>
              <p className="font-heading font-bold text-lg text-white uppercase tracking-tight group-hover:text-brand-cyan transition-colors">{p.name}</p>
              <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-gray-400">{p.role}</p>
              <p className="font-mono text-[10px] tracking-[0.15em] text-gray-500">{p.domain}</p>
            </a>
          ))}
        </motion.div>

        {/* ── Erebrus ─────────────────────────────────── */}
        <div id="erebrus" className="mb-28 scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-12">
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
                <ErebrusPhone />
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
              <div className="flex flex-wrap items-center gap-3">
                <PlatformTag icon={FiWifi} index="01">Erebrus</PlatformTag>
                <StatusChip>Available</StatusChip>
              </div>

              <h3 className="font-heading text-3xl md:text-4xl font-bold text-white leading-tight uppercase tracking-tight">
                Privacy tools you can <span className="text-gradient">actually&nbsp;use</span>
              </h3>

              <p className="text-gray-300 text-lg leading-relaxed">
                Erebrus brings private browsing, nearby file sharing, private AI,
                and network protection into one app — running on a DePIN network
                of community-operated nodes instead of one company&apos;s servers,
                so there&apos;s no single choke point to block, surveil, or switch off.
              </p>

              <ul className="space-y-3">
                <Feature>Four tools, one private account — start with the one you need today</Feature>
                <Feature>Android and iOS (TestFlight beta), with Private AI on macOS, Windows, and Linux</Feature>
                <Feature>Community-run node network — run a node and help power it</Feature>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <motion.a {...pressableScale} href="https://erebrus.io/" target="_blank" rel="noreferrer" className="btn-hud">
                  Explore Erebrus <FiArrowUpRight />
                </motion.a>
                <motion.a {...pressableScale} href="https://erebrus.io/#operators" target="_blank" rel="noreferrer" className="btn-hud-outline">
                  Run a Node <FiArrowUpRight />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Erebrus modules */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnceEarly}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {erebrusModules.map(({ id, code, icon: Icon, title, text, url }, idx) => (
              <a
                key={id}
                id={id}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="hud-panel p-6 group relative overflow-hidden flex flex-col hover:border-brand-cyan/40 transition-colors scroll-mt-28"
              >
                <Corners size="w-2 h-2" className="border-brand-cyan/25" />
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-[10px] tracking-[0.25em] text-brand-cyan/60 uppercase">
                    MOD.{String(idx + 1).padStart(2, "0")} <span className="text-brand-cyan/40">{"//"}</span> {code}
                  </span>
                  <FiArrowUpRight className="text-gray-500 group-hover:text-brand-cyan transition-colors" />
                </div>
                <Icon size={22} className="text-brand-cyan mb-4" />
                <h4 className="font-heading text-lg font-bold text-white uppercase tracking-tight mb-2 group-hover:text-brand-cyan transition-colors">
                  {title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">{text}</p>
              </a>
            ))}
          </motion.div>
        </div>

        {/* ── ClawBrick ───────────────────────────────── */}
        <div id="clawbrick" className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-28 scroll-mt-28">
          <motion.div
            {...revealFromLeft}
            viewport={viewportOnceEarly}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="hud-panel p-8 md:p-10 relative overflow-hidden scanlines">
              <Corners />
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-cyan/10 rounded-full blur-[80px] pointer-events-none"></div>

              <div className="relative z-10 flex flex-col items-center">
                {/* Industry agents */}
                <div className="grid grid-cols-3 gap-3 w-full">
                  {agents.map(({ icon: Icon, name, sector }) => (
                    <div key={name} className="hud-panel p-4 flex flex-col items-center gap-2 text-center relative">
                      <Corners size="w-2 h-2" className="border-brand-cyan/30" />
                      <Icon size={20} className="text-brand-cyan" />
                      <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-gray-300">{name}</span>
                      <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-gray-500">{sector}</span>
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

                {/* Agent core */}
                <div className="border border-brand-cyan/30 bg-brand-cyan/5 px-6 py-3 flex items-center gap-3">
                  <FiZap size={14} className="text-brand-cyan" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-white">Agent Core</span>
                </div>

                <div className="h-6 w-px bg-gradient-to-b from-brand-cyan/40 to-neon/40"></div>

                {/* AI workforce */}
                <div className="relative">
                  <div className="absolute inset-0 bg-neon/20 blur-2xl rounded-full pointer-events-none"></div>
                  <div className="relative hud-panel-solid px-8 py-6 flex items-center gap-4 border-brand-cyan/40">
                    <Corners size="w-2.5 h-2.5" />
                    <FiCpu size={28} className="text-neon" />
                    <div>
                      <div className="text-white font-heading font-bold text-lg tracking-wide uppercase">ClawBrick</div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-gray-400">Your AI workforce</div>
                    </div>
                  </div>
                </div>

                <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.25em] text-gray-500 text-center">
                  Managed from Telegram <span className="text-brand-cyan/40">{"//"}</span> Always on
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            {...revealFromRight}
            viewport={viewportOnceEarly}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6 order-1 lg:order-2"
          >
            <div className="flex flex-wrap items-center gap-3">
              <PlatformTag icon={FiCpu} index="02">ClawBrick</PlatformTag>
              <StatusChip>Now open</StatusChip>
            </div>

            <h3 className="font-heading text-3xl md:text-4xl font-bold text-white leading-tight uppercase tracking-tight">
              Agentic as a Service for <span className="text-gradient">every&nbsp;business</span>
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed">
              ClawBrick gives any traditional or SaaS business its own AI-powered
              team. Pick your industry, answer a few questions, and a pre-built
              agent goes live — working around the clock, with no tech team required.
            </p>

            <ul className="space-y-3">
              <Feature>Pre-built agents for law firms, clinics, schools, restaurants and hotels, farms, and factories</Feature>
              <Feature>Live in minutes — no code, no setup headaches, managed from Telegram</Feature>
              <Feature>Business data stays yours, with each industry&apos;s privacy and compliance rules built in</Feature>
              <Feature>Genevieve: on-premises AI hardware that keeps sensitive records inside your building</Feature>
            </ul>

            <Chips items={["6+ business types", "24/7 always on", "5 min to go live"]} />

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <motion.a {...pressableScale} href="https://clawbrick.com/agents" target="_blank" rel="noreferrer" className="btn-hud">
                Deploy an Agent <FiArrowUpRight />
              </motion.a>
              <motion.a {...pressableScale} href="https://clawbrick.com/" target="_blank" rel="noreferrer" className="btn-hud-outline">
                Visit ClawBrick <FiArrowUpRight />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* ── Sotreus ─────────────────────────────────── */}
        <div id="sotreus" className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center scroll-mt-28">
          <motion.div
            {...revealFromLeft}
            viewport={viewportOnceEarly}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex flex-wrap items-center gap-3">
              <PlatformTag icon={FiRadio} index="03">Sotreus</PlatformTag>
              <StatusChip tone="ember">Early access</StatusChip>
            </div>

            <h3 className="font-heading text-3xl md:text-4xl font-bold text-white leading-tight uppercase tracking-tight">
              See the signals. <span className="text-gradient">Remember the encounters.</span>
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed">
              Sotreus is a private instrument for the space around you — an
              Android app, with a pocket Edge companion, that shows what nearby
              electronics are broadcasting, remembers what you&apos;ve encountered
              before, and adds airspace and orbital context.
            </p>

            <ul className="space-y-3">
              <Feature>Observes nearby Bluetooth LE devices and visible Wi-Fi access points</Feature>
              <Feature>Encounter memory: familiar, new, persistent, and re-encountered — per place</Feature>
              <Feature>Sky context: aircraft, drone Remote ID, and predicted satellite passes</Feature>
              <Feature>Local-first and receive-only — no account required, data stays on your device</Feature>
            </ul>

            <Chips items={["V1 // Phone", "V1.1 // Sky context", "V2 // Edge hardware"]} />

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <motion.a {...pressableScale} href="https://sotreus.com/#access" target="_blank" rel="noreferrer" className="btn-hud">
                Get Early Access <FiArrowUpRight />
              </motion.a>
              <motion.a {...pressableScale} href="https://sotreus.com/#how" target="_blank" rel="noreferrer" className="btn-hud-outline">
                How It Works <FiArrowUpRight />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            {...revealFromRight}
            viewport={viewportOnceEarly}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="hud-panel relative overflow-hidden min-h-[400px] flex items-center justify-center p-10 scanlines">
              <Corners />

              <div className="absolute top-5 left-6 font-mono text-[10px] uppercase tracking-[0.25em] text-brand-cyan/70">
                sotreus://observing
              </div>
              <div className="absolute top-5 right-6 font-mono text-[10px] uppercase tracking-[0.25em] text-gray-500">
                Place :: Office
              </div>

              {/* Radar */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80">
                <div className="absolute inset-0 rounded-full border border-brand-cyan/10"></div>
                <div className="absolute inset-[16%] rounded-full border border-brand-cyan/15"></div>
                <div className="absolute inset-[32%] rounded-full border border-brand-cyan/20"></div>
                <div className="absolute left-1/2 top-0 h-full w-px bg-brand-cyan/10"></div>
                <div className="absolute top-1/2 left-0 w-full h-px bg-brand-cyan/10"></div>
                <div className="absolute inset-0 rounded-full overflow-hidden animate-spin-slow">
                  <div className="absolute inset-0" style={{ background: "conic-gradient(from 0deg, rgba(0,255,225,0.14), transparent 70deg)" }}></div>
                </div>

                {signals.map((s, i) => (
                  <div key={s.label} className="absolute flex items-center gap-2" style={{ top: s.top, left: s.left }}>
                    <span className="w-2 h-2 bg-brand-cyan animate-pulse" style={{ animationDelay: `${i * 0.3}s` }}></span>
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-gray-400">{s.label}</span>
                  </div>
                ))}

                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-neon shadow-[0_0_16px_rgba(0,255,225,0.8)]"></div>
              </div>

              <div className="absolute bottom-6 inset-x-0 text-center font-mono text-[11px] uppercase tracking-[0.25em] text-gray-500">
                Receive-only — never jams, never interrogates
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Platforms;
