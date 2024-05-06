import { createContext, useContext, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
const defaultVal = [];
export const CheckoutCtx = createContext(defaultVal);

export const useCheckout = () => useContext(CheckoutCtx);

const CheckoutContextProvider = ({ children }) => {
  // const [checkout, setCheckout] = useState([]);

  const [checkout, setCheckout] = useState(null);
  // add to checkout
  const addCheckout = (data) => {
    setCheckout(data);
  };
  // clear checkout
  const clearCheckout = (data) => {
    setCheckout(data);
  };

  const [checkoutData, setCheckoutData] = useState({});
  const [name, setName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [postBox, setPostBox] = useState("");
  const [Coupon, setCoupon] = useState("");
  const [TimeUtils, setTime] = useState("");
  const [Nots, setNots] = useState("");




  const SendOrder = () => {
    if (Cookies.get("userInfo")) {
      const decodedToken = jwtDecode(Cookies.get("userInfo"));
      // console.log(decodedToken.Id, "ffff");
      axios
        .post(
          `http://admin.lightsoft.ch/api/Cart/order`,{

  "userId":decodedToken.Id,
  "name": name,
  "street":street,
  "postBox": postBox,
  "city": city,
  "discountCode": Coupon,
  // "dateAdded": "2024-05-05T10:55:24.395Z",
  "paymentWay": 10,
  // "deliveryDate": "2024-05-05T10:55:24.395Z",
  "deliveryTime": TimeUtils,
  "notes": Nots,
  "isPrinted": true
          })
        .then((res) => {
          console.log(res);
          toast.success("Order Created successfully !");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const GetCheckout = () => {
    if (Cookies.get("userInfo")) {
      const decodedToken = jwtDecode(Cookies.get("userInfo"));
      axios
        .post(
          `http://admin.lightsoft.ch/api/Cart/Checkout?userId=${decodedToken.Id}&DiscountCode=${Coupon}`
        )
        .then((res) => {
          console.log(res.data.data);
          setCheckoutData(res.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <CheckoutCtx.Provider
      value={{
        checkout,
        addCheckout,
        clearCheckout,
        GetCheckout,
        Coupon,
        checkoutData,
        setCoupon,
        setName,
        SendOrder,
        setStreet,
        setCity,
        setPostBox,
        setTime,
        setNots,
        name,
        street,
        city,
        postBox,
        TimeUtils,
        Nots,
      }}
    >
      {children}
    </CheckoutCtx.Provider>
  );
};

export default CheckoutContextProvider;
