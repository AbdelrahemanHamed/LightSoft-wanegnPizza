import React from "react";
import "./contact.css";
import fourthSectionBG1 from "../../images/landing page images/fourth sectoin images/Capcicum 1.png";
import fourthSectionBG2 from "../../images/landing page images/fourth sectoin images/Clover 1.png";
import fourthSectionBG3 from "../../images/landing page images/fourth sectoin images/Gobi 1.png";
import fourthSectionBG4 from "../../images/landing page images/fourth sectoin images/Haldi 1.png";
import { useTheme } from "../../context";
import { Element } from "react-scroll";
import  ScrollToTop from "../ScrollToTop"
import { useState ,useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
const Contact = ({ reservationRef }) => {
  const { darkMode } = useTheme();
  const [name, setName] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");

const Sended=()=>{
 if(name=="" && telefone=="" && email=="")
  {
    toast.error("Bitte füllen Sie alle Felder aus");
  }
  else{
    toast.success("Ihre Reservierung wurde gesendet ");
  }
}
useEffect(()=>{
  if (window.location=="/reservation")
    {
      console.log("Reservation")
    }
},[])

  return (
    <div ref={reservationRef}>
      <section
        id="reservation"
        className={
          !darkMode
            ? "main-section fourth-section dark-mode"
            : "main-section fourth-section"
        }
      >
      
        <div className="container" ref={reservationRef}>
          <form>
            <h3>Reservation</h3>
            <p>
              Buchen Sie Online Oder. <br /> Rufen Sie uns unter +41 55 460 33
              66 <br />
              zwischen 9:30 - 22:00 Uhr
            </p>
            <div className="form-control">
              <input type="text" id="name" value={name} placeholder="Name" required  />
            </div>
            <div className="form-control">
              <input type="tel" id="telefone" value={telefone} placeholder="Telefon" required />
            </div>
            <div className="form-control">
              <input type="email" id="email" value={email} placeholder="Email" required />
            </div>
            <div className="form-control">
              <input
              required
                type="text"
                id="date&timer"
                placeholder="Anzaani Personen"
                value={date}
              />
            </div>
            <div className="form-control">
              <input type="date" id="data" placeholder="Datum" required />
              <input type="time" style={{width:"200px"}} id="date&timer" required placeholder="Uhrzeit" />
            </div>
            <button type="button" onClick={()=>Sended()} className="btn-reservation">senden</button>
          </form>

          <img className="bg1" src={fourthSectionBG1} alt="Clover" />
          <img className="bg2" src={fourthSectionBG2} alt="Haldi" />
          <img className="bg3" src={fourthSectionBG3} alt="Capcicum" />
          <img className="bg4" src={fourthSectionBG4} alt="Gobi" />
        </div>
      </section>
      <ScrollToTop/>
    </div>
  );
};

export default Contact;
