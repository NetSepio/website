import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const TermsOfUse = () => {
  return (
    <>
      <div style={{ backgroundColor: "#040a20" }}>
        <NavBar />
        <div style={{ width: "70%", margin: "0 auto" }}>
          <h1
            style={{ fontSize: "2.25rem", textAlign: "center", color: "#08d9c5" }}
          >
            Terms and Conditions
          </h1>
          <p
            style={{
              fontSize: "1rem",
              fontWeight: "400",
              paddingBottom: "5rem",
              color: "white",
            }}
          >
            Welcome to NetSepio! <br />
            <br /> These terms and conditions outline the rules and regulations
            for the use of NetSepio's Website, located at https://netsepio.com/.{" "}
            <br />
            <br /> By accessing this website we assume you accept these terms
            and conditions. Do not continue to use NetSepio if you do not agree
            to take all of the terms and conditions stated on this page. <br />
            <br /> The following terminology applies to these Terms and
            Conditions, Privacy Statement and Disclaimer Notice and all
            Agreements: "Client", "You" and "Your" refers to you, the person log
            on this website and compliant to the Company&aps;s terms and
            conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers
            to our Company. "Party", "Parties", or "Us", refers to both the
            Client and ourselves. All terms refer to the offer, acceptance and
            consideration of payment necessary to undertake the process of our
            assistance to the Client in the most appropriate manner for the
            express purpose of meeting the Client's needs in respect of
            provision of the Company's stated services, in accordance with and
            subject to, prevailing law of in. Any use of the above terminology
            or other words in the singular, plural, capitalization and/or he/she
            or they, are taken as interchangeable and therefore as referring to
            same. <br />
            <br /> Unless otherwise stated, NetSepio and/or its licensors own
            the intellectual property rights for all material on NetSepio. All
            intellectual property rights are reserved. You may access this from
            NetSepio for your own personal use subjected to restrictions set in
            these terms and conditions. <br />
            <br />
            You must not: <br />
            <br /> 1. Republish material from NetSepio.
            <br /> 2. Sell, rent or sub-license material from NetSepio.
            <br /> 3. Reproduce, duplicate or copy material from NetSepio.
            <br /> 4. Redistribute content from NetSepio <br />
            <br /> NetSepio reserves the right to monitor all Comments and to
            remove any Comments which can be considered inappropriate, offensive
            or causes breach of these Terms and Conditions.{" "}
          </p>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default TermsOfUse;
