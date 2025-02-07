import React from "react";

const Success = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh", // Full viewport height
        backgroundColor: "#040a20",
        textAlign: "center",
      }}
    >
      <div>
        <h1 style={{ color: "#fff", marginBottom: "50px", fontSize: "5rem" }}>
          Road To Success
        </h1>
        <img src="/images/Success.png" alt="Road To Success"style={{width: "70%"}}/>
      </div>
    </div>
  );
};

export default Success;
