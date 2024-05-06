import React from "react";
import { useTheme } from "../../context";
import "./about.css";
import About_image from "../../images/landing page images/second section images/aboutimage (2).png";
import { useNavigate } from "react-router-dom";
const About = () => {



  const { darkMode } = useTheme();
  const navigate = useNavigate();
  return (
    <div className={!darkMode ? "about dark-mode" : " about white-mode"}>
      <div className="container">
        <div className="image">
          <img src={About_image} alt="" />
        </div>
        <div className="text">
          <h2>Ein gemütlicher Ort für kulinarischen Genuss.</h2>
          <p>
            Für ein unvergleichliches Wohlfühlessen <br /> empfehlen wir stets
            eine Kombination aus Gemüse, <br /> Maisbrot und köstlich
            Frittiertem.
            <br />
          </p>
          <button className="about-btn" onClick={() => navigate("/new")}>
            estellen
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
