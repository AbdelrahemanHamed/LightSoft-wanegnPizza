import React from "react";
import "./contact.css";
import Navbar from "../../components/Navbar/Navbar";
import logo from "../../images/landing page images/navbar images/Logo22-removebg-preview.png"
import faceIcon from "../../images/footer/facebook.png";
import XIcon from "../../images/footer/twitter 1.png";
import instagramIcon from "../../images/footer/instagram.png";
import Footer from "../../components/Footer/Footer";
import locationIcon from "../../images/footer/location.png";
import axios from "axios";
import WhatsappIcon from "../../images/WhatsApp_icon.png";
import Dark_mood from "../../images/landing page images/navbar images/dark.png";
import light_mode from "../../images/landing page images/navbar images/light.png";
import { useState,useEffect } from "react";
import { useTheme } from "../../context";
import ScrollToTop from "../../components/ScrollToTop";
import toast from "react-hot-toast";
const Contact = () => {
const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [phone,setPhone]=useState("")
  const [message,setMessage]=useState("")

// console.log(name ,email,phone,message)
  const data={
    name:name,
    email:email,
    phone:phone,
    message:message
  }
// console.log(data)
 const FromSubmit = () => {
  axios
   .post("http://admin.lightsoft.ch/api/Contact/Contact",data)
   .then((res) => {
      console.log(res);
      toast.success("message send success")
      setName("")
      setEmail("")
      setPhone("")
      setMessage("")
    })
   .catch((err) => {
      console.log(err);
      
    });

 }
 const [WebData, setData]=useState({})
 useEffect(()=>{
 axios.get("http://admin.lightsoft.ch/api/Company/GetCompanyData")
 .then(response =>{
   setData(response.data.data)
 })
 .catch((error)=>{console.log(error)})
 }
,[])



  
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className={`contact ${darkMode ? "dark-mode" : ""}`}>
      <div
        style={{
          backgroundColor: "rgba(0,0,0,.9)",
          width: "100%",
          height: "132px",
        }}
      >
    
        <ScrollToTop />
      </div>
      <div className="container">
        <h2 className="contact-title">Kontact</h2>
       <a href="https://wa.me/41766025572" target="_blank">
       <img src={WhatsappIcon} className="WhatsappIcon" alt="" />
       </a>
        <section className="contact-section">
          <div className="content">
            <div className="text">
              <img src={logo} alt="" />
              <p style={{ marginRight: "30px" }}>
                <i class="fa-solid fa-location-dot"></i>{WebData.city}, <br />{" "}
               {WebData.postbox} {WebData.name}
              </p>
              <p style={{ marginRight: "30px" }}>
                <i className="fas fa-phone"></i>tel: +{WebData.phone1}
              </p>
              <p>
                <i className="fas fa-envelope"></i>
               {WebData.email}
              </p>
              <p>
                <i className="fa-brands fa-whatsapp icon"></i> WhatsApp : +{WebData.phone2}
              </p>
              <div className="social">
                <div className="social-media-icon">
                  <a href="www.facebook.com">
                    <img src={faceIcon} alt="" />
                  </a>
                  <a href="www.instagram.com">
                    <img src={instagramIcon} alt="" />
                  </a>
                  <a href="www.twitter.com">
                    <img src={XIcon} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="form">
              <form>
                <h3>Kontact</h3>
                <div className="box">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(e) =>setName(e.target.value)}
                    required
                    placeholder="Name"
                  />
                </div>
                <div className="box">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={phone}
                    onChange={(e) =>setPhone(e.target.value)}
                    required
                    placeholder="Phone"
                  />
                </div>
                <div className="box">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) =>setEmail(e.target.value)}
                    required
                    placeholder="E-mail"
                  />
                </div>
                <div className="box">
                  <textarea
                    name="Message"
                    value={message}
                    placeholder="Message"
                    onChange={(e) =>setMessage(e.target.value)}
                    id=""
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
                <button onClick={()=>FromSubmit()} type="button">Senden</button>
              </form>

              
            </div>
          </div>
          <div className="location">
            <img src={locationIcon} alt="" />
            <p>{WebData.city}, {WebData.postbox} {WebData.name}</p>
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
        </section>
      </div>
   
    </div>
  );
};

export default Contact;
