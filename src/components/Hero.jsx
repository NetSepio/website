import React from "react";
import NavBar from "./NavBar";

const Hero = () => {
  return (
    <>
      <div
        className="hero-container"
        style={{
          position: "relative",
          height: "100vh",
        }}
      >
        <NavBar />
        <div
          style={{
            backgroundImage: "url('/images/background_image.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
            width: "100%",
            filter: "brightness(35%)",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        ></div>

        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "8%",
            transform: "translateY(-50%)",
            color: "white",
            textAlign: "left",
            fontSize: "40px",
            fontWeight: "400",
          }}
        >
          <h1>
            DePIN Powered Private, <br /> Secure & Agentic Internet
          </h1>
          <div
            style={{
              display: "flex",
              gap: "2rem",
            }}
          >
            <a href="https://x.com/netsepio" target="_blank" rel="noreferrer">
              <button
                style={{
                  padding: "15px 30px",
                  border: "2px solid #11D9C5",
                  backgroundColor: "transparent",
                  color: "white",
                  borderRadius: "10px",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Follow on X
              </button>
            </a>
            <a
              href="https://discordapp.com/invite/5uaFhNpRF6"
              target="_blank"
              rel="noreferrer"
            >
              <button
                style={{
                  padding: "15px 30px",
                  border: "2px solid #11D9C5",
                  backgroundColor: "transparent",
                  color: "white",
                  borderRadius: "10px",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Join Discord
              </button>
            </a>
          </div>
        </div>

        <div style={{ position: "absolute", bottom: "0", width: "100%" }}>
          <div
            style={{
              background:
                "linear-gradient(90deg, rgba(5, 11, 33, 0.5), rgba(11, 114, 115, 0.5), rgba(5, 11, 33, 0.5))",
              height: "100px", // Adjust height as needed
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontSize: "30px",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            <div>
              DVPN and AI Coordination Layer for Privacy and Sovereignty
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
