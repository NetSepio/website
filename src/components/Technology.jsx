import React from "react";
import "../styles/Technology.css";

const Technology = () => {
  return (
    <div
      style={{
        backgroundColor: "#040a20",
        textAlign: "center",
        width: "100%",
      }}
    >
      <div style={{ paddingBottom: "10rem" }}>
        <h1 className="technology-title">
          Cutting-Edge Technology
        </h1>
        <div
          style={{
            width: "100%", // Full viewport height
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "white",
            fontSize: "24px",
            fontWeight: "bold",
            background: `
            radial-gradient(farthest-side, #1D3B57 1%, #64B96830 40%, #11D9C300 100%), 
            linear-gradient(#040a20, #040a20, #141E43)
          `,
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              width: "100%",
              height: "100%",
            }}
          >
            {Array.from({ length: 9 }).map((_, index) => (
              <div
                key={index}
                style={{
                  flex: "1 1 30%",
                  minWidth: "300px",
                  border: "2px solid #08d9c5",
                  padding: "28px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div style={{ padding: "40px" }}>
                  <h1 style={{ fontSize: "2rem", textAlign: "left" }}>
                    Decentralized Peer Discovery
                  </h1>
                  <p
                    style={{
                      fontSize: "1.2rem",
                      color: "#ccc",
                      textAlign: "left",
                      fontWeight: "normal",
                    }}
                  >
                    NetSepio builds on blockchain technology, a secure digital
                    ledger, for trustworthy data storage and verifiable
                    transactions. This forms the foundation for a reliable and
                    secure internet.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
