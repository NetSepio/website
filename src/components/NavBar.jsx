'use client';

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { StatusDot } from "./hud";

const links = [
  { name: "Erebrus VPN", url: "https://erebrus.io/", external: true },
  { name: "Erebrus Drop", url: "/#erebrus-drop" },
  { name: "ClawBrick", url: "https://clawbrick.com/", external: true },
  { name: "Mission", url: "/mission" },
  { name: "Docs", url: "https://docs.netsepio.com/latest", external: true },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled ? 'bg-void/80 backdrop-blur-md border-brand-cyan/15 py-3' : 'bg-transparent border-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => router.push("/")}
        >
          <img
            src="/images/Logo.png"
            alt="NetSepio Logo"
            className="h-9 w-9 md:h-10 md:w-10 group-hover:drop-shadow-[0_0_12px_rgba(8,217,197,0.7)] transition-all duration-300"
          />
          <img
            src="/assets/NetSepio.svg"
            alt="NetSepio Text"
            className="h-5 md:h-6"
          />
        </div>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              className="font-mono text-xs uppercase tracking-[0.2em] text-gray-400 hover:text-brand-cyan transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pl-6 border-l border-white/10">
            <StatusDot>Online</StatusDot>
          </div>
        </div>

        {/* Mobile menu */}
        <div className="relative lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-5 py-2 border border-brand-cyan/30 bg-brand-cyan/5 text-brand-cyan font-mono text-xs uppercase tracking-[0.2em] hover:bg-brand-cyan/15 transition-all duration-300"
          >
            {isOpen ? '[ Close ]' : '[ Menu ]'}
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-3 w-60 hud-panel-solid overflow-hidden shadow-2xl shadow-brand-cyan/10"
              >
                <div className="py-2">
                  {links.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noreferrer" : undefined}
                      onClick={() => setIsOpen(false)}
                      className="block px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-gray-300 hover:text-brand-cyan hover:bg-brand-cyan/5 transition-colors"
                    >
                      <span className="text-brand-cyan/40 mr-2">›</span>
                      {link.name}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </nav>
  );
};

export default NavBar;
