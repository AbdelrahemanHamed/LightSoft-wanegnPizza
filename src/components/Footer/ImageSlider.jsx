import React from "react";
import SliderNew from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../images/slider-footer-image/food1.png";
import image2 from "../../images/slider-footer-image/food2.png";
import image3 from "../../images/slider-footer-image/food3.png";
import image4 from "../../images/slider-footer-image/food4.png";
import "./imageslider.css";
const ImageSlider = () => {
  const settings = {
    className: "Slider-center-image",
    dots: false,
    centerMode: true,
    centerPadding: "0",
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides to show at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-image">
      <h1 className="gallery-title">Galerie</h1>
      <SliderNew {...settings}>
        <div className="one">
          <img src={image1} alt="" />
        </div>
        <div className="one">
          <img src={image2} alt="" />
        </div>
        <div className="one">
          <img src={image3} alt="" />
        </div>
        <div className="one">
          <img src={image4} alt="" />
        </div>
      </SliderNew>
    </div>
  );
};

export default ImageSlider;
