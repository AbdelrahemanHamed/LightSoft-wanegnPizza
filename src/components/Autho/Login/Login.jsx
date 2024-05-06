import React, { useEffect, useState } from "react";
import "./login.css";
import { useTheme } from "../../../context";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {jwtDecode} from 'jwt-decode';
import Cookies from 'js-cookie';
const Login = ({ setLogin, setLogout }) => {
  const navigate = useNavigate();
  const [currentState, setCurrentState] = useState("Login");
  const [UserToken, setToken] = useState(null);
  // global
  const { darkMode } = useTheme();
  const [username, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [city, setCity] = useState("");
  const [Street, setStreet] = useState("");
  const [salute, setSalute] = useState("");
  const [postBox, setPostBox] = useState("");

const [showPassword, setShowPassword] = useState(false)
const handelPAssword=()=>{
  setShowPassword(!showPassword)
}
  
console.log("login")

  const data = {
    username: username,
    PhoneNumber: phone,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
    street: Street,
    salute: salute,
    city: city,
    postBox: postBox,
  };
  const data2 = {
    password: password,
    email: email,
   
  };

  

  const SendData = () => {
    if (currentState != "Login") {
      if (password != confirmPassword) {
        toast.error("password not confirmed");
      } else {
        axios
          .post(
            "http://admin.lightsoft.ch/api/Auth/Register",data)
          .then((response) => {
            toast.success("Das Konto wird aktiviert");
            setLogin(false);
            setCurrentState("Login");
          })
          .catch((error) => {
            toast.error("Bitte versuchen Sie es noch einma");
            console.log(error)
            
       
          
          });
  
      }
    } else {
     
      axios
        .post("http://admin.lightsoft.ch/api/Auth/Login",data2)
        .then((response) => {
          console.log(response.data.message);
          toast.success("Benutzer hat sich erfolgreich angemeldet ");
          const decodedToken = jwtDecode(response.data.token);
          setToken(decodedToken);
          Cookies.set('userInfo', response.data.token);
          navigate("/userProfile");
          setLogin(false);
          setLogout(false);
       
        })
        .catch(error=> {
          toast.error("E-Mail nicht bestätigt")
          console.log(error);
        })
    }
  };

 const [forget ,setForget]=useState(false)
const handelCheck =()=>{
  setForget(!forget)
}
 const FOrgetPassword =(email)=>{
  let encodedEmailAddress =email.replace(/@/g, "%40");
  axios.post(`http://admin.lightsoft.ch/api/Auth/ForgetPassword/${encodedEmailAddress}`)
  .then(response=>{
    toast.success("response.data.message")
    console.log(email)
  })
  .catch(error=>{
    toast.error("Geben Sie eine ungültige E-Mail-Adresse ein")
    console.log(error)
    console.log(encodedEmailAddress)
  })

 }
console.log(salute)

  return (
    <div className="login">
      {!forget ?<>
        <form className={`login-container ${darkMode && "dark-mode"}`} action="">
        <div className="title">
          <h2>{currentState}</h2>
          <i
            onClick={() => {
              setLogin(false);
            }}
            style={{ cursor: "pointer" }}
            className="fa-solid fa-close"
            alt=""
          />
        </div>
        <div className="inputs">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input
              type="text"
              placeholder="Nutzername"
              required
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          )}
           {currentState === "Login" ? (
            <></>
          ) : (
            <div class="radio-inputs">
  <label class="radio">
    <input type="radio" name="radio" checked=""/>
    <span class="name" style={{fontSize:"18px"}}>salute</span>
  </label>
  <label class="radio">
    <input type="radio" value={"Mr"} onChange={(e)=>{setSalute(e.target.value)}} name="radio"/>
    <span class="name">Mr</span>
  </label>
      
  <label class="radio">
    <input type="radio" value={"Mrs"} onChange={(e)=>{setSalute(e.target.value)}} name="radio"/>
    <span class="name">Mrs</span>
  </label>
</div>
          )}
{currentState === "Login" ? (
            <></>
          ) : (
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Telefonnummer"
              required
            />
          )}

          <input
            type="email"
            placeholder="E-Mail"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <input
            type={showPassword?"text":"password"}
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
         <i class={showPassword?"fa-solid fa-eye":"fa-solid fa-eye-slash"} id="passShow" onClick={()=>{handelPAssword()}}></i>
         {currentState === "Login" &&<p onClick={()=>{
            handelCheck();
          }} className="forget-pass">Forget Password?</p>}
          {currentState === "Login" ? (
            <></>
          ) : (
           <>
            <input
              type={showPassword?"text":"password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="confirm Password"
              required
            />
            <i class={showPassword?"fa-solid fa-eye":"fa-solid fa-eye-slash"} id="passShow" onClick={()=>{handelPAssword()}}></i>
            
           </>
          )}
          {currentState === "Login" ? (
            <></>
          ) : (
            <input
              type="text"
              value={Street}
              onChange={(e) => setStreet(e.target.value)}
              placeholder="Street"
            
            />
          )}
         

          {currentState === "Login" ? (
            <></>
          ) : (
            <>
              <input
                type="text"
                placeholder="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />{" "}
              <input
                type="text"
                value={postBox}
                onChange={(e) => setPostBox(e.target.value)}
                placeholder="postBox"
                required
              />
            </>
          )}
        </div>
        <button onClick={SendData} type="button">
          {currentState === "Sign up" ? "Create Account" : "Login"}
        </button>

        {currentState === "Login" ? (
          <p className="create">
            Create a new account?{" "}
            <span
              onClick={() => {
                setCurrentState("Sign up");
              }}
            >
              Click here
            </span>{" "}
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => {
                setCurrentState("Login");
              }}
            >
              Login here
            </span>{" "}
          </p>
        )}
      </form>
      </>: <form className={`login-container ${darkMode && "dark-mode"}`} action="">
      <div className="title">
          <h2>forget password</h2>
          <i
            onClick={() => {
              setLogin(false);
            }}
            style={{ cursor: "pointer" }}
            className="fa-solid fa-close"
            alt=""
          />
        </div>
<div className="inputs">
  <input
    type="email"
    placeholder="E-Mail"
    value={email}
    required
    onChange={(e) => setEmail(e.target.value)}
  />
  <button type="button" onClick={()=>{FOrgetPassword(email)}}>Rest Password</button>
  </div>
      </form> }
    </div>
  );
};

export default Login;















