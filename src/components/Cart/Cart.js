import React, { useEffect, useState } from "react";
import styles from "./Cart.module.css";
import garbage from "../../images/cart/garbage.png";
import { createPortal } from "react-dom";
import { useCart } from "../../context/CartCtx";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useCheckout } from "../../context/checkoutCtx";
import paymentWhiteImage from "../../images/checkout page images/PaymentWhite.png";
import locationWhiteImage from "../../images/checkout page images/LocationWhite.png";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
const Cart = ({ showCart, handleCloseCart }) => {
  const navigate = useNavigate();
  const imageUlr = `http://admin.lightsoft.ch/Images/`;
  const {
    addCheckout,
    setCoupon,
    GetCheckout,
    Coupon,
    setName,
    setStreet,
    setCity,
    setPostBox,
    setTime,
    name,
    street,
    city,
    postBox,
    TimeUtils,
  } = useCheckout();
  const {
    handleAddToCart,
    handleDecrementFromCart,
    decrementFromCart,
    handleRemoveFromCart,
    cart,
    totalPrice,
    clearCart,
    dataDisplay,
    RemoveFromCart,
    AddData,
  } = useCart();

  const handleNavigate = () => {
    handleCloseCart();
    navigate("/new");
  };
  const handleCheckout = () => {
    addCheckout(cart);

    navigate("/checkout");
  };

  const SendData = (id) => {
    if (Cookies.get("userInfo")) {
      const data = { items: [{ productId: id, quantity: 1 }] };
      const decoded = jwtDecode(Cookies.get("userInfo"));
      axios
        .post(
          `http://admin.lightsoft.ch/api/Cart/cart/add?userId=${decoded.Id}`,
          data
        )
        .then((response) => {
          toast.success("Erfolgreich hinzugefügt");
          console.log(data, "red");
        })
        .catch((error) => {
          console.log(error);
          toast.error("Das Hinzufügen zum Warenkorb ist fehlgeschlagen");
        });
    }
  };

  return createPortal(
    <>
      <div className={styles["overlay"]} onClick={handleCloseCart}></div>
      <div className={styles["cart-modal"]}>
        <div className={styles["cart-wrapper"]}>
          <div className={styles["cart-container"]}>
            <div className={styles["close"]} onClick={handleCloseCart}>
              x
            </div>
            <div className={styles["main-title"]}>Basket</div>
            <div className={styles["products-container"]}>
              {cart.length > 0 ? (
                cart.map((product) => (
                  <div className={styles["product-content"]}>
                    <div className={styles["product-main-info"]}>
                      <div className={styles["count"]}>
                        {product?.quantity}
                        <span>x</span>
                      </div>
                      <div className={styles["img"]}>
                        <img
                          src={imageUlr + product.product.photoName}
                          alt="pizza "
                        />
                      </div>
                      <div className={styles["product-info"]}>
                        <h5 className={styles["product-title"]}>
                          {product.product.name}
                        </h5>
                        <p className={styles["product-desc"]}>
                          {product.product.description}
                        </p>
                      </div>
                    </div>
                    <div className={styles["price-control"]}>
                      <div className={styles["controls"]}>
                        <button
                          onClick={() => {
                            {
                              product.quantity > 1
                                ? decrementFromCart(product.product.id)
                                : toast.error("the minimum quantity is one");
                            }
                          }}
                        >
                          -
                        </button>
                        <button className={styles["remove"]}>
                          <img
                            src={garbage}
                            alt=""
                            onClick={() => {
                              RemoveFromCart(product.id);
                            }}
                          />
                        </button>

                        <button
                          onClick={() => {
                            SendData(product.product.id);
                            handleAddToCart(product.product);
                          }}
                        >
                          +
                        </button>
                      </div>
                      {/* <p className={styles["price"]}>CHF {+product.price}</p> */}
                      <p className={styles["price"]}>
                        CHF {+product.product.price}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <>
                  <div className={styles["empty"]}>
                    Empty Cart, go to our menu page and choose{" "}
                  </div>
                  <button
                    className={styles["navigate"]}
                    onClick={handleNavigate}
                  >
                    Go to Menu
                  </button>
                </>
              )}
            </div>
            {cart.length > 0 && (
              <>
                <div className={styles["total"]}>
                  <p>Total:</p>
                  <p>{totalPrice} CHF</p>
                </div>
                <br />
                <div className={styles["flex"]}>
                  <br />

                  <div className={styles["lief-box"]}>
                    <h2>Lieferadresse</h2>
                    <img
                      // src={isDarkTheme ? locationWhiteImage : locationBlackImage}
                      src={locationWhiteImage}
                      alt="location"
                    />
                    <div className={styles["box"]}>
                      <input
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                        type="text"
                        value={name}
                        placeholder="Name"
                        className="large-input"
                      />
                    </div>
                    <div className={styles["box"]}>
                      <input
                        onChange={(e) => setStreet(e.target.value)}
                        type="text"
                        value={street}
                        placeholder="Street"
                        className="large-input"
                      />
                    </div>
                    <div className={styles["box2"]}>
                      <input
                        type="text"
                        value={postBox}
                        style={{ width: "30%" }}
                        placeholder="postBox"
                        onChange={(e) => {
                          setPostBox(e.target.value);
                        }}
                      />
                      <input
                        type="text"
                        value={city}
                        style={{ width: "50%" }}
                        placeholder="City"
                        onChange={(e) => {
                          setCity(e.target.value);
                        }}
                      />
                    </div>
                    <div className={styles["box2"]}>
                      <input
                        type="text"
                        value={TimeUtils}
                        style={{ marginLeft: "-70px", width: "50%" }}
                        onChange={(e) => {
                          setTime(e.target.value);
                        }}
                        placeholder="Time"
                      />
                      <label>Uhr</label>
                    </div>
                  </div>
                  <div className={styles["coupon-box"]}>
                    <div className={styles["coupon-title"]}>
                      <img src={paymentWhiteImage} alt="payment" width={45} />
                      <h2>Coupon?</h2>
                    </div>
                    <div className={styles["coupon-input"]}>
                      <input
                        type="text"
                        value={Coupon}
                        onChange={(e) => {
                          setCoupon(e.target.value);
                        }}
                        placeholder="XXXX-XXXX-XXXX"
                      />
                    </div>
                  </div>
                </div>
                {/* <Link to="/checkout"> */}
                <button
                  className={styles["order"]}
                  onClick={() => {
                
                     handleCloseCart();
                    GetCheckout();
                     navigate("/checkout");
                  }}
                >
                  weiter
                </button>
                {/* </Link> */}
              </>
            )}
          </div>
        </div>
      </div>
    </>,
    document.body
  );
};

export default Cart;
