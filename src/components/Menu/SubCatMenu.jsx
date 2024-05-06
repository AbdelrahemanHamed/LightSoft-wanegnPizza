import React from "react";
import styles from "./SubCatMenu.module.css";
import { useNavigate } from "react-router-dom";
const SubCatMenu = ({ category, subCategories, subCatId }) => {
  const navigate = useNavigate();
  return (
    <div className={styles["subcategory-container"]}>
      <h3 className={styles.title}>{category.name}</h3>
      <div className={styles["boxes-container"]}>
        {subCategories.map((subCat) => (
          <div
            key={subCat.id}
            className={`${styles["box-container"]} ${
              +subCat.id === +subCatId && styles.active
            }`}
            onClick={() =>
              navigate(`/menu/${subCat.catId}?sub-cat=${subCat.id}`)
            }
          >
            <p>{subCat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubCatMenu;
