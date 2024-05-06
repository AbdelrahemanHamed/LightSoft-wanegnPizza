
   import "./ang.css"
   import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
// import { useCart } from "../../context/CartCtx";
// import { jwtDecode } from "jwt-decode";
// import Cookies from "js-cookie";
// import toast from "react-hot-toast";
const Ang = (props) => {
const [ange ,setAnge]=useState([])
// const {
//   handleAddToCart,
//   handleDecrementFromCart,
//   handleRemoveFromCart,
//   cart,
//   cart2,
//   totalPrice,
 
 
// } = useCart();
const imageUlr=`http://admin.lightsoft.ch/Images/`;

useEffect(()=>{
  axios.get("http://admin.lightsoft.ch/api/Offer/GetAllOffers")
 .then((res)=>{
    setAnge(res.data.data)
    console.log(res.data.data,"red")
  })
 .catch((err)=>{
    console.log(err)
  })
},[1])
// const SendData=(id)=>{
//   if(Cookies.get("userInfo")){
//     const data = { items: [{ productId:id, quantity: 1,}] };
//   const decoded=jwtDecode(Cookies.get("userInfo"));
//   axios.post(`http://admin.lightsoft.ch/api/Cart/cart/add?userId=${decoded.Id}`,data)
//   .then((response) => {
//     toast.success("Added successfully");
//   })
//   .catch((error) => {
//     console.log(error);
//     toast.error("Failed to add to cart");
//   });
//   }
// }
  
  return (
   <>
      

      {/* display data from api */}
<div className="total-ange">
{ange.map((item)=>{
  return(
    <div key={item.id}>
     <Link 
    to='/angDetails'
    >
     <div className={props.white?"pizza-card white":"pizza-card"}>
       <div className="inner">
         <img src={imageUlr+item.photoName} alt="" />
       </div>
       <div className="data-ang">
           <h1 className="data-ang-title">{item.name}</h1>
           <h3>Nr.50</h3>
           <p>{item.description1}</p>
           <p>{item.description2}</p>
           <p>{item.description3}</p>
           <span> {item.price.toString().split('.')[0]}<sup>{item.price.toString().split('.')[1]}</sup><s>CHF</s> </span>
            {/* <button onClick={()=>{
              SendData(item)
              handleAddToCart(item)
            }} className="Ang-btn">Add To Cart</button> */}
           
         </div>
     </div>
     </Link> 
    </div>
  )
})}
</div>


   </>

  )
}

export default Ang