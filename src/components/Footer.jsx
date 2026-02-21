'use client';

import React from "react";
import Link from "next/link";
import { FaDiscord, FaTelegramPlane, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-zinc-950 pt-24 pb-12 overflow-hidden border-t border-white/5">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-green/10 rounded-full blur-[120px] translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <img src="/images/Logo.png" alt="NetSepio Logo" className="h-12 group-hover:scale-110 transition-transform duration-300" />
              <img src="/assets/NetSepio.svg" alt="NetSepio Text" className="h-8" />
            </Link>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              NetSepio delivers private, secure, and censorship-free internet with
              an AI coordination layer, shaping an agentic future.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6 tracking-wide">About</h3>
            <ul className="space-y-4">
              {[
                { name: "Mission", path: "/mission" },
                { name: "Privacy Policy", path: "/privacy.html" },
                { name: "Terms of Use", path: "/terms.html" },
              ].map((item, index) => (
                <li key={index}>
                  <Link href={item.path} className="text-gray-400 hover:text-brand-cyan transition-colors duration-200">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6 tracking-wide">Products</h3>
            <ul className="space-y-4">
              {[
                { name: "Erebrus", url: "https://erebrus.io/" },
                { name: "Browser Extension", url: "https://chromewebstore.google.com/detail/netsepio/bbkfclgnbddljhepbfpongcollhocghd" },
                { name: "Docs", url: "https://docs.netsepio.com/latest" },
              ].map((item, index) => (
                <li key={index}>
                  <a href={item.url} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-brand-green transition-colors duration-200">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-white/10 gap-6">
          <p className="text-gray-500 text-sm">
            © {currentYear} NetSepio. All rights reserved.
          </p>

          <div className="flex gap-4">
            {[
              { icon: FaTelegramPlane, url: "https://t.me/NetSepio", color: "hover:text-[#0088cc]" },
              { icon: FaGithub, url: "https://github.com/Netsepio", color: "hover:text-white" },
              { icon: FaDiscord, url: "https://discordapp.com/invite/5uaFhNpRF6", color: "hover:text-[#5865F2]" },
              { icon: FaLinkedinIn, url: "https://www.linkedin.com/company/netsepio/", color: "hover:text-[#0077b5]" },
              { icon: FaXTwitter, url: "https://x.com/netsepio", color: "hover:text-white" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className={`w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 transition-all duration-300 hover:scale-110 hover:bg-white/5 ${social.color}`}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
