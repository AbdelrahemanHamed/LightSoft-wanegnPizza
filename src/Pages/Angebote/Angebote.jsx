import React from "react";
import Hero from "./Hero";
import WhatsappIcon from "../../images/WhatsApp_icon.png";

import ScrollToTop from "../../components/ScrollToTop";

const Angebote = () => {
  return (
    <div className="angebote">
      <a href="https://wa.me/41766025572" target="_blank">
        <img src={WhatsappIcon} className="WhatsappIcon" alt="" />
      </a>
      <Hero />
     


      <ScrollToTop />
    </div>
  );
};

export default Angebote;
