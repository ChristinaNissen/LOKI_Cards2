import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Static data for each type
const wordsList = ["sheep", "tree", "moon", "star", "river", "cloud", "flower", "sun", "bird", "rock"];
const emojisList = ["🌟", "🍀", "🔥", "🎈", "🌸", "⚡", "🍎", "🍌", "🍇", "🍉"];
const patternsList = Array.from({ length: 10 }).map(
  () => ["#20c997", "#17a2b8"] // Fixed teal/green gradient for patterns
);

// Change this to "words", "card", "images", or "patterns" for static selection type
const visualType = "card";

// Define a consistent green/teal color scheme
const themeColors = {
  background: "#d1f5f0",
  border: "#20c997",
  button: "#17a2b8",
  buttonText: "#fff",
  cardText: "#fff",
};

const VisualSelection = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState([]);

  // Determine items to display
  let items = [];
  if (visualType === "words") items = wordsList;
  if (visualType === "card") items = emojisList;
  if (visualType === "images") items = wordsList; // Placeholder for images
  if (visualType === "patterns") items = patternsList;

   const handleSelect = (idx) => {
    setSelected((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const handleNext = () => {
    if (selected.length > 0) {
      console.log("Selected item:", selected); // later send to backend
      navigate("/voting");
    } else {
      alert("Please select one item to continue");
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "30px",
        backgroundColor: themeColors.background,
        minHeight: "80vh",
        padding: "30px",
        borderRadius: "12px",
      }}
    >
      <h2 style={{ color: themeColors.border }}>Please select one visual presentation</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            onClick={() => handleSelect(idx)}
            style={{
              cursor: "pointer",
              padding: "20px",
              borderRadius: "12px",
              border: selected.includes(idx) ? `3px solid ${themeColors.button}` : `2px solid ${themeColors.border}`,
              minWidth: "100px",
              minHeight: "100px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              background:
                selected.includes(idx)
                  ? "#b2f0e6" // Highlight selected with a stronger color
                  : visualType === "patterns"
                  ? `repeating-linear-gradient(45deg, ${item[0]}, ${item[1]} 10px)`
                  : visualType === "card"
                  ? themeColors.button
                  : "#fff",
              color: visualType === "card" || visualType === "patterns" ? themeColors.cardText : themeColors.border,
              fontSize: "20px",
              boxShadow: selected.includes(idx)
                ? "0 0 10px 2px #17a2b8"
                : "none", // Add a glow to selected
              transition: "background 0.2s, box-shadow 0.2s, border 0.2s",
            }}
          >
            {visualType === "words" && <span>{item}</span>}
            {visualType === "card" && <span>{item}</span>}
            {visualType === "images" && (
              <img
                src={`https://via.placeholder.com/60?text=${item}`}
                alt="visual"
                style={{ borderRadius: "8px" }}
              />
            )}
            {visualType === "patterns" && <span>Pattern</span>}
          </div>
        ))}
      </div>
      <button
        onClick={handleNext}
        style={{
          marginTop: "30px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: themeColors.button,
          color: themeColors.buttonText,
          border: "none",
          borderRadius: "8px",
        }}
      >
        Next
      </button>
    </div>
  );
};

export default VisualSelection;
