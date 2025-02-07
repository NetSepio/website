import React from "react";

const Cypherpunk = () => {
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
      <div
        style={{
          width: "1110px",
          height: "759px",
          background:
            "linear-gradient(208.05deg, rgba(56, 132, 254, 0.1) 0%, rgba(17, 217, 197, 0.1) 82.62%)",
          border: "2px solid transparent", // Transparent border to allow gradient effect
          borderImage: "linear-gradient(90deg, #11D9C5, #0071AD) 1",
        }}
      >
        <h1
          style={{
            color: "#fff",
            marginTop: "100px",
            marginBottom: "40px",
            fontSize: "3.5rem",
          }}
        >
          Cypherpunk Rewards Program{" "}
        </h1>
        <p style={{ color: "#ccc", marginBottom: "70px", fontSize: "1.8rem" }}>
          Empowering Community to Shape the Future
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "80%",
            margin: "0 auto",
          }}
        >
          <div>
            <img
              src="/images/rewards2.png"
              alt="NetSepio-Logo"
              style={{
                borderRadius: "20px",
              }}
            />
            <h3
              style={{
                color: "#fff",
                fontSize: "1.5rem",
              }}
            >
              Shadow Warriors
            </h3>
          </div>
          <div>
            <img
              src="/images/rewards3.png"
              alt="NetSepio-Logo"
              style={{
                borderRadius: "20px",
              }}
            />
            <h3
              style={{
                color: "#fff",
                fontSize: "1.5rem",
              }}
            >
              Shadow Warriors
            </h3>
          </div>
          <div>
            <img
              src="/images/rewards4.png"
              alt="NetSepio-Logo"
              style={{
                borderRadius: "20px",
                paddingBottom: "12px",
              }}
            />
            <h3
              style={{
                color: "#fff",
                fontSize: "1.5rem",
              }}
            >
              Shadow Warriors
            </h3>
          </div>
          <div>
            <img
              src="/images/rewards1.png"
              alt="NetSepio-Logo"
              style={{
                borderRadius: "20px",
                paddingBottom: "12px",
              }}
            />
            <h3
              style={{
                color: "#fff",
                fontSize: "1.5rem",
              }}
            >
              Shadow Warriors
            </h3>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
            marginTop: "2rem",
          }}
        >
          <h2 style={{ fontSize: "2rem", color: "#11D9C5" }}>
            CLAIM YOUR ROLE AND EARN REWARDS
          </h2>
          <a
            href="https://netsepio.substack.com/p/cypherpunk-rewards-program-join-the"
            target="_blank"
            rel="noreferrer"
          >
            <button
              style={{
                padding: "15px 30px",
                backgroundColor: "#11D9C5",
                color: "black",
                borderRadius: "10px",
                fontSize: "1rem",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              JOIN NOW
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cypherpunk;
