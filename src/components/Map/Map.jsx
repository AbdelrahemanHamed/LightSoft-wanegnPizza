import React from "react";
import "./map.css";
const Map = ({ darkMode }) => {
  return (
    <div>
      <div className={!darkMode ? "dark-mode" : "container1"}>
       
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10845.192112178946!2d8.894814!3d47.191179!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ac9f21b004d51%3A0xa0638e9a28a0dded!2sWangen%20Pizza%20kebab!5e0!3m2!1sen!2sus!4v1712258068752!5m2!1sen!2sus"
          scrolling="none"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
