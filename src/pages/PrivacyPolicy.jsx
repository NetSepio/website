import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <div style={{ backgroundColor: "#040a20" }}>
      <NavBar />
      <div style={{ width: "70%", margin: "0 auto" }}>
        <h1 style={{ fontSize: "4rem", textAlign: "center", color: "#08d9c5" }}>
          Privacy Policy
        </h1>
        <p
          style={{
            fontSize: "1.4rem",
            fontWeight: "400",
            paddingBottom: "5rem",
            paddingTop: "2rem",
            color: "white",
          }}
        >
          This Privacy Policy describes our policies and procedures on the
          collection, use and disclosure of your information when you use the
          Service and tells you about your privacy rights and how the law
          protects You. We use your Personal data to provide and improve the
          Service. By using the Service, you agree to the collection and use of
          information in accordance with this Privacy Policy. While using Our
          Service, we may ask you to provide us with certain personally
          identifiable information that can be used to contact or identify you.
          Personally identifiable information may include, but is not limited
          to: Email address, First name and last name, Twitter and Discord
          account, Usage Data Usage Data is collected automatically when using
          the Service. Usage Data may include information such as your Device's
          Internet Protocol address (e.g. IP address), browser type, browser
          version, etc. <br />
          <br /> We use Cookies and similar tracking technologies to track the
          activity on our Service and store certain information. Tracking
          technologies used are beacons, tags, and scripts to collect and track
          information and to improve and analyze our Service. The technologies
          we use may include: Cookies can be "Persistent" or "Session" Cookies.
          Persistent Cookies remain on your personal computer or mobile device
          when you go offline, while Session Cookies are deleted as soon as you
          close your web browser. Cookies or Browser Cookies: A cookie is a
          small file placed on your Device. You can instruct your browser to
          refuse all Cookies or to indicate when a Cookie is being sent.
          However, if you do not accept Cookies, you may not be able to use some
          parts of our Service. Unless you have adjusted your browser setting so
          that it will refuse Cookies, our Service may use Cookies. Web Beacons:
          Certain sections of our Service and our emails may contain small
          electronic files known as web beacons (also referred to as clear gifs,
          pixel tags, and single-pixel gifs) that permit the Company, for
          example, to count users who have visited those pages or opened an
          email and for other related website statistics (for example, recording
          the popularity of a certain section and verifying system and server
          integrity).
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
