import React from "react";
import "../styles/Success.css";
import { ZoomIn } from "./FadeAnimations";

const Success = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center", // Full viewport height
        backgroundColor: "#040a20",
        textAlign: "center",
        paddingBottom: "10rem",
      }}
    >
      <ZoomIn>
        <h1 className="success-title">Road To Success</h1>
        <img
          src="/images/Success.png"
          alt="Road To Success"
          style={{ width: "95%" }}
        />
      </ZoomIn>
    </div>
  );
};

export default Success;
