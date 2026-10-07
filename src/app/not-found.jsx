'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ScrambleText from '../components/ScrambleText';
import { Corners, MonoTag } from '../components/hud';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-void flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-hud-grid opacity-60 pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-[150px] mix-blend-screen animate-pulse pointer-events-none"></div>

            <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="hud-panel-solid p-12 md:p-16 relative overflow-hidden scanlines"
                >
                    <Corners />
                    <div className="scan-beam"></div>

                    <MonoTag className="mb-6">ERROR <span className="text-brand-cyan/40">{"//"}</span> SIGNAL_LOST</MonoTag>

                    <h1 className="font-heading text-8xl md:text-9xl font-bold text-gradient text-glow mb-6">
                        <ScrambleText text="404" />
                    </h1>

                    <p className="font-mono text-xs uppercase tracking-[0.25em] text-gray-500 mb-6">
                        &gt; node_lookup :: failed<span className="animate-blink text-brand-cyan">_</span>
                    </p>

                    <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                        The node you are trying to reach is offline or does not exist on
                        the decentralized network. Return to the active grid.
                    </p>

                    <Link href="/" className="btn-hud">
                        Return to Grid
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
