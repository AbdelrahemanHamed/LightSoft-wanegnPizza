import React, { useEffect, useRef, useState } from "react";
import "./menu-v1.css";
import menuPageBG1 from "../../images/menu images/pexels-vincent-rivaud-2147491-removebg-preview 1.png";
import menuPageBG2 from "../../images/menu images/pexels-pixabay-39069-removebg-preview 2.png";
import menuPageBG3 from "../../images/landing page images/fourth sectoin images/Capcicum 1.png";
import addToCartWhiteIcon from "../../images/detailed menu page images/add-to-cart-white.png";
import light_mode from "../../images/landing page images/navbar images/light.png";
import Dark_mood from "../../images/landing page images/navbar images/dark.png";
import black_plus from "../../images/menu images/plus.png";
import WhatsappIcon from "../../images/WhatsApp_icon.png";

import {
  Link,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Pagination from "../../components/Menu/Pagination";
import Footer from "../../components/Footer/Footer";
import { useCart } from "../../context/CartCtx";
import toast from "react-hot-toast";
import { useTheme } from "../../context";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
const itemsPerPage = 8;

export default function Menu() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { id } = useParams();
  const subCatRef = useRef();
  const subCatId = searchParams.get("sub-cat");
  const scroll = searchParams.get("s");
  const { pathname } = useLocation();
  const [category, setCategory] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [subCategoryList, setSubCategoryList] = useState([]);
  const [totalItemCount, setTotalItemCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isNew, setIsNew] = useState(false);
  const {
    handleAddToCart,
    handleDecrementFromCart,
    handleRemoveFromCart,
    cart,
    cart2,
    totalPrice,
   
   
  } = useCart();
  const [productsByCategory,setProductsByCategory]=useState([])
  const [category1, setCategory1]=useState([])
const [current ,setCurrent]=useState(0)
const [current2 ,setCurrent2]=useState(0)
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
const imageUlr=`http://admin.lightsoft.ch/Images/`;
  const products =productsByCategory.filter((product)=>+product?.subCategoryId==+subCatId)
  const totalPages = Math.ceil(products?.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = products?.slice(startIndex, endIndex);
  
  
  useEffect(()=>{
      axios.get("http://admin.lightsoft.ch/api/Category/GetAllCategorys")
      .then((res)=>{
          setCategory1(res.data.data)
         
      })
  },[1])



  useEffect(() => {
    if (!scroll) subCatRef.current.scrollIntoView();
  }, [id, subCatId]);
  const { darkMode, toggleDarkMode } = useTheme();


const [count ,setCount]=useState(0)


  useEffect(()=>{
 GetAllProductsByCategory()

  },[])

     
    const GetAllProductsByCategory =(id)=>{
       axios.get("http://admin.lightsoft.ch/api/Product/GetAllProducts")
       .then((res)=>{
        setProductsByCategory(res.data.data)
       
       })

    }
    const SendData=(id)=>{
      if(Cookies.get("userInfo")){
        const data = { items: [{ productId:id, quantity: 1,}] };
      const decoded=jwtDecode(Cookies.get("userInfo"));
      axios.post(`http://admin.lightsoft.ch/api/Cart/cart/add?userId=${decoded.Id}`,data)
      .then((response) => {
        toast.success("Erfolgreich hinzugefügt");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Das Hinzufügen zum Warenkorb ist fehlgeschlagen");
      });
      }
    }





  return (
    <div className={`page-container ${darkMode ? "white-mode" : ""}`}>
    <div className="container">
        <div className={`menu-container`}>
    {/* category from api */}
        <div className="categories-container">
            {category1?.map((category,index) => (
              <div
                key={category?.id}
                className={`category-container ${
                  +id === +category?.id ? "active" : ""
                }`}

                onClick={() =>{
                  navigate(`/new/${category?.id}?sub-cat=${category.subCategory[0]?.id}`);
                  setCurrent(index)
                  
                  
                }}
              >
                <h3 className="category-title">{category.name}</h3>

                <div className="category-img">
                  <img src={`${imageUlr}${category?.photoName}`} alt={category.name} />
                </div>
              </div>
            ))}
          </div>
          


{/* subCategories */}

 <div className="subcategory-container" ref={subCatRef}>
            <h3 className="title">{category1[current]?.name}</h3>
            <div className="boxes-container">
            {category1[current]?.subCategory.map((subCat,index) => (
                <div
                  key={subCat?.id}
                  className={`box-container ${
                    +subCat.id===+subCatId && " active"
                  }`}
                  onClick={() =>{
                    navigate(`/new/${category1[current]?.id}?sub-cat=${subCat?.id}`)
                    setCurrent2(subCat.id);
                    
                  }}
                >
                  <p>{subCat.name}</p>
                </div>
              ))}
            </div>
          </div> 
          
     {/* Menu List */}
      
       <div className="menu-list"> 
        {products.map((product)=>{ 
         return (
           
          <div key={product?.id} className="menu-list__item">
          <img src={imageUlr+product.photoName} style={{width:"135px"}}   alt="pizza " />
          <div className="info">
            <h5 className="title">{product.name}</h5>
            <p>{product.description}</p>
          </div>
          <span className="price">CHF {product.price}</span>
          <i className="add-to-cart">
            <img
              onClick={() => {
                SendData(product.id) 
                handleAddToCart(product)
              }}
              src={!darkMode ? addToCartWhiteIcon : black_plus}
              alt="add to cart icon"
            />
          </i>

          <div className="separator"></div>
        </div>
                    

         )
        })}

      {/* {productsByCategory.filter((product)=>product?.subCategoryId==subCatId)} */}
 
         
        </div> 
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
          {/* pagination  */}
          {totalPages > 1 && (
            <Pagination
              totalPages={totalPages}
              isNew={isNew}
              setIsNew={setIsNew}
              onPageChange={handlePageChange}
            />
          )}

          {/* images  */}
          <img className="bg1" src={menuPageBG1} alt="pizza" />
        <img className="bg2" src={menuPageBG2} alt="background img2" />
          <img className="bg3" src={menuPageBG3} alt="pepper" />
        </div>





        {/* <div className="toggle-btn">
          <img
            src={!darkMode ? light_mode : dark_mode}
            alt=""
            className="dark-image-mode"
            onClick={() => {
              toggleDarkMode();
            }}
          />
        
        </div> */}
        <a href="https://wa.me/41766025572" target="_blank">
          <img src={WhatsappIcon} className="WhatsappIcon" alt="" />
        </a>
      </div>
      
    </div>
  );
}
