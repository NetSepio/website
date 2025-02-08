import React from "react";
import "../styles/Subscribe.css"; // Import external CSS

const Subscribe = () => {
  return (
    <>
      <div className="subscribe-container">
        <div className="subscribe-banner">
          <div className="subscribe-overlay">
            <h1>
              Transforming Internet Through <br /> the Power of DePIN and AI
            </h1>
            <p>Subscribe to our newsletter for insights and the next meta.</p>
            <a
              href="https://netsepio.substack.com/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="subscribe-button">Subscribe</button>
            </a>
          </div>
        </div>
      </div>

      <div className="community-section">
        <h1>Join Our Community. Join the Future.</h1>
        <div className="community-buttons">
          <a
            href="https://discordapp.com/invite/5uaFhNpRF6"
            target="_blank"
            rel="noreferrer"
          >
            <button className="community-button">Discord</button>
          </a>
          <a href="https://t.me/NetSepio" target="_blank" rel="noreferrer">
            <button className="community-button">Telegram</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
