import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { ThemeProvider } from "./context/index";
import "./App.css";
import Home from "./Pages/Home/Home";
import Checkout from "./Pages/checkout/Checkout";
import Contact from "./Pages/Kontact/Contact";
import Angebote from "./Pages/Angebote/Angebote";
import Menu1 from "./Pages/menu/Menu-v1";
import { useState } from "react";
import { AngDetails } from "./Pages/Angebote-details/AngDetails";
import ImageSlider from "./components/Footer/ImageSlider";
import Cart from "./components/Cart/Cart";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./components/Autho/Login/Login";
import View from "./components/Profile/View";
import { useEffect } from "react";
import Cookies from 'js-cookie';
import { useNavigation } from "react-router-dom";
function App() {
  const [ShowLogin,setLogin]=useState(false)
  const [logout,setLogout]=useState(false)

  useEffect(()=>{
    if(logout){
      Cookies.remove('userInfo');
  }
  },[logout])
  
  return (
    <ThemeProvider>
          {ShowLogin ?<Login setLogin={setLogin} setLogout={setLogout}  logout={logout} />:<></>}
      <div className="App">

        <Navbar setLogin={setLogin} ShowLogin={ShowLogin} logout={logout} setLogout={setLogout} />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/reservation" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          {/* <Route path="/menu/" element={<Navigate to="/menu/1?sub-cat=1" />} />
          <Route path="/menu/:id" element={<Menu />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/angebote" element={<Angebote />} />
          <Route
            path="/new"
            element={<Navigate to="/new/1?sub-cat=1&s=false" />}
          />
          <Route path="/new/:id" element={<Menu1/>} />
          <Route path="/angDetails" element={<AngDetails />} />
          <Route path="/slider" element={<ImageSlider />} />
          <Route path="/cart" element={<Cart />} />


        <Route path="/userProfile" element={<View logout={logout}/>}/>
        </Routes>
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
