import React, { useEffect } from "react";
import "./checkout.css";
import paymentWhiteImage from "../../images/checkout page images/PaymentWhite.png";
import QR from "../../images/checkout page images/download.png"
import light_mode from "../../images/landing page images/navbar images/light.png";
import dark_mode from "../../images/landing page images/navbar images/dark.png";
import WhatsappIcon from "../../images/WhatsApp_icon.png";
import checkoutImage from "../../images/checkout page images/10219 2.png";
import { useTheme} from "../../context";
import {useCart} from "../../context/CartCtx"
import ScrollToTop from "../../components/ScrollToTop" 
import  {useCheckout} from "../../context/checkoutCtx"
import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export default function Checkout() {
  const { darkMode, toggleDarkMode } = useTheme();

  const { checkoutData,setNots,Nots,SendOrder} = useCheckout();

  const {
    cart,
    totalPrice,
  } = useCart();


  
  return (
    <>
      <div className={`checkout ${darkMode ? "white-mode" : "dark-mode"}`}>
        <div className="container">
          <h1>Kasse</h1>
          <div className="checkout-page-container">
            <div className="checkout-details-left">
           
              <div className="detail-container checkout-container">
                <div>
                <h2>Zahlungsart auswählen</h2>
                <img
                  // src={isDarkTheme ? paymentWhiteImage : paymentBlacksImage}
                  src={paymentWhiteImage}
                  alt="payment"
                />
                <div className="box">
                  <input type="radio" name="check" />
                  <label>TWINT</label>
                </div>
                <div className="box">
                  <input type="radio" name="check" />
                  <label>Barzahlung</label>
                </div>
                </div>
                <img src={QR} className="qr-code" alt=""/>
              </div>
              <div className="nots">
                <textarea value={Nots} onChange={(e)=>{setNots(e.target.value)}} placeholder="Bemerkung">

                </textarea>

              </div>
             
            </div>
            <div className="checkout-right">
              <header>
                <img src={checkoutImage} alt="pizza" />/
                <div className="info">
                  <h3>Wow ! Pizza</h3>
                  <br />
                </div>
              </header>
              <section className="cart-items-container">
                <p className="apply-ur-coupon">
                  <br />
                  <div className="inputs">
                    <input type="checkbox" />
                    <label>
                      {" "}
                      Mit deiner Bestellung erklärst du dich mit unseren
                      Allgemeinen Geschäftsbedingungen und
                      Datenschutzbestimmungen einverstanden.{" "}
                    </label>
                  </div>
                </p>
              </section>
              <section className="bill-details">
                <h3>Rechnungsdetails:</h3>
                <div className="bill-item">
                  Total <span>{checkoutData.cartTotalNumber} Chf</span>
                </div>
              
                <div className="bill-item with-border">
                  {" "}
                  Coupon-Rabatt:{" "}
                  <span style={{ color: "#FFC0C0" }}>{checkoutData.discountValue}</span>
                </div>

              
                <div className="bill-item end-total">
                  {" "}
                  Gesamtsummer: <span>{checkoutData.finalTotalNumber}chf</span>
                </div>
       
                <button type="button" onClick={()=>{SendOrder()}} className="btn-buy">Bestellen</button>
              </section>
            </div>
            <div className="bg-container">
            
            </div>
          </div>
        </div>
        <div className="toggle-btn">
          <img
            src={!darkMode ? light_mode : dark_mode}
            alt=""
            className="dark-image-mode"
            onClick={() => {
              toggleDarkMode();
            }}
          />
        </div>
        <a href="https://wa.me/41766025572" target="_blank">
          <img src={WhatsappIcon} className="WhatsappIcon" alt="" />
        </a>
      </div>
      <ScrollToTop />
    </>
  );
}
