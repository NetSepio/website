import React from "react";

const Subscribe = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh", // Full viewport height
          backgroundColor: "#040a20",
          textAlign: "center",
        }}
      >
        <div
          style={{
            backgroundImage: "url('/images/FutureCity.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "white",
            position: "relative",
            borderRadius: "20px",
          }}
        >
          <div
            style={{
              background: "rgba(0, 0, 0, 0.5)",
              padding: "100px 120px",
              borderRadius: "20px",
              border: "2px solid #08d9c5",
            }}
          >
            <h1 style={{ fontSize: "2.5rem", marginBottom: "50px" }}>
              Transforming Internet Through <br /> the Power of DePIN and AI
            </h1>
            <p style={{ fontSize: "1.5rem", marginBottom: "20px" }}>
              Subscribe to our newsletter for insights and the next meta.
            </p>
            <button
              style={{
                background: "white",
                color: "black",
                padding: "12px 24px",
                fontSize: "1rem",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "bold",
                marginTop: "2rem",
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#040a20" }}>
        <h1
          style={{
            color: "#fff",
            margin: "0",
            marginBottom: "50px",
            fontSize: "2rem",
            padding: "20px",
            textAlign: "center",
          }}
        >
          Join Our Community. Join the Future.
        </h1>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "3rem", marginTop: "2rem"}}>
          <button
            style={{
              padding: "15px 50px",
              border: "2px solid #11D9C5",
              backgroundColor: "transparent",
              color: "white",
              borderRadius: "10px",
              fontSize: "1rem",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Discord
          </button>{" "}
          <button
            style={{
              padding: "15px 50px",
              border: "2px solid #11D9C5",
              backgroundColor: "transparent",
              color: "white",
              borderRadius: "10px",
              fontSize: "1rem",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Telegram
          </button>{" "}
        </div>
      </div>
    </>
  );
};

export default Subscribe;
