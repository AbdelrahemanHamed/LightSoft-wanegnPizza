import React from "react";
import { useState } from "react";
import "./edit.css";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import axios from "axios";
import FormData from "form-data";
import toast from "react-hot-toast";
const Edit = ({ setEdit }) => {
  const [Token, setToken] = useState();

  const [username, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [Street, setStreet] = useState("");
  const [salute, setSalute] = useState("");
  const [postBox, setPostBox] = useState("");
  let data = {
    UserName: username,
    PhoneNumber: phone,
    Email: Email,
    Street: Street,
    Salute: salute,
    City: city,
    PostBox: postBox,
  };

  const formData =new FormData();
  formData.append('UserName',username );
  formData.append('PhoneNumber',phone );
  formData.append('Email',Email );
  formData.append('Street',Street );
  formData.append('Salute',salute );
  formData.append('City',city );
  formData.append('PostBox',postBox );

  const sendData = () => {
    if(Cookies.get("userInfo"))
{
    const decodedToken = jwtDecode(Cookies.get("userInfo"));
    axios.post(`http://admin.lightsoft.ch/api/Auth/EditAccount/${decodedToken.Id}`,
  
    formData
  )
    .then(res=>{
      console.log(res.data)
      Cookies.set("userInfo", res.data.token)
      toast.success("Account updated successfully")
      setUserName("")
      setPhone("")
      setEmail("")
      setSalute("")
      setStreet("")
      setCity("")
      setPostBox("")
    }).catch(error=>{
        console.log(error)
        console.log(data)
    })
} else {
      alert("please login");
    }
  };
  return (
    <div className="edit">
      <div className="edit-user">
        <h2 className="edit-title">Bearbeite dein Profil</h2>
        <div
          className="fas fa-close close"
          onClick={() => {
            setEdit(false);
          }}
        ></div>
      
          <div className="box" style={{display:"flex" ,gap:"10px"}}>
            
            <input
              type="text"
              value={salute}
              placeholder="salute"
              style={{width:"20%"}}
              onChange={(e) => {
                setSalute(e.target.value);
              }}
            />
            <input
              type="text"
              value={username}
              placeholder="Nutzername"
              style={{width:"70%"}}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              required
            />
            
          </div>
          <div className="box">
            <input
            placeholder="Telefonnummer"
              type="text"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              required
            />
          </div>

          <div className="box">
            <input
              type="email"
              value={Email}
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required="true"
            />
          </div>
          <div className="box">
            <div className="inputs" >
              <input
                type="text"
                placeholder="PostBox"
                style={{ width: "32%" }}
                value={postBox}
                onChange={(e) => {
                  setPostBox(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="City"
                style={{ width: "32%" }}
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                }}
                name=""
                id=""
              />
              <input
              type="text"
              value={Street}
              style={{ width: "32%" }}
              placeholder="Street"
              onChange={(e) => {
                setStreet(e.target.value);
              }}
            />
            </div>
          </div>
        

          <button
            // type="button"
            onClick={() => {
              sendData();
            }}
          >
          Jetzt bearbeiten
          </button>
   
      </div>
    </div>
  );
};

export default Edit;
