import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import Dark_mood from "../../images/landing page images/navbar images/dark.png";
import light_mode from "../../images/landing page images/navbar images/light.png";
import About from "../../components/About/About";
import ProductList from "../../components/Prodects/ProductList";
import backgroundImage from "../../images/background/bg.webp";
import backgroundImage2 from "../../images/background/hero-bg-2 (1).webp";
import backgroundImage3 from "../../images/background/hero-bg3.webp";
import background5 from "../../images/background/bg5.webp"
import background4 from "../../images/background/bg11.webp"
import WhatsappIcon from "../../images/WhatsApp_icon.png";
import { useTheme } from "../../context";
import { useLocation, useNavigate } from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop";
import { Autoplay,EffectFade,Keyboard, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Home = ({ CartPop }) => {
  const navigate = useNavigate("");
  const reservationRef = useRef();
  const slideRef = useRef();
  const { pathname } = useLocation();
  const isReservation = pathname.includes("reservation");
  console.log(isReservation);

 
  const { darkMode, toggleDarkMode } = useTheme();
  useEffect(() => {
    if (isReservation) reservationRef.current.scrollIntoView();
  }, [isReservation]);
 
  return (
    <>
      <ScrollToTop />
      <div
        className={!CartPop ? "hero-section bluer" : "hero-section"}
        id="Home"
        // style={{ backgroundImage: `url(${slide})` }}
         >
        <a href="https://wa.me/41766025572" target="_blank">
        <img src={WhatsappIcon} className="WhatsappIcon" alt="" />
        </a>
          
           
        <section className="hero-main-section">
          <div className="container">
            <div className="text">
              <h1>
                <p className="Tilte-home">Wangen </p>
                Pizza, Kebab und Kurier
              </h1>
              <h3 className="desc">
                Unser Geheimrezept: Qualität, Frische und Vielfalt!
              </h3>
              <button className="home-btn" onClick={() => navigate("/new")}>
                Jetzt bestellen
              </button>
            </div>
       
        
          </div>
       
        </section>
  
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
      </Swiper>






       
      </div>
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
      <About isDark={darkMode} />
      <ProductList isDark={darkMode} reservationRef={reservationRef} />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
