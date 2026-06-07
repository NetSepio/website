'use client';

import React from 'react';
import { motion } from 'framer-motion';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

export default function MissionPage() {
    return (
        <div className="min-h-screen bg-black">
            <NavBar />

            <main className="max-w-7xl mx-auto px-6 py-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Our <span className="text-brand-cyan">Mission</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-medium text-gray-300 leading-relaxed max-w-4xl mx-auto">
                        Privacy, Sovereignty, and Individual Agency <br className="hidden md:block" /> for the Open Internet
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6 text-lg text-gray-400 leading-relaxed"
                    >
                        <p className="text-xl text-white font-medium border-l-4 border-brand-cyan pl-6 rounded-r-lg bg-white/5 py-4 w-full">
                            NetSepio is building a sovereignty stack for the open
                            internet: privacy-first, censorship-resistant tools that help
                            people control how they connect, share, protect, train, and host.
                        </p>
                        <p>
                            Erebrus VPN enables private, resilient connectivity through
                            decentralized infrastructure. Erebrus Drop makes local-first
                            file sharing simple, secure, and independent of centralized
                            platforms when people just need to move data directly.
                        </p>
                        <p>
                            Upcoming firewall and security tools will help users defend
                            their devices, networks, and data from unwanted tracking,
                            intrusion, and control. DePIN strengthens the resilience layer
                            inside a larger sovereignty mission: infrastructure that gives
                            users durable agency in a digitally surveilled world.
                        </p>
                        <p>
                            With ClawBrick, NetSepio extends that agency into AI,
                            enabling users to fine-tune, PEFT, deploy, and host personal
                            agents and smaller language models on their own terms instead
                            of depending entirely on closed platforms.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-brand-cyan/20 blur-[100px] rounded-full -z-10"></div>
                        <img
                            src="/images/mission.png"
                            alt="NetSepio Mission"
                            className="w-full h-auto rounded-3xl object-cover glass border border-white/10"
                        />
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center glass-card p-12 md:p-16 max-w-4xl mx-auto"
                >
                    <h2 className="font-heading text-3xl font-bold mb-8 text-white">
                        Join Our Community. <span className="text-gradient">Join the Future.</span>
                    </h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <a
                            href="https://discordapp.com/invite/5uaFhNpRF6"
                            target="_blank"
                            rel="noreferrer"
                            className="px-8 py-4 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-full font-semibold transition-all shadow-lg hover:-translate-y-1"
                        >
                            Join Discord
                        </a>
                        <a
                            href="https://t.me/NetSepio"
                            target="_blank"
                            rel="noreferrer"
                            className="px-8 py-4 bg-[#0088cc] hover:bg-[#0077b5] text-white rounded-full font-semibold transition-all shadow-lg hover:-translate-y-1"
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
