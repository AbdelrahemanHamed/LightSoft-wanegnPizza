import React from 'react'
import "./user_product.css"
import image2 from "../../images/Angebote image/PizzaOffer.png"
import { useTheme } from '../../context'
const UserProduct = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  return (
 <>
    <div className={`user-product ${darkMode?"dark-mode":""}`}>
        <div className="product1">
        <div className="item-user">
           <div className="quantity">
            <h2><span>2</span>X</h2>
           </div>
       <div className="inner2">
         <img src={image2} alt="" />
           <div className="desc">
           <h2 className="data-title">Party pizza & salat angebot</h2>
           <h3>Nr.50</h3>
           <p>1 x Party Pizza 60x40cm nach Wunsch</p>
           <p>1 x gemtschter Salat</p>
           <p>1 x Flasche Cola 1 <s>L</s> </p>
           <span>34.<sup>00</sup> <s>CHF</s> </span>
           </div>
         </div>
     </div>
     <div className="item-user">
           <div className="quantity">
            <h2><span>2</span>X</h2>
           </div>
       <div className="inner2">
         <img src={image2} alt="" />
           <div className="desc">
           <h2 className="data-title">Party pizza & salat angebot</h2>
           <h3>Nr.50</h3>
           <p>1 x Party Pizza 60x40cm nach Wunsch</p>
           <p>1 x gemtschter Salat</p>
           <p>1 x Flasche Cola 1 <s>L</s> </p>
           <span>34.<sup>00</sup> <s>CHF</s> </span>
           </div>
         </div>
     </div>
        </div>
        <div className="line-left"></div>
        <div className="all-data2">
           <div className="data2">
            <h3 className='title'>Date</h3>
            <h3>01 / 04 /2024  16:23</h3>
           </div>
           <div className="data2">
            <h3  className='title'>Adresse</h3>
            <h3>Order Address</h3>
           </div>
           <div className="data2">
            <h3  className='title'>Order id</h3>
            <h3>145687 </h3>
           </div>
           <div className="data2">
            <h3  className='title'>Total</h3>
            <h3>82 <span>CHF</span></h3>
           </div>
        </div>
     
    </div>
       <div className="line-bottom"></div>
 </>

  )
}

export default UserProduct