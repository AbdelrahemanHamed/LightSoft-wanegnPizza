import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import CartContextProvider from "./context/CartCtx";
import CheckoutContextProvider from "./context/checkoutCtx";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <CheckoutContextProvider>
        <Toaster
        containerStyle={{
          position: 'fixed',
          zIndex:19999991,
          top:"50px",
        }}
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
         
          toastOptions={{

            className: "",
            duration: 5000,
            style: {
              background: "#363636",
              color: "#fff",
            },
            

            // Default options for specific types
            success: {
              duration: 3000,
              theme: {
                primary: "green",
                secondary: "black",
              },
            },
            error: {
              duration: 3000,
              theme: {
                primary: "red",
                secondary: "#fff",
              },
            },
          }}
        />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CheckoutContextProvider>
    </CartContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
