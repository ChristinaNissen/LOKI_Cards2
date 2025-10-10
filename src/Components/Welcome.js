import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "./Welcome.css";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-bg">
      <Navbar />
      <main className="welcome-main">
        <h1>Welcome to Denmark's Online Voting Portal</h1>
        <div className="welcome-desc">
          Your secure platform for participating in democratic decision-making
        </div>
        <button
          onClick={() => navigate("/votedbefore")}
          className="welcome-login-btn"
        >
          Login to Vote
        </button>
       
        <div className="welcome-illustration">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
            alt="Voting illustration"
          />
        </div>
        <section className="welcome-section">
          <h2>Before You Vote:</h2>
          <div className="welcome-accordion">
            Ensure You're in a Private Environment
          </div>
          <div className="welcome-accordion">
            Get to Know our Anti-Coercion Measures
          </div>
          <div className="welcome-accordion">
            Authentication Requirements
          </div>
          <div className="welcome-accordion">System Requirements</div>
          <div className="welcome-accordion">Need Help?</div>
        </section>
      </main>
    </div>
  );
};

export default Welcome;
