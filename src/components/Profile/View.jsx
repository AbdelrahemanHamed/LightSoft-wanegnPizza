import React from 'react'
import "./view.css"
import userImage from "../../images/user image.png"
import UserProduct from './UserProduct'
import { useState,useEffect } from 'react'
import {jwtDecode} from 'jwt-decode';
import Cookies from 'js-cookie';
import Edit from './Edit'
import axios from 'axios'
import { error } from 'jquery'
import WhatsappIcon from "../../images/WhatsApp_icon.png";
import Dark_mood from "../../images/landing page images/navbar images/dark.png";
import light_mode from "../../images/landing page images/navbar images/light.png";
import { useTheme } from '../../context'
import PassEdit from './PassEdit'
const View = () => {
    const [userToken, setToken] = useState("");
    const { darkMode, toggleDarkMode } = useTheme();
 const [password, setPassword] = useState("");
 const [confirmPassword, setConfirmPassword] = useState("");

 const [ShowEdit,setEdit]=useState(false)
const [passEdit,setPassEdit]=useState(false)
 const handleShow=()=>{
     setEdit(!ShowEdit)
 }
 const handlePassShow=()=>{
     setPassEdit(!passEdit)
 }

 const GetAccountData=(id)=>{
if(Cookies.get("userInfo"))
{
    const decodedToken = jwtDecode(Cookies.get("userInfo"));
    console.log(decodedToken.Id)
    axios.post(`http://admin.lightsoft.ch/api/Auth/GetAccountData/${decodedToken.Id}`)
    .then(res=>{
      setToken(res.data.record)
    }).catch(error=>{
        console.log(error)
    })
}
else{
    alert()
}
 }
 useEffect(()=>{
    GetAccountData()
   
  
 },[])
 useEffect(()=>{
    if(ShowEdit || passEdit){
      document.body.style.overflowY="hidden"
      
    }
    else{
      document.body.style.overflowY=""
    
    }
  })
  
  


  return (
   <>
    <div className={ShowEdit?"scroll":""}>
      <div className={`view-page ${darkMode?"dark-mode":""}`}>
        <div className={`container`}>
        <a href="https://wa.me/41766025572" target="_blank">
       <img src={WhatsappIcon} className="WhatsappIcon" alt="" />
       </a>
            <div className="info">
            <img src={userImage} alt="" />
                <h2><span>Hallo </span>,{userToken.salute+" "+userToken.userName}</h2>
                 
            </div>
            <button onClick={()=>{handlePassShow()}} className="pass_edit">Edit Password</button>
            <button onClick={()=>{handleShow()}} className='user-btn'><i class="fa-solid fa-user-pen"></i>bearbeiten</button>
            <div className="data">
                <div className="box">
                    <label htmlFor="">Nutzername </label>
                    <input type="text" readOnly value={userToken.userName}  />
                </div>
                <div className="box adresse">
                    <label htmlFor="">Adresse </label>
                   <div className="inputs">
                   <input type="text" readOnly style={{width:"111px"}} value={userToken.postBox}  />
                    <input type="text" readOnly style={{width:"270px"}} value={userToken.city}  name="" id="" />
                   </div>
                </div>
                
                <div className="box">
                    <label htmlFor="">Telefonnummer </label>
                    <input type="text" readOnly value={userToken.phoneNumber}   />
                </div>
                <div className="box">
                    <label htmlFor="">E-Mail </label>
                    <input type="email" readOnly value={userToken.email}   />
                </div>
            </div>
           
        </div>
      
    </div>
    {/* <div className={`product-lasts ${darkMode?"dark-mode":""} `}>
        <h1><span>Letzte</span>Bestellungen</h1>
            <div className="products">
                <UserProduct/>
                <UserProduct/>
                <UserProduct/>
            </div>
          
    </div>
     */}
        {ShowEdit ? <Edit setEdit={setEdit}/>:""}
        {passEdit? <PassEdit setPassEdit={setPassEdit}/>:""}
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
    </div>
   
   </>
   
  );
}

export default View