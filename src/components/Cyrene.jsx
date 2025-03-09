import React from "react";
import "../styles/Cyrene.css"; // Import external CSS file
import { FadeUp } from "./FadeAnimations";

const Cyrene = () => {
  return (
    <div className="cyrene-container">
      <FadeUp>
        <div className="cyrene-content">
          <h1 className="text-6xl  text-center text-white mb-12">Meet CyreneAI</h1>
          <p className="cyrene-text font-sans">
            Multi-Agent Platform and AI Coordination layer on secure VPN network
          </p>
          <img
            src="/images/Cyrene.png"
            alt="NetSepio-Logo"
            className="cyrene-image"
          />
          <div className="cyrene-buttons">
            <a
              href="https://www.cyreneai.com/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="cyrene-button font-sans">Website</button>
            </a>
            <a href="https://x.com/CyreneAI" target="_blank" rel="noreferrer">
              <button className="cyrene-button font-sans">Follow on X</button>
            </a>
          </div>
        </div>
      </FadeUp>
    </div>
  );
};

export default Cyrene;
