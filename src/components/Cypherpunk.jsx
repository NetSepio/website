import React from "react";
import "../styles/Cypherpunk.css";

const Cypherpunk = () => {
  const names = [
    "SHADOW WARRIORS",
    "PIXEL RENEGADES",
    "SIGNAL BOOSTERS",
    "PHANTOM WATCHERS",
  ];
  return (
    <div className="cypherpunk-container">
      <div className="cypherpunk-box ">
        <h1 className="cypherpunk-title">Cypherpunk Rewards Program</h1>
        <p className="cypherpunk-subtitle -mt-5">
          Empowering Community to Shape the Future
        </p>
        <div className="cypherpunk-images">
          {["rewards2.png", "rewards3.png", "rewards4.png", "rewards1.png"].map(
            (image, index) => (
              <div key={index} className="cypherpunk-image-wrapper">
                <img
                  src={`/images/${image}`}
                  alt="Reward"
                  className="cypherpunk-image"
                />
                <h3 className="cypherpunk-image-title font-bold py-4">{names[index]}</h3>
              </div>
            )
          )}
        </div>
        <div className="cypherpunk-footer font-bold py-4">
          <h2 className="cypherpunk-cta-text">
            CLAIM YOUR ROLE AND EARN REWARDS
          </h2>
          <a
            href="https://netsepio.substack.com/p/cypherpunk-rewards-program-join-the"
            target="_blank"
            rel="noreferrer"
          >
            <button className="cypherpunk-button">JOIN NOW</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cypherpunk;
