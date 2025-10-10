import React from "react";
import { useNavigate } from "react-router-dom";

const Voting = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/confirmation"); // go to BallotConfirmation
  };

  return (
    <div style={{
      padding: "2rem",
      maxWidth: "600px",
      margin: "2rem auto",
      backgroundColor: "#1ABC9C", // teal/green theme
      borderRadius: "8px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
      color: "#fff",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>Vote</h1>
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label>
            <input type="radio" name="candidate" value="Option 1" /> Option 1
          </label>
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>
            <input type="radio" name="candidate" value="Option 2" /> Option 2
          </label>
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>
            <input type="radio" name="candidate" value="Option 3" /> Option 3
          </label>
        </div>

        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
              backgroundColor: "#16A085", // darker teal button
              color: "#fff",
              border: "none",
              borderRadius: "4px"
            }}
          >
            Submit Vote
          </button>
        </div>
      </form>
    </div>
  );
};

export default Voting;
