import React from "react";
import "../styles/Winner.css"; // Import the CSS file

const Winners = () => {
  return (
    <div className="winners-container">
      <div>
        <h1 className="winners-title">Join the Winners!!</h1>
        <div className="winners-content">
          <div className="winners-images">
            {[
              "radarthack",
              "ethsea",
              "ivscrypto",
              "aptos",
              "soonami",
              "akindo",
            ].map((img) => (
              <img
                key={img}
                src={`/images/${img}.png`}
                alt={img}
                className="winner-image"
              />
            ))}
          </div>
          <div className="winners-links">
            {[
              {
                text: "4th Place Solana Radarhack DePIN",
                url: "https://arena.colosseum.org/projects/explore/netsepio?previous=L3Byb2plY3RzL2V4cGxvcmU_c2VlZD1iNGI0ZTYwYzViNGE0NzkwJnNlYXJjaD1uZXRzZXA",
              },
              {
                text: "Grand Prize at ETH SEA Demoday, Bali",
                url: "https://netsepio.substack.com/p/erebrus-protocol-by-netsepio-wins",
              },
              {
                text: "Grand Prize at IVS Crypto Demoday, Japan",
                url: "https://x.com/NetSepio/status/1810538904186982587",
              },
              {
                text: "Grand Prize at Aptos Hackathon, Singapore",
                url: "https://x.com/overmind_xyz/status/1701980625128071375",
              },
              {
                text: "On the Fast Track Prize at Soonami Venturethon",
                url: "https://soonami.io/post/soonami-cohort-4-winners",
              },
              {
                text: "Several Prizes at Akindo WaveChack",
                url: "https://app.akindo.io/communities/0n1VBlaXvCRPQVDG/products/La4OvOMglhWdMwjp",
              },
            ].map((item) => (
              <a
                key={item.text}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="winner-link"
              >
                <h2>{item.text} <img src="/images/arrow.png" alt="arrow" /></h2>
              </a>
            ))}
            <h2>+ many more!!</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Winners;
