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
        <h1 className="technology-title">Cutting-Edge Technology</h1>
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
            <div
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
            <div
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
                  NFT Subscription
                </h1>
                <p
                  style={{
                    fontSize: "1.2rem",
                    color: "#ccc",
                    textAlign: "left",
                    fontWeight: "normal",
                  }}
                >
                  NFT subscriptions unlock exclusive content within our
                  decentralized network. This ownership model goes beyond
                  traditional subscriptions, offering both benefits and a stake
                  in a secure, private internet for all.
                </p>
              </div>
            </div>
            <div
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
                  Encrypted tunneling
                </h1>
                <p
                  style={{
                    fontSize: "1.2rem",
                    color: "#ccc",
                    textAlign: "left",
                    fontWeight: "normal",
                  }}
                >
                  This innovative technology allows you to prove you possess
                  certain information without revealing the information itself.
                  This ensures privacy while maintaining security and trust
                  within the decentralized network.
                </p>
              </div>
            </div>
            <div
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
                  Blockchain
                </h1>
                <p
                  style={{
                    fontSize: "1.2rem",
                    color: "#ccc",
                    textAlign: "left",
                    fontWeight: "normal",
                  }}
                >
                  Connects you with others on the network without relying on a
                  central authority. This innovative approach fosters a more
                  secure and censorship-resistant online experience.
                </p>
              </div>
            </div>
            <div
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
                  Decentralized Identifier (DID)
                </h1>
                <p
                  style={{
                    fontSize: "1.2rem",
                    color: "#ccc",
                    textAlign: "left",
                    fontWeight: "normal",
                  }}
                >
                  Unlike traditional identifiers, DIDs empower each node with
                  complete control over its unique identity in public network.
                  This fosters a secure and transparent network environment,
                  where users can trust the authenticity of the nodes they
                  connect to.
                </p>
              </div>
            </div>
            <div
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
                  ZK Proofs
                </h1>
                <p
                  style={{
                    fontSize: "1.2rem",
                    color: "#ccc",
                    textAlign: "left",
                    fontWeight: "normal",
                  }}
                >
                  NetSepio's ÐVPN (Decentralized VPN) technology encrypts your
                  data, creating a secure and private tunnel for your online
                  activities. Travel the web with confidence, knowing your
                  information is protected.
                </p>
              </div>
            </div>
            <div
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
                  Confidential Containers
                </h1>
                <p
                  style={{
                    fontSize: "1.2rem",
                    color: "#ccc",
                    textAlign: "left",
                    fontWeight: "normal",
                  }}
                >
                  Ensures private data processing, zero-trust security, and
                  compliance, securing NetSepio’s decentralized infrastructure.
                </p>
              </div>
            </div>
            <div
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
                  AI Coordination Layer
                </h1>
                <p
                  style={{
                    fontSize: "1.2rem",
                    color: "#ccc",
                    textAlign: "left",
                    fontWeight: "normal",
                  }}
                >
                  Automates network optimization, detects threats, and enables
                  AI-driven, self-healing, and adaptive security for NetSepio.
                </p>
              </div>
            </div>
            <div
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
                  SCION Integration
                </h1>
                <p
                  style={{
                    fontSize: "1.2rem",
                    color: "#ccc",
                    textAlign: "left",
                    fontWeight: "normal",
                  }}
                >
                  Enables secure, multi-path routing, isolation domains, and
                  AI-driven encrypted communication for a censorship-free
                  network.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
