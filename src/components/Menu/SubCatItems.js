import React from "react";
import styles from "./SubCatItems.module.css";
import toast from "react-hot-toast";
import add from "../../images/menu images/add.png";

const SubCatItems = ({ currentItems, handleAddToCart }) => {
  return (
    <div className={styles["subcategory-items"]}>
      {currentItems.map((product) => (
        <div className={styles["subcategory-item"]}>
          <div className={styles["product-image"]}>
            <img src={product.img} alt="" />
          </div>
          <div className={styles.content}>
            <div>
              <h3 className={styles["product-title"]}>{product.title}</h3>
              <p className={styles["product-desc"]}>{product.desc}</p>
            </div>
            <div className={styles.price}>
              <h3>{product.price} CHF </h3>
              <img
                src={add}
                alt=""
                onClick={() => {
                  handleAddToCart(product);
                  toast.success("added successfully");
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubCatItems;
