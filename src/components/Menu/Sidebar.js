import React from "react";
import styles from "./Sidebar.module.css";
import { useNavigate } from "react-router-dom";

import logo from "../../images/menu images/wangen.png";
import arrow from "../../images/menu images/arrow.png";

const Sidebar = ({ categories, id }) => {
  const navigate = useNavigate();
  return (
    <div className={styles["categories-container"]}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.categories}>
        {categories.map((category) => (
          <div
            className={`${styles.category} ${
              +category.id === +id && styles.active
            }`}
            key={category.id}
            onClick={() =>
              navigate(`/menu/${category.id}?sub-cat=${category.subCat[0].id}`)
            }
          >
            <p className={styles["cat-name"]}>{category.name}</p>
            <div className={styles.arrow}>
              <img src={arrow} alt="arrow" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
