import React from "react";
import styles from "./Search.module.css";
import search from "../../images/menu images/search.png";

const Search = () => {
  return (
    <div className={styles.search}>
      <img src={search} alt="" />
      <input
        type="text"
        className={styles.input}
        placeholder="Suche nach einem Gericht"
      />
    </div>
  );
};

export default Search;
