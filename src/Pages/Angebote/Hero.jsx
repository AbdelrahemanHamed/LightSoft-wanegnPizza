import React from "react";
import "./hero.css";
import SliderAng from "./SliderAng";
import Ang from "./Ang";
import Footer from "../../components/Footer/Footer";
import Dark_mood from "../../images/landing page images/navbar images/dark.png";
import light_mode from "../../images/landing page images/navbar images/light.png";
import { useTheme } from "../../context";
import backgroundImage from "../../images/background/bg.webp";
import backgroundImage2 from "../../images/background/hero-bg-2 (1).webp";
import backgroundImage3 from "../../images/background/hero-bg3.webp";
import background5 from "../../images/background/bg5.webp"
import background4 from "../../images/background/bg11.webp"
import background6 from "../../images/Angebote\ image/Angebote-image.jpg"
import { useState,useEffect } from "react";
import { Autoplay,EffectFade,Keyboard, Navigation,EffectCreative, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import axios from "axios";
const Hero = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  
  return (
    <>
      <div
        style={{
          backgroundColor: "rgba(0,0,0,.9)",
          width: "100%",
          height: "132px",
        }}
      >
        {/* <Navbar /> */}
      </div>
      <div className={`hero`}>
        <div className="container">
          <h1 className="hero-title">Angebote</h1>
          <p>Entdecken Sie täglich neue Angebote und profitieren Sie!</p>
          <div className="toggle-btn">
             {darkMode ? <img
                src={Dark_mood}
                alt=""
                className="dark-image-mode"
                onClick={() => {
                  toggleDarkMode();
                }}
              />: <img
              src={light_mode}
              alt=""
              className="white-image-mode"
              onClick={() => {
                toggleDarkMode();
              }}
            />}
            </div>
        </div>
      </div>





      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 3100,
          disableOnInteraction: false,
        }}
        modules={[Autoplay,EffectFade,Keyboard,Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src= {background4}  style={{height:"100vh",width:"100%"}} />
        </SwiperSlide>
        <SwiperSlide>
          <img src= {backgroundImage}  style={{height:"100vh",width:"100%"}}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={backgroundImage2}  style={{height:"100vh",width:"100%"}} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={backgroundImage3}  style={{height:"100vh",width:"100%"}} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={background5} style={{height:"100vh",width:"100%"}} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={background6} style={{height:"100vh",width:"100%"}} />
        </SwiperSlide>
      </Swiper>










      <div className={`container-slider ${darkMode ? "dark-mode" : ""}`}>
        <SliderAng />
      </div>








      <div className={`pizza-offer ${darkMode ? "dark-mode" : ""}`}>
      <h1 style={{color:"#fff",fontSize:"42px" ,marginBottom:"80px",fontFamily:"inter"}}>Menus ,die ich bisher bestellt habe !</h1>
        <div className="container">
         
          <div className="left-side">
            <Ang />
          </div>

          {/* <div className="right-side">
            <Ang  />  
          </div> */}
        </div>
      </div>
      <div className={`container-slider ${darkMode ? "dark-mode" : ""}`}>
        <SliderAng />
      </div>

    </>
  );
};

export default Hero;
