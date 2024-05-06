import React from "react";
import "./pizza.css";
import PizzaImage from "../../images/landing page images/third section images/hands-taking-pizza 1.png";
// import { NavLink } from 'react-router-dom'
import { useTheme } from "../../context";
import { useNavigate } from "react-router-dom";
const Pizza = () => {
  const { darkMode } = useTheme();
  const navigate = useNavigate();
  return (
    <>
      <section
        className={
          !darkMode
            ? "dark-mode-pizza  main-section third-section "
            : "main-section third-section"
        }
      >
        <div className="container">
          <div className="content-pizza-forResponsive">
            <h2>
              <span>Die beliebtesten </span> Pizzen dieses Monats sind:
              <br />
            </h2>
            <img className="pizza-image" src={PizzaImage} alt="" />
            {/* <div className="separator"></div> */}
            <ul>
              <li>Pizza Margherita</li>
              <li>Pizza Pepperoni</li>
              <li>Pizza Prosciutto e Funghi</li>
              <li>Pizza Quattro Stagioni</li>
              <li>Pizza Diavola</li>
              <li>Pizza Hawaii</li>
              {/* <div className="separator"></div> */}
            </ul>
          </div>
          <div className="btn-group">
            <button
              className="pizza-btn order-online-now-btn"
              onClick={() => navigate("/new")}
            >
              Jetzt, Online bestellen...
            </button>
            <button
              className="pizza-btn see-our-menu-btn"
              onClick={() => navigate("/new")}
            >
              {/* <a
                to="/menu"
                className="see-our-menu-link"
              >
              </a> */}
              Siehe unsere Speisekarte.
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pizza;
