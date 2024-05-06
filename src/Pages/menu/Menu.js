import React, { useEffect, useState } from "react";
import styles from "./Menu.module.css";

// import snacksImg from "../../images/menu images/snacks.png";
// import { useTheme } from "../../contexts/ThemeContext";
import {
  Link,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
// import Header from "../../components/Header";
import { CATEGORIES, SUB_CAT } from "../../utils/menuList";
import Navbar from "../../components/Navbar/Navbar";
import Pagination from "../../components/Menu/Pagination";
import Footer from "../../components/Footer/Footer";
import { useCart } from "../../context/CartCtx";
import toast from "react-hot-toast";
import { useTheme } from "../../context";
import Sidebar from "../../components/Menu/Sidebar";
import SubCatMenu from "../../components/Menu/SubCatMenu";
import SubCatItems from "../../components/Menu/SubCatItems";
import Search from "../../components/Menu/Search";

const itemsPerPage = 8;
export default function Menu() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { id } = useParams();
  const subCatId = searchParams.get("sub-cat");
  const { pathname } = useLocation();
  const [category, setCategory] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [subCategoryList, setSubCategoryList] = useState([]);
  const [totalItemCount, setTotalItemCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isNew, setIsNew] = useState(false);
  console.log(category);
  console.log(subCategories);
  console.log(subCategoryList);
  const { darkMode } = useTheme();
  // handle cart
  const { handleAddToCart, cart, totalPrice } = useCart();
  console.log(totalPrice);
  console.log(cart);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const totalPages = Math.ceil(subCategoryList.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = subCategoryList.slice(startIndex, endIndex);
  // console.log(currentItems);
  useEffect(() => {
    if (id) {
      const category = CATEGORIES.find((el) => el.id === +id);
      setCategory(category);
      setSubCategories((prev) => category.subCat);
      setSubCategoryList(
        (prev) => SUB_CAT.find((el) => el.id === +subCatId).products
      );
      setCurrentPage(1);
      setIsNew(true);
    } else {
      navigate("/menu/1?sub-cat=1");
    }
  }, [id, subCatId]);

  return (
    <div
      className={`${styles["menu-container"]} ${
        darkMode ? styles["dark-mode"] : styles["white-mode"]
      }`}
    >
      <Navbar />
      <div className={styles.image}>
        <h2 className={styles.title}>
          Men<span>ü</span>
        </h2>
      </div>
      <div className={styles["section-container"]}>
        {/* left section  */}

        <Sidebar categories={CATEGORIES} id={id} />
        {/* right section  */}
        <div className={styles["sub-categories-container"]}>
          <div
            style={{
              marginTop: "86px",
              marginLeft: "44px",
            }}
          >
            <Search />
          </div>
          <SubCatMenu
            category={category}
            subCategories={subCategories}
            subCatId={subCatId}
          />
          {/* items  */}

          <SubCatItems
            currentItems={currentItems}
            handleAddToCart={handleAddToCart}
          />
        </div>
      </div>
      {/* pagination  */}
      {totalPages > 1 && (
        <div style={{ marginTop: "-60px" }}>
          <Pagination
            totalPages={totalPages}
            isNew={isNew}
            setIsNew={setIsNew}
            onPageChange={handlePageChange}
          />
        </div>
      )}
      <Footer />
    </div>
  );
}
