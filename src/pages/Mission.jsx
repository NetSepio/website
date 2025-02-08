import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "../styles/Mission.css";

const Mission = () => {
  return (
    <div className="mission-container">
      <NavBar />
      <div className="mission-content">
        <h1 className="mission-title">Our Mission</h1>
        <h2 className="mission-subtitle">
          DePIN-Powered Private, Secure, and <br /> Agentic Internet for the Future
        </h2>
        <p className="mission-text">
          <span>
            NetSepio delivers private, secure, and censorship-free internet
            with an AI coordination layer for secure data and inference,
            shaping an agentic future.
          </span>
          <br /> <br /> We are on a mission to redefine internet access by
          building a decentralized, user-centric network that prioritizes
          security, privacy, and accessibility. By fusing decentralized VPN
          (ÐVPN) and Wi-Fi technologies, we empower enterprises and
          individuals to contribute to a more equitable digital world while
          safeguarding their own online presence. <br />
          <br /> Our AI coordination layer ensures that decentralized data
          transmission and inference happen with enhanced autonomy, security,
          and reliability. This innovation is central to our vision of an
          agentic future, where decentralized AI agents work together across
          the network to provide a smarter, more secure, and self-sustaining
          internet. <br />
          <br /> NetSepio challenges the status quo of centralized internet
          control by enabling a global, resilient network. We empower users
          with unmatched digital freedom, allowing them to navigate the
          internet without compromising on security or privacy.
        </p>

        <div className="mission-image-container">
          <img src="/images/mission.png" alt="mission" className="mission-image" />
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
      </div>
      <Footer />
    </div>
  );
};

export default Mission;
