import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/Faq.css";

const faqData = [
  {
    question: "Is NetSepio safe to use?",
    answer:
      "Yes, NetSepio is a highly secure platform that uses advanced blockchain technology to provide the best protection against scams and malware. Your personal information and digital assets are always safe and secure with NetSepio.",
  },
  {
    question: "What features does the NetSepio web app offer?",
    answer:
      "The NetSepio web app allows users to read and delete their reviews and also search for other website reviews. This feature provides users with control over their contributions to the community-driven approach to internet safety.",
  },
  {
    question: "Can I use NetSepio to protect my online privacy?",
    answer:
      "Yes, NetSepio offers various platform features like VPN, and SSI that allow you to protect your online privacy. With our VPN service, you can browse the internet anonymously and securely. From real-time threat detection to proactive measures against cyber threats, NetSepio provides a comprehensive solution to protect your online privacy effectively.",
  },
  {
    question: "How does NetSepio differ from other cybersecurity platforms?",
    answer:
      "NetSepio is a decentralized review management system that combines the power of blockchain with cybersecurity to provide the best protection against scams and malware. Our platform offers unique features like NFT for sharing your thoughts on websites, an archive of reviews on IPFS, and community-driven decision-making for creating lists of unsafe websites.",
  },
  {
    question: "What are the benefits of using the NetSepio Crypto Wallet?",
    answer:
      "The NetSepio Crypto Wallet is a secure, multi-chain-supported crypto wallet that lets you send and receive coins and ERC20 tokens. With our Crypto Wallet, you can manage all your digital assets in one secure location, making it easy and convenient to trade and invest in cryptocurrencies. Additionally, the NetSepio Crypto Wallet supports multiple chains, ensuring that all your digital assets are safe and secure.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="faq-page">
      <NavBar />
      <div className="faq-content">
        <h1 className="faq-title">FAQ's</h1>
        <h3 className="faq-subtitle">Frequently Asked Questions</h3>
        <div className="faq-container">
          {faqData.map((item, index) => (
            <div key={index} className="faq-item">
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{item.question}</span>
                <span className="faq-icon">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="faq-answer">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
