import React from "react";

const Connectivity = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh", // Full viewport height
        backgroundColor: "#040a20"
      }}
    >
      <div
        style={{
          border: "2px solid transparent", // Transparent border to allow gradient effect
          borderImage: "linear-gradient(90deg, #11D9C5, #0071AD) 1",
          padding: "60px 80px",
          textAlign: "center",
          maxWidth: "600px",  
        }}
      >
        <h1 style={{ color: "#fff", marginBottom: "50px", fontSize: "3rem" }}>Empowering Connectivity</h1>
        <p style={{ color: "#ccc", fontSize: "1.2rem", lineHeight: "1.5", marginBottom: "30px" }}>
          NetSepio delivers private, secure, and censorship-free internet with an AI coordination layer for secure data
          and inference, shaping an agentic future. Powered by a DePIN-enabled ÐVPN protocol, we provide a decentralized,
          resilient network that empowers humanity with unmatched digital freedom.
        </p>
        <button
          style={{
            backgroundColor: "#11D9C5",
            color: "#000",
            padding: "20px 30px",
            fontSize: "16px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Our Mission
        </button>
      </div>
    </div>
  );
};

export default Connectivity;
