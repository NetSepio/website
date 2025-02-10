import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div style={{ paddingTop: "3rem" }}>
          <img src="/images/Logo.png" alt="NetSepio-Logo" className="logo" />
          <img
            src="/assets/NetSepio.svg"
            alt="NetSepio-Logo"
            className="netsepio-logo"
          />
          <h1 className="footer-description">
            NetSepio delivers private, secure, <br /> and censorship-free
            internet with <br />
            an AI coordination layer, shaping <br /> an agentic future.
          </h1>
        </div>

        <div className="footer-section">
          <h1 className="footer-heading">About</h1>
          {["Mission", "Privacy Policy", "Terms of Use", "FAQ"].map(
            (item, index) => (
              <a
                key={index}
                href={`/#/${item.toLowerCase().replace(/\s+/g, "-")}`} // Replaces all spaces with '-'
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                {item} <img src="/images/arrow.png" alt="up-arrow" />
              </a>
            )
          )}
        </div>

        <div className="footer-section">
          <h1 className="footer-heading">Products</h1>
          {[
            { name: "Erebrus", url: "https://erebrus.io/" },
            { name: "Cyrene AI", url: "https://www.cyreneai.com/" },
            {
              name: "Browser Extension",
              url: "https://chromewebstore.google.com/detail/netsepio/bbkfclgnbddljhepbfpongcollhocghd",
            },
          ].map((product, index) => (
            <a
              key={index}
              href={product.url}
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              {product.name} <img src="/images/arrow.png" alt="up-arrow" />
            </a>
          ))}
        </div>

        <div className="footer-section">
          <h1 className="footer-heading">Connect</h1>
          <div className="social-links">
            {[
              {
                name: "Telegram",
                url: "https://t.me/NetSepio",
                img: "Telegram.png",
              },
              {
                name: "Github",
                url: "https://github.com/Netsepio",
                img: "Github.png",
              },
              {
                name: "Discord",
                url: "https://discordapp.com/invite/5uaFhNpRF6",
                img: "Discord.png",
              },
            ].map((social, index) => (
              <a key={index} href={social.url} target="_blank" rel="noreferrer">
                <img
                  src={`/images/${social.img}`}
                  alt={social.name}
                  className="social-icon"
                />
              </a>
            ))}
          </div>

          <div className="social-links">
            {[
              {
                name: "Linkedin",
                url: "https://www.linkedin.com/company/netsepio/",
                img: "Linkedin.png",
              },
              { name: "X", url: "https://x.com/netsepio", img: "X.png" },
            ].map((social, index) => (
              <a key={index} href={social.url} target="_blank" rel="noreferrer">
                <img
                  src={`/images/${social.img}`}
                  alt={social.name}
                  className="social-icon"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <h1 className="footer-copy">© 2025 - NetSepio. All rights reserved.</h1>
      </div>
    </div>
  );
};

export default Footer;
