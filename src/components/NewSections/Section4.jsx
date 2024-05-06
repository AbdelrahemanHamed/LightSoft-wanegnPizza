import React, { useEffect, useState } from "react";
import "./section4.css";
import { useTheme } from "../../context";
import axios from "axios";
const Section4 = () => {
  const { darkMode } = useTheme();
  const [WebData, setData]=useState([])
 useEffect(()=>{
 axios.get("http://admin.lightsoft.ch/api/Delivery/GetAllDelivery")
 .then(response =>{
   setData(response.data.data)
   console.log(response.data.data,"data ")
 })
 .catch((error)=>{console.log(error)})
 }
,[])
const middleIndex = Math.ceil(WebData.length / 2);
  const firstHalf = WebData.slice(0, middleIndex);
  const secondHalf = WebData.slice(middleIndex);

  return (
    <div className={`section4 ${!darkMode ? "dark-mode" : ""}`}>
      <div className="container">
        <div className="text-section4">
          <h1>Liefergebiete</h1>
          <p>Mindestbestellwert für Lieferungen</p>
        </div>
        <div className="all-content">
          <div className="wangen-8">
            {firstHalf.map((data)=>{
          return(
            <p key={data.id}>{data.postBox} {data.city}</p>
          )
            })}
           
          </div>
          <div className="Chf line-chf">
          {firstHalf.map((data)=>{
          return(
            <p key={data.id}>ab CHF{data.orderAb}</p>
          )
            })}
         
          </div>
          <div className="wangen-8">
          {secondHalf.map((data)=>{
          return(
            <p key={data.id}>{data.postBox} {data.city}</p>
          )
            })}
          </div>
          <div className="Chf">
          {secondHalf.map((data)=>{
          return(
            <p key={data.id}>ab CHF{data.orderAb}</p>
          )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
