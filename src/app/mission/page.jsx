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
                        DePIN-Powered Private, Secure, and <br className="hidden md:block" /> Agentic Internet for the Future
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
                            NetSepio delivers private, secure, and censorship-free internet
                            with an AI coordination layer for secure data and inference,
                            shaping an agentic future.
                        </p>
                        <p>
                            We are on a mission to redefine internet access by
                            building a decentralized, user-centric network that prioritizes
                            security, privacy, and accessibility. By harnessing decentralized VPN
                            (ÐVPN) technologies, we empower enterprises and
                            individuals to contribute to a more equitable digital world while
                            safeguarding their own online presence.
                        </p>
                        <p>
                            Our AI coordination layer ensures that decentralized data
                            transmission and inference happen with enhanced autonomy, security,
                            and reliability. This innovation is central to our vision of an
                            agentic future, where decentralized AI agents work together across
                            the network to provide a smarter, more secure, and self-sustaining
                            internet.
                        </p>
                        <p>
                            NetSepio challenges the status quo of centralized internet
                            control by enabling a global, resilient network. We empower users
                            with unmatched digital freedom, allowing them to navigate the
                            internet without compromising on security or privacy.
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
