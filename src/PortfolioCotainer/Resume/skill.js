import React from "react";
import "./skill.css";

const Skill = () => {
  return (
   <div className="container" id="skill">
     <h1 className="heading">Programming Skills</h1>
   

    <div className="grid-container">
      <div className="grid-item"> <div className="about-skill"><p>HTML</p><hr style={{ width: "70%" }}/></div></div>
      <div className="grid-item"> <div className="about-skill"><p>CSS</p><hr style={{ width: "60%" }}/></div></div>
      <div className="grid-item"> <div className="about-skill"><p>JavaScript</p><hr style={{ width: "50%" }}/></div></div>
      <div className="grid-item"> <div className="about-skill"><p>Core Java</p><hr style={{ width: "45%" }}/></div></div>
      <div className="grid-item"> <div className="about-skill"><p>React JS</p><hr style={{ width: "35%" }}/></div></div>
      <div className="grid-item"> <div className="about-skill"><p>Node JS</p><hr style={{ width: "10%" }}/></div></div>
      <div className="grid-item"> <div className="about-skill"><p>Bootstrap</p><hr style={{ width: "65%" }}/></div></div>
      <div className="grid-item"> <div className="about-skill"><p>Tailwind</p><hr style={{ width: "30%" }}/></div></div>
    </div>

    </div>
  );
};

export default Skill;
