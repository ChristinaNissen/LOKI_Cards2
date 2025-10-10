import React from "react";
import "./Navbar.css";

const Navbar = () => (
  <header className="navbar">
    <div className="navbar-logo">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/b/b3/Coat_of_Arms_of_Denmark.svg"
        alt="Agency Logo"
      />
      <span>Agency for Online Voting</span>
    </div>
    <nav className="navbar-links">
      <a href="/help">Help</a>
      <a href="/">Home</a>
    </nav>
  </header>
);

export default Navbar;