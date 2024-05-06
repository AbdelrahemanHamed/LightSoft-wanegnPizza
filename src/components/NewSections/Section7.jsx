import React from "react";
import "./section7.css";
import image from "../../images/section7Image.png";
import { useTheme } from "../../context";
import { useNavigate } from "react-router-dom";

const Section7 = () => {
  const { darkMode } = useTheme();
  const navigate = useNavigate();
  return (
    <div className={`section7 ${!darkMode ? "dark-mode" : ""}`}>
      <div className="container">
        <div className="left-side-section7">
          <h1>Gerichte zum Abholen bestellen</h1>
          <p>
            Jetzt bequem Online  abholen oder schnell liefern lassen. Bei uns
            kannst du ganz einfach dein Lieblingsessen bestellen und bequem nach
            Hause liefern lassen!
          </p>
          <button className="glow-on-hover" onClick={() => navigate("/new")}>
            Zum abholen bestellen
          </button>
        </div>
        <div className="right-side-section7">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section7;
