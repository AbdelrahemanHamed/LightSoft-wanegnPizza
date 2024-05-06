import React, { useEffect } from "react";
import "./comingSoon.css";
import BGImage from "../../images/checkout page images/BGImage.png";

import { useTheme } from "../../contexts/ThemeContext";
import Header from "../../components/Header";
export default function ComingSoon() {
  const body = document.querySelector("body");
  const { isDarkTheme } = useTheme();

  useEffect(() => {
    if (isDarkTheme) {
      body.classList.add("dark-mode");
      body.classList.remove("white-mode");
    } else {
      body.classList.add("white-mode");
      body.classList.remove("dark-mode");
    }
  }, [isDarkTheme, body.classList]);
  return (
    <>
      <Header isDarkTheme={isDarkTheme} />
      <div className="coming-soon-page-container">
        <h1>Demnächst...</h1>
      </div>
    </>
  );
}
