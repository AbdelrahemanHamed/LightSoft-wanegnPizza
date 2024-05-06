import React, { useEffect, useState } from "react";
import "./footer.css";
import logo from "../../images/landing page images/navbar images/Logo22-removebg-preview.png"
import faceIcon from "../../images/footer/facebook.png";
import XIcon from "../../images/footer/twitter 1.png";
import instagramIcon from "../../images/footer/instagram.png";
import image1 from "../../images/slider-footer-image/food1.png";
import image2 from "../../images/slider-footer-image/food2.png";
import image3 from "../../images/slider-footer-image/food3.png";
import image4 from "../../images/slider-footer-image/food4.png";
import Right from "../../images/slider-footer-image/Group 34.png";
import Left from "../../images/slider-footer-image/Group 51.png";
import MapLocation from "../../components/Map/Map";
import { useTheme } from "../../context";
import { Link } from "react-router-dom";
import ImageSlider from "./ImageSlider";
import axios from "axios";
import ScrollToTop from "../ScrollToTop";
const Footer = () => {
  const { darkMode } = useTheme();
  const [Category ,setCategory]=useState([])


  
  useEffect(()=>{
    axios.get("http://admin.lightsoft.ch/api/Category/GetAllCategorys")
    .then((res)=>{
        setCategory(res.data.data)
       
    })
},[1])

const [WebData, setData]=useState({})
useEffect(()=>{
axios.get("http://admin.lightsoft.ch/api/Company/GetCompanyData")
.then(response =>{
  setData(response.data.data)
})
.catch((error)=>{console.log(error)})
}
,[])

  return (
    <>
      <MapLocation darkMode={darkMode} />
      <footer>
        <div className="footer">
          <div className="images">
            <img src={logo} alt="" className="logo" />
            <div className="line"></div>
            <ImageSlider />
          </div>
          <div className="menu">
            <div className="about1">
              <h3>Über uns</h3>
              <p>
                Willkommen beiWangen Pizza und Kebab Kurier! Geniessen Sie
                unsere köstlichen Speisen mit nur 4 einfachen Schritten. Ihre
                Bestellungen werden mit höchster Priorität bearbeitet und direkt
                durch unseren zuverlässigen Lieferdienst zu Ihnen gebracht.
                Erleben Sie unkomplizierten Genuss, ohne das Haus zu verlassen.
                Bestellen Sie jetzt und freuen Sie sich auf eine prompte
                Zustellung Ihrer Lieblingsspeisen!
              </p>
              <div className="social-icons">
                <a href="www.facebook.com">
                  {" "}
                  <img
                    className="social-icons-single"
                    src={faceIcon}
                    alt=""
                  />{" "}
                </a>
                <a href="www.instagram.com">
                  {" "}
                  <img
                    className="social-icons-single"
                    src={instagramIcon}
                    alt=""
                  />{" "}
                </a>
                <a href="www.twitter.com">
                  {" "}
                  <img
                    className="social-icons-single"
                    src={XIcon}
                    alt=""
                  />{" "}
                </a>
              </div>
            </div>
            <div className="menuLink">
              <Link to="/menu">
              <Link to="/new"><h3>Menu</h3></Link>
              </Link>
              <div className="category">
                {Category?.map((category) => {
                  return (
                    <Link
                      to={`/new/${category?.id}?sub-cat=${category?.subCategory[0]?.id}`}
                    >
                      <p key={category?.id}> {category.name}</p>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="Öffnungszeiten-style">
              <h3>Öffnungszeiten</h3>
              <div className="Öffnungszeiten-cont">
                <div className="Öffnungszeiten-row">
                  <p>{WebData.openTime1}</p>
                  <p>{WebData.openTime2}</p>
                  <p>{WebData.openTime3}</p>
                </div>
                <span className="space"></span>
                {/* <div className="Öffnungszeiten-row">
                  <p>{WebData.openTime1} </p>
                  <p>11.00 - 23.00 Uhr</p>
                  <p>11.00 - 22.00 Uhr</p>
                </div> */}
              </div>
            </div>

            <div className="Liferzeiten-style">
              <h3>Liferzeiten</h3>
              <div className="Liferzeiten-cont">
                <div className="Liferzeiten-row">
                  <p>{WebData.delivery1}</p>
                  <p>{WebData.delivery1}</p>
                  <p>{WebData.delivery1}</p>
                </div>
                <span className="space"></span>
                {/* <div className="Liferzeiten-row">
                  <p>11.00 - 22.00 Uhr</p>
                  <p>11.00 - 22.00 Uhr</p>
                  <p>11.00 - 22.00 Uhr</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="copy-right-cont">
          <h2>© </h2>
          <p className="copyRight">
            {" "}
            2024, Alle Rechte vorbehalten, Wangen Pizza, Kebab und Kurier.
            Entwickelt von Lightsoft
          </p>
        </div>
        <ScrollToTop />
      </footer>
    </>
  );
};

export default Footer;
