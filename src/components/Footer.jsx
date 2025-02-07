import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        background: "url(/images/Footer.png)",
      }}
    >
      <div
        style={{
          width: "70%",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "2rem 0",
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
          <h1
            style={{
              fontSize: "1.2rem",
              color: "white",
              fontWeight: "normal",
              paddingTop: "2rem",
            }}
          >
            NetSepio delivers private, secure, <br /> and censorship-free
            internet with <br />
            an AI coordination layer, shaping <br /> an agentic future.
          </h1>
        </div>
        <div>
          <h1
            style={{
              fontSize: "2rem",
              color: "white",
              fontWeight: "normal",
              paddingTop: "2rem",
            }}
          >
            About
          </h1>
          <a
            href="https://netsepio.com/mission"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <p
              style={{
                fontSize: "1.2rem",
                color: "white",
                fontWeight: "normal",
              }}
            >
              Mission <img src="/images/arrow.png" alt="up-arrrow" />
            </p>
          </a>
          <a
            href="https://netsepio.com/privacy"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <p
              style={{
                fontSize: "1.2rem",
                color: "white",
                fontWeight: "normal",
              }}
            >
              Privacy Policy <img src="/images/arrow.png" alt="up-arrrow" />
            </p>
          </a>
          <a
            href="https://netsepio.com/terms"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <p
              style={{
                fontSize: "1.2rem",
                color: "white",
                fontWeight: "normal",
              }}
            >
              Terms of use <img src="/images/arrow.png" alt="up-arrrow" />
            </p>
          </a>
          <a
            href="https://netsepio.com/faq"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <p
              style={{
                fontSize: "1.2rem",
                color: "white",
                fontWeight: "normal",
              }}
            >
              FAQ's <img src="/images/arrow.png" alt="up-arrrow" />
            </p>
          </a>
        </div>
        <div>
          <h1
            style={{
              fontSize: "2rem",
              color: "white",
              fontWeight: "normal",
              paddingTop: "0",
            }}
          >
            Products
          </h1>
          <a
            href="https://erebrus.io/"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <p
              style={{
                fontSize: "1.2rem",
                color: "white",
                fontWeight: "normal",
              }}
            >
              Erebrus <img src="/images/arrow.png" alt="up-arrrow" />
            </p>
          </a>
          <a
            href="https://www.cyreneai.com/"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <p
              style={{
                fontSize: "1.2rem",
                color: "white",
                fontWeight: "normal",
              }}
            >
              Cyrene AI <img src="/images/arrow.png" alt="up-arrrow" />
            </p>
          </a>
          <a
            href="https://chromewebstore.google.com/detail/netsepio/bbkfclgnbddljhepbfpongcollhocghd"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <p
              style={{
                fontSize: "1.2rem",
                color: "white",
                fontWeight: "normal",
                paddingBottom: "1rem"
              }}
            >
              Browser Extension
              <img src="/images/arrow.png" alt="up-arrrow" />
            </p>
          </a>
        </div>
        <div>
          <h1
            style={{
              fontSize: "2rem",
              color: "white",
              fontWeight: "normal",
              paddingTop: "2rem",
            }}
          >
            Connect
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "-0.5rem",
            }}
          >
            <a
              href="https://t.me/NetSepio"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <img
                src="/images/Telegram.png"
                alt="Telegram"
                style={{
                  borderRadius: "20px",
                }}
              />
            </a>
            <a
              href="https://github.com/Netsepio"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <img
                src="/images/Github.png"
                alt="Github"
                style={{
                  borderRadius: "20px",
                }}
              />
            </a>
            <a
              href="https://discordapp.com/invite/5uaFhNpRF6"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <img
                src="/images/Discord.png"
                alt="Discord"
                style={{
                  borderRadius: "20px",
                }}
              />
            </a>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "left",
              alignItems: "center",
              paddingBottom: "2rem",
            }}
          >
            <a
              href="https://www.linkedin.com/company/netsepio/"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <img
                src="/images/Linkedin.png"
                alt="Linkedin"
                style={{
                  marginLeft: "-1rem",
                  borderRadius: "20px",
                }}
              />
            </a>
            <a
              href="https://x.com/netsepio"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <img
                src="/images/X.png"
                alt="X"
                style={{
                  borderRadius: "20px",
                  marginLeft: "-1rem"
                }}
              />
            </a>
          </div>
        </div>
      </div>
      <div style={{ width: "70%", margin: "0 auto", marginBottom: "2rem" }}>
        <hr style={{ border: "1px solid #11D9C5" }} />
      </div>
      <div>
        <h1
          style={{
            color: "#11D9C5",
            fontSize: "1rem",
            width: "70%",
            margin: "0 auto",
            paddingBottom: "2rem",
          }}
        >
          © 2025 - NetSepio. All rights reserved.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
