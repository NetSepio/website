import React from "react";
import { FiCpu, FiGlobe, FiHardDrive, FiPower, FiShield, FiUploadCloud, FiWifi } from "react-icons/fi";

/*
 * Illustrative mockup of the current Erebrus app (orange brand), drawn in code
 * so it stays crisp and matches erebrus.io. Swap for real screenshots when available.
 */

const ORANGE = "#ff6b35";

const ErebrusMark = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M12 2.5 20.2 7.25v9.5L12 21.5 3.8 16.75v-9.5L12 2.5Z" stroke={ORANGE} strokeWidth="1.8" strokeLinejoin="round" />
    <circle cx="12" cy="10" r="2.6" fill={ORANGE} />
    <path d="M7.8 16.2c.9-1.9 2.4-2.9 4.2-2.9s3.3 1 4.2 2.9" stroke={ORANGE} strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const rows = [
  { icon: FiWifi, title: "Coffee shop Wi-Fi", state: "Protected" },
  { icon: FiShield, title: "Risky domains", state: "Blocked" },
  { icon: FiUploadCloud, title: "Photos to laptop", state: "Sent" },
];

const tabs = [
  { icon: FiGlobe, label: "VPN", active: true },
  { icon: FiShield, label: "Firewall" },
  { icon: FiHardDrive, label: "Drop" },
  { icon: FiCpu, label: "AI" },
];

const ErebrusPhone = () => (
  <div
    className="relative flex items-center justify-center xl:justify-start xl:pl-12 min-h-[520px] py-10"
    style={{ background: `radial-gradient(circle at 70% 20%, rgba(255,107,53,0.18), transparent 45%)` }}
    role="img"
    aria-label="Erebrus app showing a protected VPN connection with Firewall, Drop, and Private AI tabs"
  >
    {/* Phone */}
    <div className="relative w-[272px] h-[540px] rounded-[2.6rem] border-[7px] border-[#1d1d24] bg-[#0b0b0f] shadow-[0_30px_80px_rgba(0,0,0,0.6),0_0_60px_rgba(255,107,53,0.12)] overflow-hidden">
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 rounded-full bg-black z-10"></div>

      <div className="h-full flex flex-col px-4 pt-10 pb-3 font-heading" aria-hidden>
        {/* App header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <ErebrusMark />
            <span className="text-white text-[15px] font-medium">Erebrus</span>
          </div>
          <span className="w-7 h-7 rounded-full bg-white/10 border border-white/10"></span>
        </div>

        {/* Connect */}
        <div className="flex flex-col items-center mb-5">
          <div className="relative w-28 h-28 flex items-center justify-center">
            <span className="absolute inset-0 rounded-full" style={{ background: "rgba(255,107,53,0.10)" }}></span>
            <span className="absolute inset-3 rounded-full" style={{ background: "rgba(255,107,53,0.16)" }}></span>
            <span
              className="relative w-16 h-16 rounded-full flex items-center justify-center text-[#0b0b0f] text-2xl"
              style={{ background: ORANGE, boxShadow: "0 0 36px rgba(255,107,53,0.55)" }}
            >
              <FiPower />
            </span>
          </div>
          <span className="mt-3 rounded-md bg-emerald-400/10 px-2 py-0.5 font-mono text-[10px] text-emerald-300">Protected</span>
          <span className="mt-1.5 text-[11px] text-gray-400">Connected via community node</span>
        </div>

        {/* Today */}
        <p className="text-[11px] text-gray-500 mb-2">Today in Erebrus</p>
        <div className="space-y-2 flex-grow">
          {rows.map(({ icon: Icon, title, state }) => (
            <div key={title} className="flex items-center gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.03] px-2.5 py-2">
              <span className="w-7 h-7 rounded-lg flex items-center justify-center text-[13px]" style={{ background: "rgba(255,107,53,0.14)", color: ORANGE }}>
                <Icon />
              </span>
              <span className="flex-1 text-[11px] text-white truncate">{title}</span>
              <span className="rounded bg-emerald-400/10 px-1.5 py-0.5 font-mono text-[9px] text-emerald-300">{state}</span>
            </div>
          ))}
        </div>

        {/* Tab bar */}
        <div className="mt-3 grid grid-cols-4 border-t border-white/[0.06] pt-2">
          {tabs.map(({ icon: Icon, label, active }) => (
            <div key={label} className="flex flex-col items-center gap-1" style={{ color: active ? ORANGE : "#6b7280" }}>
              <Icon className="text-[15px]" />
              <span className="text-[9px]">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Floating Drop card */}
    <div
      className="hidden sm:flex lg:hidden xl:flex absolute right-4 md:right-8 xl:right-5 bottom-16 xl:bottom-[150px] items-center gap-3 rounded-2xl border border-white/10 bg-[#121217]/95 px-4 py-3 shadow-2xl font-heading"
      aria-hidden
    >
      <span className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "rgba(255,107,53,0.14)", color: ORANGE }}>
        <FiHardDrive />
      </span>
      <span>
        <span className="block text-[12px] text-white">Drop Room ready</span>
        <span className="block text-[10px] text-gray-400">Scan to join over Wi-Fi</span>
      </span>
    </div>

    {/* Floating Private AI card */}
    <div
      className="hidden sm:flex lg:hidden xl:flex absolute left-4 md:left-8 top-14 xl:left-auto xl:right-5 xl:top-[150px] items-center gap-3 rounded-2xl border border-white/10 bg-[#121217]/95 px-4 py-3 shadow-2xl font-heading"
      aria-hidden
    >
      <span className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "rgba(255,107,53,0.14)", color: ORANGE }}>
        <FiCpu />
      </span>
      <span>
        <span className="block text-[12px] text-white">Private AI draft</span>
        <span className="block text-[10px] text-gray-400">Kept on your hardware</span>
      </span>
    </div>
  </div>
);

export default ErebrusPhone;
