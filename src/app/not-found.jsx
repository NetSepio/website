'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
            {/* Background Effect */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan/20 rounded-full blur-[150px] mix-blend-screen animate-pulse pointer-events-none"></div>
            </div>

            <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="glass-card p-12 md:p-16 border border-white/10"
                >
                    <motion.h1
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="font-heading text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-green to-brand-cyan mb-6 drop-shadow-lg"
                    >
                        404
                    </motion.h1>

                    <motion.h2
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="text-2xl md:text-3xl font-semibold text-white mb-4"
                    >
                        Signal Lost
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="text-gray-400 text-lg mb-10 leading-relaxed"
                    >
                        The node you are trying to reach is offline or does not exist on the decentralized network.
                        Return to the active grid.
                    </motion.p>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        <Link
                            href="/"
                            className="inline-block px-10 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors shadow-lg shadow-white/10"
                        >
                            Back to Home
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
