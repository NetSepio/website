import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";


export function Technology() {
  return (
    <div className="bg-[#040a20] min-h-screen">
      <div className="max-w-5xl mx-auto px-8 py-12">
        <h1 className="text-6xl  text-center text-white mb-12">
          Cutting-Edge Technology
        </h1>
        <HoverEffect items={technologies} />
      </div>
    </div>
  );
}

export const technologies = [
  {
    title: "Decentralized Peer Discovery",
    description:
      "NetSepio builds on blockchain technology, a secure digital ledger, for trustworthy data storage and verifiable transactions.",
    link: "#",
  },
  {
    title: "NFT Subscription",
    description:
      "NFT subscriptions unlock exclusive content within our decentralized network, offering both benefits and a stake in a secure, private internet.",
    link: "#",
  },
  {
    title: "Encrypted Tunneling",
    description:
      "Allows you to prove possession of information without revealing it, ensuring privacy while maintaining security and trust.",
    link: "#",
  },
  {
    title: "Blockchain",
    description:
      "Connects users without a central authority, fostering a more secure and censorship-resistant online experience.",
    link: "#",
  },
  {
    title: "Decentralized Identifier (DID)",
    description:
      "Empowers each node with complete control over its unique identity, fostering a secure and transparent network environment.",
    link: "#",
  },
  {
    title: "ZK Proofs",
    description:
      "Ensures privacy by enabling verification without exposing underlying data, securing online transactions and interactions.",
    link: "#",
  },
  {
    title: "Confidential Containers",
    description:
      "Ensures private data processing, zero-trust security, and compliance, securing NetSepio’s decentralized infrastructure.",
    link: "#",
  },
  {
    title: "AI Coordination Layer",
    description:
      "Automates network optimization, detects threats, and enables AI-driven, self-healing security for NetSepio.",
    link: "#",
  },
  {
    title: "SCION Integration",
    description:
      "Enables secure, multi-path routing, isolation domains, and AI-driven encrypted communication for a censorship-free network.",
    link: "#",
  },
];

export default Technology;

