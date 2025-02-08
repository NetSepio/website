import React, { useState } from "react";
import "../styles/Navbar.css"; // Import the external CSS file

const NavBar = () => {
  const [isOpen] = useState(false);

  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <div className="navbar-logo">
          <img src="/images/Logo.png" alt="NetSepio-Logo" className="logo-img" />
          <img src="/assets/NetSepio.svg" alt="NetSepio-Logo" className="netsepio-logo" />
        </div>
        <div className="navbar-menu">
          <button className="explore-button">Explore</button>

          {isOpen && (
            <div className="dropdown-menu">
              <ul className="dropdown-list">
                {["Link1", "Link2", "Link3"].map((link, index) => (
                  <li key={index} className="dropdown-item">
                    <a href="https://google.com" className="dropdown-link">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
