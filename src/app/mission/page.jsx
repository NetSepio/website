'use client';

import React from 'react';
import { motion } from 'framer-motion';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import ScrambleText from '../../components/ScrambleText';
import { Corners, MonoTag, RuleTag } from '../../components/hud';
import { revealUp, viewportOnce } from '../../lib/motion';

const principles = [
    {
        code: 'P.01',
        title: 'Privacy by default',
        text: 'Privacy is not a premium tier or a checkbox. Every tool we build starts private and stays private.',
    },
    {
        code: 'P.02',
        title: 'Local-first',
        text: 'Data that can stay on your device should stay on your device. The cloud is an option, never a requirement.',
    },
    {
        code: 'P.03',
        title: 'Censorship-resistant',
        text: 'Access to the open internet should not depend on the permission of any government, ISP, or platform.',
    },
    {
        code: 'P.04',
        title: 'User-owned',
        text: 'Your connection, your files, your knowledge, your intelligence. Ownership is the product, not the user.',
    },
    {
        code: 'P.05',
        title: 'Resilient by design',
        text: 'Decentralized infrastructure with no single choke point to block, surveil, breach, or switch off.',
    },
    {
        code: 'P.06',
        title: 'Open by conviction',
        text: 'We build in the open and answer to our users — not to advertisers, data brokers, or gatekeepers.',
    },
];

const pillars = [
    { label: 'CONNECT', text: 'Erebrus VPN — private, censorship-resistant connectivity on decentralized DePIN infrastructure.' },
    { label: 'SHARE', text: 'Erebrus Drop — local-first, device-to-device file sharing that never touches a cloud.' },
    { label: 'PROTECT', text: 'Security tools — upcoming firewall and defense products against tracking, intrusion, and control.' },
    { label: 'REMEMBER', text: 'ClawBrick — a second brain for businesses and people, built on inference you control.' },
];

export default function MissionPage() {
    return (
        <div className="min-h-screen bg-void relative">
            <div className="absolute inset-0 bg-hud-grid-fine opacity-40 pointer-events-none"></div>
            <NavBar />

            <main className="max-w-7xl mx-auto px-6 pt-36 pb-24 relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <MonoTag className="mb-6">MISSION_BRIEF <span className="text-brand-cyan/40">//</span> NETSEPIO</MonoTag>
                    <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight uppercase leading-tight">
                        Sovereignty Is Not A Feature.<br />
                        <span className="text-gradient text-glow"><ScrambleText text="It Is The Foundation." /></span>
                    </h1>
                    <p className="text-xl md:text-2xl font-medium text-gray-300 leading-relaxed max-w-4xl mx-auto">
                        Privacy, sovereignty, and individual agency for the open internet.
                    </p>
                </motion.div>

                {/* Manifesto */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6 text-lg text-gray-400 leading-relaxed"
                    >
                        <div className="relative border-l-2 border-brand-cyan bg-brand-cyan/5 py-5 pl-6 pr-4">
                            <p className="text-xl text-white font-medium">
                                The internet made a promise: open access, free expression,
                                and a level field for anyone with a connection. That promise
                                is being repossessed — by surveillance economics, platform
                                gatekeepers, and infrastructure with a single off switch.
                            </p>
                        </div>
                        <p>
                            NetSepio exists to return agency to the people who use the
                            network. We build a sovereignty stack: privacy-first,
                            censorship-resistant tools that put your connection, your
                            files, your defenses, and your knowledge back under your
                            control.
                        </p>
                        <p>
                            Erebrus VPN delivers private, resilient connectivity through
                            decentralized DePIN infrastructure — encrypted routes with no
                            central choke point to block or surveil. Erebrus Drop keeps
                            file sharing local-first: direct, device-to-device, and
                            independent of anyone&apos;s cloud. Upcoming firewall and
                            security tools will extend that defense to your devices and
                            networks.
                        </p>
                        <p>
                            And with ClawBrick, sovereignty reaches into AI: a second
                            brain for businesses and people that turns your notes,
                            documents, and conversations into one connected, recallable
                            memory — powered by an inference layer you control, so your
                            knowledge compounds for you instead of training someone
                            else&apos;s platform.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.97 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-brand-cyan/15 blur-[100px] rounded-full -z-10"></div>
                        <div className="hud-panel p-3 relative overflow-hidden scanlines">
                            <Corners />
                            <div className="scan-beam"></div>
                            <img
                                src="/images/mission.png"
                                alt="NetSepio Mission"
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute bottom-5 left-5 font-mono text-[10px] uppercase tracking-[0.25em] text-brand-cyan/70 bg-void/70 px-3 py-1.5 border border-brand-cyan/20">
                                netsepio://open_internet
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Four pillars */}
                <motion.div
                    {...revealUp}
                    viewport={viewportOnce}
                    className="mb-28"
                >
                    <RuleTag className="mb-10">
                        01 <span className="text-brand-cyan/40">//</span> WHAT_WE_BUILD
                    </RuleTag>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
                        {pillars.map((pillar) => (
                            <div key={pillar.label} className="hud-panel p-6 relative flex items-start gap-5 hover:border-brand-cyan/40 transition-colors">
                                <Corners size="w-2 h-2" className="border-brand-cyan/25" />
                                <span className="font-mono text-[11px] tracking-[0.25em] text-brand-cyan border border-brand-cyan/25 bg-brand-cyan/5 px-3 py-1.5 shrink-0">
                                    {pillar.label}
                                </span>
                                <p className="text-gray-300 leading-relaxed">{pillar.text}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Principles */}
                <motion.div
                    {...revealUp}
                    viewport={viewportOnce}
                    className="mb-28"
                >
                    <RuleTag className="mb-10">
                        02 <span className="text-brand-cyan/40">//</span> OPERATING_PRINCIPLES
                    </RuleTag>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {principles.map((p) => (
                            <div key={p.code} className="hud-panel p-7 relative group hover:border-brand-cyan/40 transition-colors">
                                <Corners size="w-2 h-2" className="border-brand-cyan/25" />
                                <p className="font-mono text-[10px] tracking-[0.3em] text-brand-cyan/60 uppercase mb-3">{p.code}</p>
                                <h3 className="font-heading font-bold text-white text-lg uppercase tracking-tight mb-3 group-hover:text-brand-cyan transition-colors">
                                    {p.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{p.text}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    {...revealUp}
                    viewport={viewportOnce}
                    className="text-center hud-panel-solid p-12 md:p-16 max-w-4xl mx-auto relative overflow-hidden scanlines"
                >
                    <Corners />
                    <div className="scan-beam"></div>
                    <h2 className="font-heading text-3xl font-bold mb-8 text-white uppercase tracking-tight">
                        Join Our Community. <span className="text-gradient">Join the Future.</span>
                    </h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-5">
                        <a
                            href="https://discordapp.com/invite/5uaFhNpRF6"
                            target="_blank"
                            rel="noreferrer"
                            className="btn-hud"
                        >
                            Join Discord
                        </a>
                        <a
                            href="https://t.me/NetSepio"
                            target="_blank"
                            rel="noreferrer"
                            className="btn-hud-outline"
                        >
                            Join Telegram
                        </a>
                    </div>
                </motion.div>
            </main>

            <Footer />
        </div>
    );
}
