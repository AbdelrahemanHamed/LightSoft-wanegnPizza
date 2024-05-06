import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";
import Swal from 'sweetalert2'
const defaultVal = [];
export const CartCtx = createContext(defaultVal);

export const useCart = () => useContext(CartCtx);

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
        
  // add to cart






  const handleAddToCart = (product) => {
    // let quantity;
   if( Cookies.get("userInfo")){
    setCart((prevCart) => {
      const newCart = [...prevCart];
      const existedElement = newCart.find((el) => +el.product.id === +product.id);
      if (!existedElement)  {
        newCart.push({product:{ ...product}, quantity: 1});
      } 
      else if (existedElement)
      {
        let newProduct={
          product:{...existedElement.product},
          quantity: existedElement.quantity + 1
        }
      
        // console.log(quantity,"existed product")
 
        const existedElementIndex = newCart.findIndex(
          (el) => +el.product.id === +product.id
        );
        newCart[existedElementIndex] = { ...newProduct };
        // console.log(quantity,"added to cart else")
        
         }
      
      
      return newCart;
    
    });
  
   }
   
   else{
    toast.error("please login to add to cart");
  
   }
  //  return quantity;
  };
const [show,setShow]=useState(false)
// const [dataDisplay,SetDisplay]=useState([])
useEffect(()=>{
  if(Cookies.get("userInfo"))
  {
    const token=Cookies.get("userInfo");
    const decodedToken = jwtDecode(token);
    axios.get(`http://admin.lightsoft.ch/api/Cart/cart?userId=${decodedToken.Id}`)
   .then(res=>{
      console.log(res.data.data,"hhhhhhhhhhhhhhhhhhhhhh")
      setCart(res.data.data)
      console.log(res.data.data)
    })
   .catch(err=>{
      console.log(err)
    })

  }
},[show])

 




 const RemoveFromCart=(id)=>{
  if(id){
    axios.delete(`http://admin.lightsoft.ch/api/Cart/DeleteFromCart?cartItemId=${id}`)
    .then(response => {
      setShow(!show)
      toast.success("Produkt erfolgreich gelöscht ")
    })
    .catch(err => {
      console.log(err)
    })
  }
 }


const decrementFromCart=(id)=>{

  if(Cookies.get("userInfo")){
    const data = { items: [{ productId:id, quantity: -1,}] };
  const decoded=jwtDecode(Cookies.get("userInfo"));
  axios.post(`http://admin.lightsoft.ch/api/Cart/cart/add?userId=${decoded.Id}`,data)
  .then((response) => {
    toast.success("erfolgreich dekrementieren");
    setShow(!show)
  })
  .catch((error) => {
    console.log(error);
    toast.error("Failed to add to cart");
  });
  }
}







  // decrement from cart
  const handleDecrementFromCart = (product) => {
    setCart((prevCart) => {
      const newCart = [...prevCart];
      const existedElement = newCart.find((el) => +el.product.id === +product.product.id);
      const existedElementIndex = newCart.findIndex((el) => +el.product.id === +product.id );
      if (existedElement.quantity > 0) {
        let newProduct={
          product:{...existedElement},
          quantity: existedElement.quantity -1
        }
       
        newCart[existedElementIndex] = { ...newProduct };
      } else {
        newCart.splice(existedElementIndex, 1);
      }
      return newCart;
    
    });
  };
  // remove from cart
  const handleRemoveFromCart = (product) => {
    setCart((prevCart) => {
      const newCart = [...prevCart];

      const existedElementIndex = newCart.findIndex(
        (el) => +el.product.id === +product.id
      );
      newCart.splice(existedElementIndex, 1);

      return newCart;
    });
    RemoveFromCart(product.id)
  };
  // calc total price
  const getTotalPrice = () => {
    let totalPrice;
    totalPrice = cart.map((currentItem) => currentItem.product.price*+currentItem.quantity);
    let result = totalPrice.reduce((total, current) => {
      return +total + +current;
    }, 0);
    setTotalPrice(result);
  };
  // clear cart
  const clearCart = () => {
    setCart([]);
  };
  useEffect(() => {
    getTotalPrice();
  }, [cart]);
  return (
    <CartCtx.Provider
      value={{
        cart,
        handleAddToCart,
        handleDecrementFromCart,
        decrementFromCart,
        handleRemoveFromCart,
        totalPrice,
        clearCart,
       RemoveFromCart,
      
  
      }}
    >
      {children}
    </CartCtx.Provider>
  );
};

export default CartContextProvider;










