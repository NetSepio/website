import React, { useEffect, useState } from "react";
import "../styles/Success.css";

const Achievement = ({ id, position, isVisible, heading, description, pinPosition }) => {
  return (
    <>
      {/* Achievement Text Content */}
      <div
        id={`achievement-${id}`}
        style={{
          position: "absolute",
          ...position, // Position for title and description
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.5s ease, transform 0.5s ease",
          transform: isVisible ? "translateY(0)" : "translateY(50px)",
          backgroundColor: "transparent", // Transparent background
          padding: "10px",
          borderRadius: "8px",
        }}
        className="achievement"
      >
        <h3 style={{ color: "white", marginBottom: "5px" }}>{heading}</h3>
        <p style={{ color: "#11D9C5", margin: 0 }}>{description}</p>
      </div>

      {/* Pin Icon for Each Achievement */}
      <img
        src="/images/pin-icon.png" // Direct URL for the pin icon
        alt="Pin Icon"
        style={{
          position: "absolute",
          ...pinPosition, // Custom position for the pin icon
          transform: `translate(-50%, -50%) ${
            id % 2 === 0 ? "rotate(-180deg)" : ""
          }`, // Rotate even IDs by -180 degrees
          width: "40px",
          height: "120px",
          opacity: isVisible ? 1 : 0, // Sync visibility with the achievement
          transition: "opacity 0.5s ease",
        }}
      />
    </>
  );
};

const Success = () => {
  const achievements = [
    {
      id: 1,
      position: { top: "40%", left: "15%" }, // Position for title and description
      heading: "Erebrus Launch",
      description: "Q2 2024",
      pinPosition: { top: "49%", left: "20%" }, // Custom pin position for ID 1
    },
    {
      id: 2,
      position: { top: "60%", left: "20%" }, // Position for title and description
      heading: "Mobile App peaq integration",
      description: "Q3 2024",
      pinPosition: { top: "56%", left: "27%" }, // Custom pin position for ID 2
    },
    {
      id: 3,
      position: { top: "36%", left: "27%" }, // Position for title and description
      heading: "Dwi-Fi Integrations Community Rewards",
      description: "Q3 2024",
      pinPosition: { top: "48%", left: "35%" }, // Custom pin position for ID 3
    },
    {
      id: 4,
      position: { top: "58%", left: "35%" }, // Position for title and description
      heading: "Solana Deployment Android Store Listing",
      description: "Q4 2024",
      pinPosition: { top: "53%", left: "43%" }, // Custom pin position for ID 4
    },
    {
      id: 5,
      position: { top: "30%", right: "45%" }, // Position for title and description
      heading: "Cypherpunk Rewards Program",
      description: "Q4 2024",
      pinPosition: { top: "44%", right: "50%" }, // Custom pin position for ID 5
    },
    {
      id: 6,
      position: { top: "52%", right: "35%" }, // Position for title and description
      heading: "Roaming Firewall Standard Nodes",
      description: "Q4 2024",
      pinPosition: { top: "47%", right: "40%" }, // Custom pin position for ID 6
    },
    {
      id: 7,
      position: { top: "22%", right: "28%" }, // Position for title and description
      heading: "CyreneAI AI Agent platform",
      description: "Q1 2025",
      pinPosition: { top: "35%", right: "35%" }, // Custom pin position for ID 7
    },
    {
      id: 8,
      position: { top: "43%", right: "20%" }, // Position for title and description
      heading: "NetSepio Token Launch",
      description: "Q2 2025",
      pinPosition: { top: "37%", right: "27%" }, // Custom pin position for ID 8
    },
  ];

  const [visibleSteps, setVisibleSteps] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const newVisibleSteps = [];
      achievements.forEach((achievement) => {
        const element = document.getElementById(`achievement-${achievement.id}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            newVisibleSteps.push(achievement.id);
          }
        }
      });
      setVisibleSteps(newVisibleSteps);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [achievements]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "200vh",
        backgroundColor: "#040a20",
        textAlign: "center",
        position: "relative",
      }}
    >
      <h1 className="success-title">Road To Success</h1>
      <img
        src="/images/roadmap-rocket.png"
        alt="Road To Success"
        style={{ width: "95%", position: "absolute", top: "10%" }}
      />
      {achievements.map((achievement) => (
        <Achievement
          key={achievement.id}
          {...achievement}
          isVisible={visibleSteps.includes(achievement.id)}
        />
      ))}
    </div>
  );
};

export default Success;