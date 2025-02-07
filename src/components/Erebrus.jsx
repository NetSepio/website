import React from "react";

const Erebrus = () => {
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
          Erebrus Decentralized VPN
        </h1>
        <p
          style={{
            color: "#ccc",
            fontSize: "2rem",
            lineHeight: "1.5",
            marginBottom: "30px",
          }}
        >
          Private, Secure, and censorship-fee internet with <br /> CyreneAI
          integration
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5rem",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "3rem" }}
          >
            <a
              href="https://play.google.com/store/apps/details?id=com.erebrus.app"
              target="_blank"
              rel="noreferrer"
            >
              <button
                style={{
                  padding: "15px 30px",
                  border: "2px solid white",
                  backgroundColor: "#ccc",
                  color: "black",
                  borderRadius: "10px",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Play Store
              </button>
            </a>
            <a
              href="https://testflight.apple.com/join/BvdARC75"
              target="_blank"
              rel="noreferrer"
            >
              <button
                style={{
                  padding: "15px 30px",
                  border: "2px solid white",
                  backgroundColor: "#ccc",
                  color: "black",
                  borderRadius: "10px",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                iOS Test Flight
              </button>
            </a>
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
              disabled
            >
              Web App
            </button>
          </div>
          <div>
            <img
              src="/images/Erebrus_Mobile.png"
              alt="Erebrus_Mobile"
              style={{
                borderRadius: "20px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Erebrus;
