import React from "react";
import "../styles/Cyrene.css"; // Import external CSS file
import { FadeUp } from "./FadeAnimations";

const Cyrene = () => {
  return (
    <div className="cyrene-container">
      <FadeUp>
        <div className="cyrene-content">
          <h1 className="cyrene-title">Meet CyreneAI</h1>
          <p className="cyrene-text">
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
              <button className="cyrene-button">Website</button>
            </a>
            <a href="https://x.com/CyreneAI" target="_blank" rel="noreferrer">
              <button className="cyrene-button">Follow us on X</button>
            </a>
          </div>
        </div>
      </FadeUp>
    </div>
  );
};

export default Cyrene;
