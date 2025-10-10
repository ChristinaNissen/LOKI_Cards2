import React from "react";
import { useNavigate } from "react-router-dom";

const randomWords = ["sheep", "tree", "moon", "star", "river", "cloud"];
const randomEmojis = ["🌟", "🍀", "🔥", "🎈", "🌸", "⚡"];
const randomColors = ["#2E8B57", "#3CB371", "#20B2AA", "#008080", "#66CDAA", "#5F9EA0"];

const BallotConfirmation = ({ type = "card", ballotNumber = 12345 }) => {
  const navigate = useNavigate();
  const now = new Date();
  const dateTime = now.toLocaleString();

  const wordRef = randomWords[Math.floor(Math.random() * randomWords.length)];
  const emojiRef = randomEmojis[Math.floor(Math.random() * randomEmojis.length)];
  const colorRef = randomColors[Math.floor(Math.random() * randomColors.length)];

  const containerStyle = {
    textAlign: "center",
    margin: "2rem auto",
    padding: "2rem",
    maxWidth: "600px",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
    backgroundColor: "#20B2AA", // teal/green background
    color: "#fff",
    fontFamily: "Arial, sans-serif"
  };

  const buttonStyle = {
    marginTop: "40px",
    padding: "12px 24px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#008080",
    color: "#fff",
    fontWeight: "bold"
  };

  const visualStyle = {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  };

  return (
    <div style={containerStyle}>
      <h2>Ballot Confirmation</h2>
      <p>Your ballot number: <strong>{ballotNumber}</strong></p>

      <div style={visualStyle}>
        {type === "words" && (
          <div style={{ fontSize: "24px", fontWeight: "bold" }}>{wordRef}
            <div style={{ fontSize: "16px", marginTop: "5px" }}>{dateTime}</div>
          </div>
        )}

        {type === "images" && (
          <>
            <img
              src={`https://via.placeholder.com/80?text=${wordRef}`}
              alt="ballot icon"
              style={{ marginBottom: "10px", borderRadius: "8px" }}
            />
            <div>{dateTime}</div>
          </>
        )}

        {type === "patterns" && (
          <div
            style={{
              width: "120px",
              height: "120px",
              background: `repeating-linear-gradient(45deg, #${Math.floor(Math.random() * 16777215).toString(
                16
              )}, #${Math.floor(Math.random() * 16777215).toString(16)} 10px)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "14px",
              color: "#fff"
            }}
          >
            {dateTime}
          </div>
        )}

        {type === "card" && (
          <div
            style={{
              marginTop: "20px",
              padding: "20px",
              backgroundColor: colorRef,
              borderRadius: "12px",
              fontSize: "24px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            {emojiRef}
            <div style={{ fontSize: "14px", marginTop: "10px" }}>{dateTime}</div>
          </div>
        )}

        <button style={buttonStyle} onClick={() => navigate("/studyinfo2")}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default BallotConfirmation;
