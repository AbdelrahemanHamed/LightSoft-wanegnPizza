import React, { Component, useEffect, useState } from "react";
import SliderMain from "react-slick";

import Item from "../Prodects/Item";
import "slick-carousel/slick/slick.css";
import "./slider.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { useTheme } from "../../context";
import { useCart } from "../../context/CartCtx";
import toast from "react-hot-toast";
function CenterMode() {
  const {
    handleAddToCart,
    handleDecrementFromCart,
    handleRemoveFromCart,
    cart,
    totalPrice,
  } = useCart();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides to show at a time
    slidesToScroll: 1,
    // fade:true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  const imageUlr=`http://admin.lightsoft.ch/Images/`;
  const { darkMode } = useTheme();
  const [homeData,setHomeData]=useState()


  useEffect(()=>{
    axios.get("http://admin.lightsoft.ch/api/Product/GetHomeProducts")
    .then(response =>{ console.log(response.data.data,); setHomeData(response.data.data)} )
    .catch(error =>{console.log(error)})
  
  },[])
 
  const SendData=(id)=>{
    if(Cookies.get("userInfo")){
      const data = { items: [{ productId:id, quantity: 1,}] };
    const decoded=jwtDecode(Cookies.get("userInfo"));
    axios.post(`http://admin.lightsoft.ch/api/Cart/cart/add?userId=${decoded.Id}`,data)
    .then((response) => {
      toast.success("Added successfully");
    })
    .catch((error) => {
      console.log(error);
      toast.error("please login to continue");
    });
    }
  }
  return (
    <div className="slider-container-main">
      <SliderMain {...settings}>
      
        {homeData?.map((item2)=>{

    return(
      
   <div>
       <div key={item2.id} className={darkMode ? "contaner-hamed dark-mode" : "contaner-hamed"}>
      <img src={`${imageUlr}${item2.photoName}`} style={{ width: "153px" }} alt="" />
      <div>
        <p className="title">{item2?.name}</p>
        <p className="description">{item2?.description}</p>
        <p className="price">{item2?.price} chf</p>
        <i
          className="fa-solid fa-plus plus"
          onClick={() => {
            handleAddToCart(item2);
            SendData(item2.id)
      
          }}
        ></i>
      </div>
    </div>  
   </div>
 
    )
   })}

  
        
      </SliderMain>
    </div>
  );
}

export default CenterMode;
