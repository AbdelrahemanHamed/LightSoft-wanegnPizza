import React, { useEffect, useState } from "react";
import "./item.css";
import { useTheme } from "../../context";
import { useCart } from "../../context/CartCtx";
import toast from "react-hot-toast";
import axios from "axios";
const Item = (props) => {
  const {
    handleAddToCart,
    handleDecrementFromCart,
    handleRemoveFromCart,
    cart,
    totalPrice,
  } = useCart();






  const { darkMode } = useTheme();

  return (
<div>
   
</div>
  );
};

export default Item;
