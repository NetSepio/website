import React, { useState } from "react";

const NavBar = () => {
  const [isOpen] = useState(false);
  return (
    <div
      style={{
        backgroundColor: "#040A20",
        padding: "0 8rem"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100px",
        }}
      >
        <div>
          <img
            src="/images/Logo.png"
            alt="NetSepio-Logo"
            style={{
              height: "45px",
            }}
          />
          <img
            src="/assets/NetSepio.svg"
            alt="NetSepio-Logo"
            style={{
              height: "35px",
            }}
          />
        </div>
        <div>
          {/* Explore Button */}
          <button
            // onClick={() => setIsOpen(!isOpen)}
            style={{
                padding: "15px 30px",
                border: "2px solid #11D9C5",
                backgroundColor: "transparent",
                color: "white",
                borderRadius: "10px",
                fontSize: "1rem",
                fontWeight: "bold",
                cursor: "pointer"
            }}
          >
            Explore
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div
              style={{
                position: "absolute",
                top: "75px",
                right: "31px",
                backgroundColor: "white",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                overflow: "hidden",
                width: "150px",
              }}
            >
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {["Link1", "Link2", "Link3"].map((link, index) => (
                  <li key={index} style={{ borderBottom: "1px solid #ddd" }}>
                    <a
                      href="https://google.com"
                      style={{
                        display: "block",
                        padding: "10px",
                        textDecoration: "none",
                        color: "#333",
                      }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
