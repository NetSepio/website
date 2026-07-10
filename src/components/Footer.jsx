'use client';

import React from "react";
import Link from "next/link";
import { FaDiscord, FaTelegramPlane, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { StatusDot } from "./hud";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-void pt-24 pb-10 overflow-hidden border-t border-brand-cyan/15">
      <div className="absolute inset-0 bg-hud-grid-fine opacity-40 pointer-events-none"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-cyan/8 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon/5 rounded-full blur-[120px] translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <img src="/images/Logo.png" alt="NetSepio Logo" className="h-11 group-hover:drop-shadow-[0_0_14px_rgba(8,217,197,0.7)] transition-all duration-300" />
              <img src="/assets/NetSepio.svg" alt="NetSepio Text" className="h-7" />
            </Link>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              NetSepio builds privacy-first tools for digital sovereignty:
              private connectivity, local sharing, network defense, and a
              second brain you own.
            </p>
            <StatusDot>All systems nominal</StatusDot>
          </div>

          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.3em] text-brand-cyan/70 mb-6">
              <span className="text-brand-cyan/40">//</span> About
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Mission", path: "/mission" },
                { name: "Privacy Policy", path: "/privacy.html" },
                { name: "Terms of Use", path: "/terms.html" },
              ].map((item, index) => (
                <li key={index}>
                  <Link href={item.path} className="text-gray-400 hover:text-brand-cyan transition-colors duration-200">
                    <span className="font-mono text-brand-cyan/30 mr-2">›</span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.3em] text-brand-cyan/70 mb-6">
              <span className="text-brand-cyan/40">//</span> Products
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Erebrus VPN", url: "https://erebrus.io/", external: true },
                { name: "Erebrus Drop", url: "/#erebrus-drop" },
                { name: "ClawBrick", url: "https://clawbrick.com/", external: true },
                { name: "Docs", url: "https://docs.netsepio.com/latest", external: true },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.url}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    className="text-gray-400 hover:text-brand-cyan transition-colors duration-200"
                  >
                    <span className="font-mono text-brand-cyan/30 mr-2">›</span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-brand-cyan/10 gap-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gray-500">
            © {currentYear} NetSepio <span className="text-brand-cyan/40">//</span> All rights reserved
          </p>

          <div className="flex gap-3">
            {[
              { icon: FaTelegramPlane, url: "https://t.me/NetSepio" },
              { icon: FaGithub, url: "https://github.com/Netsepio" },
              { icon: FaDiscord, url: "https://discordapp.com/invite/5uaFhNpRF6" },
              { icon: FaLinkedinIn, url: "https://www.linkedin.com/company/netsepio/" },
              { icon: FaXTwitter, url: "https://x.com/netsepio" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 border border-brand-cyan/20 bg-brand-cyan/5 flex items-center justify-center text-gray-400 transition-all duration-300 hover:text-brand-cyan hover:border-brand-cyan/60 hover:shadow-[0_0_16px_rgba(8,217,197,0.3)]"
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
