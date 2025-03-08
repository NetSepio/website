import React from "react";
import NavBar from "./NavBar";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <NavBar />
        <div className="hero-background">
          <video autoPlay loop muted playsInline className="hero-video">
            <source src="/assets/HeroVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="hero-content ">
        <h1 class="text-white text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.6]">
  DePIN Powered Private,<br /> Secure & Agentic Internet
</h1>


          <div className="hero-buttons py-6">
            <a href="https://x.com/netsepio" target="_blank" rel="noreferrer">
              <button className="hero-button">Follow on X</button>
            </a>
            <a
              href="https://discordapp.com/invite/5uaFhNpRF6"
              target="_blank"
              rel="noreferrer"
            >
              <button className="hero-button">Join Discord</button>
            </a>
          </div>
        </div>

        <div className="hero-footer">
          <div className="hero-footer-text">
          ÐVPN and AI Coordination Layer for Privacy and Sovereignty
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
