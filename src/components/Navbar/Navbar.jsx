import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Logo from "../../images/footer/logo.png";
import logo from "../../images/landing page images/navbar images/Logo22-removebg-preview.png"
import { Link, NavLink } from "react-router-dom";
import Cart from "../../components/Cart/Cart";
import { useCart } from "../../context/CartCtx";
import user from "../../images/userimage.png";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Navbar = ({ setLogin, setLogout,ShowLogin }) => {
  const [Menu, setMenu] = useState("home");
  const [isActive, setIsActive] = useState(false);
  const [isChange, setIsChange] = useState(true);
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate("");
  if (Menu === "Reservation") 
  {
  
    window.scrollTo(0, 3650);
    console.log(Menu);
  
  }
const [showUser ,setShowUser] = useState(false);
const [account,setAccount] = useState(false);
const handelShow=()=>{
  setShowUser(!showUser);
}
  const { cart } = useCart();

  const handleShowCart = () => {
    setShowCart(true);
    
  };
  const handleCloseCart = () => {
    setShowCart(false);
    
  };
 
  const handleClick = () => {
    setIsActive(!isActive); 
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY < 700) {
      setIsChange(true);
    } else {
      setIsChange(false);
    }
  });

 
  const [show,setShow]=useState(false)
const USerLogin=()=>{
  if(Cookies.get('userInfo')) {
    setShow(true)
   navigate("/userProfile");
   console.log(Cookies.get('userInfo'));
   setAccount(true)
  }
  else{
    setLogin(true)
  }
}
useEffect(()=>{
  if(ShowLogin || showCart){
    document.body.style.overflowY="hidden"
  }
  else{
    document.body.style.overflowY=""
  }
})


const [rev,setRev]=useState(false)

  return (
    <>
      <div className={isChange ? "navbar" : "navbar navbar-change"} >
        <div className="container">
          <img className="logo" src={logo} alt="logo" />
          <nav>
            <ul className={isActive && "active-bar"}>
              <li onClick={()=>{ setIsActive(false)}}>
                <NavLink
                  to="/"
                
                >
                  Home
                </NavLink>
              </li>
              <li onClick={()=>{ setIsActive(false)}}>
                <NavLink
                  to="/new"
                 
                >
                  Menü{" "}
                </NavLink>
              </li>
              <li onClick={()=>{ setIsActive(false)}}>
                <NavLink
                
                  to="reservation"
                >
                  Reservation
                </NavLink>
              </li>
              <li onClick={()=>{ setIsActive(false)}}>
                <NavLink
                  to="/angebote"
                 
                >
                  Angebote & Gustscheine{" "}
                </NavLink>
              </li>
              <li>
              <button onClick={()=>{!show?USerLogin():handelShow();}} className="all-service">
          {account? "Account":"Login"}
      </button>
              </li>
              <li onClick={()=>{ setIsActive(false)}}>
                <NavLink to="/contact" className="">
                  Kontakt
                </NavLink>
              </li>

              <li>
                <i
                  onClick={handleShowCart}
                  className="fa-solid fa-cart-shopping car"
                >
                  <span className="length">
                    {cart.length > 0 ? cart.length : "0"}
                  </span>
                </i>
              </li>
            </ul>
          </nav>
          <div
            onClick={() => {
              handleClick();
            }}
            className="fas fa-bars"
            id="bars"
          ></div>
        </div>
      </div>
      {showCart && (
        <Cart showCart={showCart} handleCloseCart={handleCloseCart} />
      )}
      
     


      <div className={`show-logo ${showUser?"show-logo2":""}`}>
    {show &&
        <div>
          <button
          className="viewProfile fa-solid fa-right-from-bracket"
          onClick={() => {
           setLogout(true)
           setShow(false)
           setAccount(false)
           setShowUser(false)
           navigate('/')
          }}
           
      ></button>
        </div>
      }
        <div>
        <button
            className="btn-login"
            onClick={() => {
             navigate('/userProfile')
                
            }}
          >
            <img src={user} alt="" />
          </button>
        </div>
    </div>
       
         



  

    </>
  );
};

export default Navbar;
