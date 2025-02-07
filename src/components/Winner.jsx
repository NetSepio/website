import React from "react";

const Winners = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        backgroundColor: "#040a20",
        textAlign: "center",
        paddingBottom: "10rem",
      }}
    >
      <div>
        <h1 style={{ color: "#fff", marginBottom: "100px", fontSize: "5rem" }}>
          Join the Winners!!
        </h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            width: "70%",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              width: "40%",
              margin: "0 auto",
              gap: "2rem",
            }}
          >
            <img
              src="/images/radarthack.png"
              alt="Radarthack"
              style={{
                borderRadius: "20px",
              }}
            />
            <img
              src="/images/ethsea.png"
              alt="Ethsea"
              style={{
                borderRadius: "20px",
              }}
            />
            <img
              src="/images/ivscrypto.png"
              alt="IVS Crypto"
              style={{
                borderRadius: "20px",
              }}
            />
            <img
              src="/images/aptos.png"
              alt="Aptos"
              style={{
                borderRadius: "20px",
              }}
            />
            <img
              src="/images/soonami.png"
              alt="Soonami"
              style={{
                borderRadius: "20px",
              }}
            />
            <img
              src="/images/akindo.png"
              alt="Akindo"
              style={{
                borderRadius: "20px",
              }}
            />
          </div>
          <div style={{ textAlign: "left", color: "white" }}>
            <a
              href="https://arena.colosseum.org/projects/explore/netsepio?previous=L3Byb2plY3RzL2V4cGxvcmU_c2VlZD1iNGI0ZTYwYzViNGE0NzkwJnNlYXJjaD1uZXRzZXA"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              <h2>
                4th Place Solana Radarhack DePIN
                <img src="/images/arrow.png" alt="up-arrrow" />
              </h2>
            </a>
            <a
              href="https://netsepio.substack.com/p/erebrus-protocol-by-netsepio-wins"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              <h2>
                Grand Prize at ETH SEA Demoday, Bali
                <img src="/images/arrow.png" alt="up-arrrow" />
              </h2>
            </a>
            <a
              href="https://x.com/NetSepio/status/1810538904186982587"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              <h2>
                Grand Prize at IVS Crypto Demoday, Japan
                <img src="/images/arrow.png" alt="up-arrrow" />
              </h2>
            </a>
            <a
              href="https://x.com/overmind_xyz/status/1701980625128071375"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              <h2>
                Grand Prize at Aptos Hackathon, Singapore
                <img src="/images/arrow.png" alt="up-arrrow" />
              </h2>
            </a>
            <a
              href="https://soonami.io/post/soonami-cohort-4-winners"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              <h2>
                On the Fast Track Prize at Soonami Venturethon
                <img src="/images/arrow.png" alt="up-arrrow" />
              </h2>
            </a>
            <a
              href="https://app.akindo.io/communities/0n1VBlaXvCRPQVDG/products/La4OvOMglhWdMwjp"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              <h2>
                Several Prizes at Akindo WaveChack
                <img src="/images/arrow.png" alt="up-arrrow" />
              </h2>
            </a>
            <h2>+ many more!!</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Winners;
