import React from "react";
import "../styles/Connectivity.css"; // Import the external CSS file
import { FadeUp, ZoomIn } from "./FadeAnimations";

const Connectivity = () => {
  return (
    <div className="connectivity-container">
      <ZoomIn>
        <div className="connectivity-box">
          <h1 className="connectivity-title">Empowering Connectivity</h1>
          <p className="connectivity-text">
            NetSepio delivers private, secure, and censorship-free internet with
            an AI coordination layer for secure data and inference, shaping an
            agentic future. Powered by a DePIN-enabled ÐVPN protocol, we provide
            a decentralized, resilient network that empowers humanity with
            unmatched digital freedom.
          </p>
          <a
            href="https://netsepio.com/mission"
            target="_blank"
            rel="noreferrer"
          >
            <button className="connectivity-button">Our Mission</button>
          </a>
        </div>
      </ZoomIn>
    </div>
  );
};

export default Connectivity;
