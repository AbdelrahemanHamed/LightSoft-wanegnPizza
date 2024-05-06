import React, { useEffect, useState } from "react";
import "./sliderAng.css";
import imageCard from "../../images/Angebote image/sliderImage.png";
import Slider from "react-slick";
import RigthArrow from "../../images/Angebote image/rightArrow.png";
import leftArrow from "../../images/Angebote image/LeftArrow.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import CenterMode from "../../components/slide-footer/Slider";

const SliderAng = () => {
 

  const [AngeBootData,setAngeData]=useState([])
  const imageUlr=`http://admin.lightsoft.ch/Images/`;
  useEffect(()=>{
    axios.get("http://admin.lightsoft.ch/api/TodayBonus/GetAllTodayBonus")
    .then(res=>{
      console.log(res.data.data,"anebooot")
      setAngeData(res.data.data)
    })
  },[])
  var settings = {
    className:"ange-slider",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    
    autoplay:true,
   slidesToScroll: 1,
    initialSlide: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className="slider-container">
      <Slider {...settings}>
      {AngeBootData.map((ange)=>{
  return(
   <div>
     <div className="card-ang">
    <div className="image-ang">
      <img src={imageUlr+ange.photoName} alt="" />
    </div>
    <div className="text-ang">
      <h2 className="Title">{ange.name}</h2>
      <p>{ange.description}</p>
      <span>{ange.price} <s style={{color:"#555",fontSize:"14px"}}>Chf</s> </span>
    </div>
  </div>
   </div>
  )
})}

      </Slider>
    </div>
  
    

    </>
  );
};

export default SliderAng;


// {AngeBootData.map((ange)=>{
//   return(
//     <div className="card-ang">
//     <div className="image-ang">
//       <img src={imageUlr+ange.photoName} alt="" />
//     </div>
//     <div className="text-ang">
//       <h2 className="Title">{ange.name}</h2>
//       <p>{ange.description}</p>
//       <span>{ange.price}</span>
//     </div>
//   </div>
//   )
// })}