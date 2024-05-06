import React from "react";
import "./card.css";
import Image from "../../images/landing page images/third section images/cardImage.png";
import Image2 from "../../images/landing page images/third section images/vippng 1.svg";
import { useTheme } from "../../context/index";
import { useNavigate } from "react-router-dom";
const Card = () => {
  const navigate = useNavigate();
  const { darkMode } = useTheme();
  return (
    <div className={!darkMode ? "dark-cart-parent" : ""}>
      <div className={!darkMode ? "card dark-mode" : "card"}>
        <div className="text">
          <h1 className="Title">
            Profitieren Sie von unserem exklusiven Angebot: <br></br>
            Erhalten Sie <span> 50 % Rabatt auf Ihre erste Bestellung!</span>
          </h1>
          {/* <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without.
          </p> */}
          <button className="card-btn" onClick={() => navigate("/new")}>
            Jetzt bestellen
          </button>
        </div>
        <img className="spinner" src={Image2} alt="" />
      </div>
    </div>
  );
};

export default Card;
