import React from "react";
import "../styles/Success.css";
import { ZoomIn } from "./FadeAnimations";

const Success = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        paddingBottom: "10rem",
        backgroundColor: "#040a20",
        backgroundImage: "radial-gradient(900px 500px at 50% 50%, rgba(17, 217, 197, 0.1) 1%, rgba(4, 10, 32, 1) 100%, rgba(4, 10, 32, 0.4) 100%)",
        backdropFilter: "blur(400px)",
      }}
    >
      <ZoomIn>
        <h1 className="text-6xl  text-center text-white mb-12  py-12">Road To Success</h1>
        <img
          src="/images/Success-1.png"
          alt="Road To Success"
          style={{ width: "100%" }}
        />
      </ZoomIn>
    </div>
  );
};

export default Success;