import React from "react";
import { useState } from "react";
import "./ToggeleButton.css";

const ToggeleButton = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="mainContainer" >

      <div className="container" style={{backgroundColor: isOn ? "rgb(31, 236, 31)" : "rgb(216, 18, 18)"}} onClick={handleToggleSwitch}>
        <div className={`parent ${isOn ? "on" : "off"}`}>
          <span className="togeleState">{isOn ? "ON" : "OFF"}</span>
        </div>
      </div>

    </div>
  );
};

export default ToggeleButton;
