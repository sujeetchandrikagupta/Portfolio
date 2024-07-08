import React, { useState } from "react";
import Typical from "react-typical";
import "./Profile.css";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const scrollToHome = () => {
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="profile-container" id="home">
      <div className={`side-navbar ${isOpen ? "open" : ""}`}>
        <div className="side-navbar-logo">
          <a href="#home">SG</a>
        </div>
        <div className="side-navbar-toggle" onClick={toggleNavbar}>
          ☰
        </div>
        <ul className="side-navbar-menu">
          <li className="side-navbar-item">
            <a href="#home" className="side-navbar-link">
              Home
            </a>
          </li>
          <li className="side-navbar-item">
            <a href="#about" className="side-navbar-link">
              About
            </a>
          </li>
          <li className="side-navbar-item">
            <a href="#skill" className="side-navbar-link">
              Skills
            </a>
          </li>
          <li className="side-navbar-item">
            <a href="#contact" className="side-navbar-link">
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div className="profile-parent">
        <div className="profile-details">
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Sujeet Gupta</span>
            </span>
          </div>

          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Developer 🌎",
                    3000,
                    "Full Stack Developer 💻",
                    3000,
                    "MERN Stack Developer 😎",
                    3000,
                    "Cross Platform Developer 🌎",
                    3000,
                    "React/React Native Developer 📱",
                    3000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"> Hire Me </button>
            <a href="sujeet.pdf" download="Sujeet sujeet.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>

        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
        
      </div>

      <button className="scroll-to-home-btn" onClick={scrollToHome}>
        ⬆
      </button>
    </div>
  );
};

export default Profile;