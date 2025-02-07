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
              gap: "2rem"
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
            <h2>4th Place Solana Radarhack DePIN </h2>
            <h2>Grand Prize at ETH SEA Demoday Bali</h2>
            <h2>Grand Prize at IVS Crypto Demoday, Japan </h2>
            <h2>Grand Prize at Aptos Hackathon, Singapore </h2>
            <h2>On the Fast Track Prize at Soonami Venturethon</h2>
            <h2>Several Prizes at Akindo WaveChack + many more!</h2>
            <h2>+ many more!!</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Winners;
