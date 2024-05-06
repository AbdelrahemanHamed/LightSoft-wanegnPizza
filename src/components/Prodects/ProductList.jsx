import React, { useEffect, useState } from "react";
import "./product.css";

import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Card from "../show/Card";
import Pizza from "../Details/Pizza";
import Contact from "../contact/Contact";
import { useTheme } from "../../context";
import Newsection from "../NewComponent/Newsection";
import { Link } from "react-router-dom";
import Slider from "../slide-footer/Slider";
import Section5 from "../NewSections/Section5";
import Section6 from "../NewSections/Section6";
import Section7 from "../NewSections/Section7";
import Section4 from "../NewSections/Section4";
import SliderAng from "../../Pages/Angebote/SliderAng";

const ProductList = ({ reservationRef }) => {
  const { darkMode } = useTheme();
  return (
    <>
      <div className={!darkMode ? "product dark-mode" : " product white-mode"}>
        <div className="container">
          <h1>
            Geniessen Sie den Geschmack von Qualität und Tradition mit unseren
            einzigartigen Produkten
          </h1>
          <div className="view"></div>

          <Slider />
        </div>
      </div>
      <Card />
      <Section5 />
      <div className={`ange-section ${darkMode && "dark-mode" }`}>
      <SliderAng/>
      </div>
      <Pizza isDark={darkMode} />
      <Section4 />
      <Section7 />
      <Section6 />
      <Newsection />
      <Contact reservationRef={reservationRef} />
    </>
  );
};

export default ProductList;
