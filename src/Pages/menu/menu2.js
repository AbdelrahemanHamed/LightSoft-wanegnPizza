import React, { useEffect } from "react";
import "./menu.css";
import menuPageBG1 from "../../images/menu images/pexels-vincent-rivaud-2147491-removebg-preview 1.png";
import menuPageBG2 from "../../images/menu images/pexels-pixabay-39069-removebg-preview 2.png";
import menuPageBG3 from "../../images/menu images/Untitled_design__18_-removebg-preview 2.png";
import { useTheme } from "../../contexts/ThemeContext";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { CATEGORIES } from "../../utils/menuList";

export default function Menu() {
  const { isDarkTheme } = useTheme();
  const body = document.querySelector("body");
  const navigate = useNavigate();
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
      <div className="menu-container">
        <h6>*Allgemeine Geschäftsbedingungen gelten.</h6>
        {CATEGORIES.map((category) => (
          <div className="category-container" key={category.id}>
            <h3
              onClick={() =>
                navigate(
                  `/detailedMenu/${category.id}?sub-cat=${category.subCat[0].id}`
                )
              }
            >
              {category.name}
            </h3>
            <div className="sub-categories-container">
              {category.subCat.map((subCat) => (
                <Link
                  to={`/detailedMenu/${subCat.catId}?sub-cat=${subCat.id}`}
                  className="sub-category"
                >
                  {subCat.name}
                </Link>
              ))}
              {/* <Link to={"../detailedMenu/1"} className="sub-category">
                PIZZA 32 CM
              </Link>
              <Link to={"../detailedMenu/1"} className="sub-category">
                PIZZA 40 CM
              </Link>
              <Link to={"../detailedMenu/1"} className="sub-category">
                PIZZA 32CM GLUTENFREI
              </Link> */}
            </div>
          </div>
        ))}
        {/* <div className="category-container">
          <h3>PIZZA</h3>
          <div className="sub-categories-container">
            <Link to={"../detailedMenu/1"} className="sub-category">
              PIZZA 32 CM
            </Link>
            <Link to={"../detailedMenu/1"} className="sub-category">
              PIZZA 40 CM
            </Link>
            <Link to={"../detailedMenu/1"} className="sub-category">
              PIZZA 32CM GLUTENFREI
            </Link>
          </div>
        </div>
        <div className="category-container">
          <h3>APPETITHAPPEN</h3>
          <div className="sub-categories-container">
            <Link to={"../detailedMenu/2"} className="sub-category">
              TELLER
            </Link>
            <Link to={"../detailedMenu/2"} className="sub-category">
              SALATE 32 CM
            </Link>
            <Link to={"../detailedMenu/2"} className="sub-category">
              SNACKS
            </Link>
          </div>
        </div>
        <div className="category-container">
          <h3>NACHTISCH</h3>
          <div className="sub-categories-container">
            <Link to={"../detailedMenu/3"} className="sub-category">
              NACHTISCH
            </Link>
            <Link to={"../detailedMenu/3"} className="sub-category">
              EISCREME
            </Link>
          </div>
        </div>
        <div className="category-container">
          <h3>GETRÄNKE</h3>
          <div className="sub-categories-container">
            <Link to={"../detailedMenu/1"} className="sub-category">
              ALKOHOLFREIE GETRÄNKE
            </Link>
            <Link to={"../detailedMenu/1"} className="sub-category">
              WASSER
            </Link>
          </div>
        </div>
        <div className="category-container">
          <h3>EINE ANDERE KATZE.</h3>
          <div className="sub-categories-container">
            <Link to={"../detailedMenu/1"} className="sub-category">
              PIDE
            </Link>
            <Link to={"../detailedMenu/1"} className="sub-category">
              KASTEN
            </Link>
            <Link to={"../detailedMenu/1"} className="sub-category">
              KEBAB
            </Link>
          </div>
        </div> */}
        <img className="bg1" src={menuPageBG1} alt="pizza" />
        <img className="bg2" src={menuPageBG2} alt="background img2" />
        <img className="bg3" src={menuPageBG3} alt="pepper" />
      </div>
    </>
  );
}
