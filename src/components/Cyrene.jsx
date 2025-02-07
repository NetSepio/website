import React from "react";

const Cyrene = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh", // Full viewport height
        backgroundColor: "#040a20",
        textAlign: "center",
      }}
    >
      <div>
        <h1 style={{ color: "#fff", marginBottom: "50px", fontSize: "5rem" }}>
          Meet CyreneAI
        </h1>
        <p
          style={{
            color: "#ccc",
            fontSize: "2rem",
            lineHeight: "1.5",
            marginBottom: "30px",
          }}
        >
          Multi-Agent Platform and AI Coordination layer on secure VPN network
        </p>
        <img
          src="/images/Cyrene.png"
          alt="NetSepio-Logo"
          style={{
            borderRadius: "20px",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "4rem",
            marginTop: "3rem",
          }}
        >
          <button
            style={{
              padding: "15px 30px",
              border: "2px solid white",
              backgroundColor: "transparent",
              color: "white",
              borderRadius: "10px",
              fontSize: "1rem",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Website
          </button>
          <button
            style={{
              padding: "15px 30px",
              border: "2px solid white",
              backgroundColor: "transparent",
              color: "white",
              borderRadius: "10px",
              fontSize: "1rem",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Follow us on X
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cyrene;
