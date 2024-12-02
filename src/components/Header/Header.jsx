import Search from "../Search/Search";
import styles from "./Header.module.css";
import { useState } from "react";
// import useDebounce from "../../helpers/hooks/useDebounce";

const Header = () => {
  const [keywords, setKeywords] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  // const debouncedKeywords = useDebounce(keywords, 1500);

  const onSearchHandler = (text) => {
    setKeywords(text);
  };

  const onToggleSeacrh = () => {
    setIsSearch((prevState) => !prevState);
  };

  const onShowSearchHandler = () => {
    setIsSearch(true);
  };

  const onHideSearchHandler = () => {
    setIsSearch(false);
  };

  return (
    <div className={styles["header-container"]}>
      <header className={styles.header}>
        <button className={styles.logo}>
          <img
            src="src\assets\logo.svg"
            width={103}
            height={57.3}
            className={styles["logo-icon"]}
            alt="logo"
          />
        </button>

        <div className={styles[`search-container`]}>
          <Search
            onSearch={onSearchHandler}
            onShow={onShowSearchHandler}
            onHide={onHideSearchHandler}
            keywords={keywords}
            showClass={isSearch && "show"}
          />

          <button className={styles.search} onClick={onToggleSeacrh}>
            <img
              src="src\assets\search.svg"
              alt="search"
              width={17}
              height={25}
              className={styles["search-icon"]}
            />
          </button>
        </div>
        {/* <p className={styles.date}>{formatDate(new Date())}</p> */}
      </header>
    </div>
  );
};

export default Header;
