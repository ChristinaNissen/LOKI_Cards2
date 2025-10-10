import React from "react";
import { useNavigate } from "react-router-dom";

const VotedBefore = () => {
  const navigate = useNavigate();

  const handleYes = () => {
    // If they already voted, you can redirect elsewhere or show a message
    navigate("/selection"); 
  };

  const handleNo = () => {
    // If they haven’t voted, send them to the voting page
    navigate("/voting");
  };

  return (
    <div style={{
      padding: "2rem",
      maxWidth: "600px",
      margin: "2rem auto",
      backgroundColor: "#1ABC9C", // same teal/green theme as Voting
      borderRadius: "8px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
      color: "#fff",
      fontFamily: "Arial, sans-serif",
      textAlign: "center"
    }}>
      <h1 style={{ marginBottom: "1rem" }}>Have you voted in the election before?</h1>
      
      <div style={{ marginTop: "2rem" }}>
        <button
          onClick={handleYes}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            backgroundColor: "#16A085", // darker teal button
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            marginRight: "1rem"
          }}
        >
          Yes
        </button>

        <button
          onClick={handleNo}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            backgroundColor: "#16A085", // same darker teal button
            color: "#fff",
            border: "none",
            borderRadius: "4px"
          }}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default VotedBefore;
