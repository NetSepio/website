'use client';

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  const dropDownLinks = [
    { name: "Erebrus", url: "https://erebrus.io/" },
    { name: "Browser Extension", url: "https://chromewebstore.google.com/detail/netsepio/bbkfclgnbddljhepbfpongcollhocghd" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">

        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => router.push("/")}
        >
          <img
            src="/images/Logo.png"
            alt="NetSepio Logo"
            className="h-10 w-10 md:h-12 md:w-12 group-hover:scale-110 transition-transform duration-300"
          />
          <img
            src="/assets/NetSepio.svg"
            alt="NetSepio Text"
            className="h-6 md:h-8"
          />
        </div>

        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-6 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all duration-300 backdrop-blur-sm"
          >
            Explore
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-3 w-56 glass-card overflow-hidden shadow-2xl shadow-brand-green/20"
              >
                <div className="py-2">
                  {dropDownLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="block px-6 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                    >
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
