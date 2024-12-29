import Search from "../Search/Search.tsx";
import styles from "./Header.module.css";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useDebounce from "../../helpers/hooks/useDebounce.ts";
import { ThemeContext } from "../../providers/ThemeProvider.tsx";

const Header = () => {
  const context = useContext(ThemeContext);
  const [keywords, setKeywords] = useState<string>("");
  const [isSearch, setIsSearch] = useState<boolean>(false);
  useDebounce(keywords, 1500);
  if (context === undefined) {
    throw new Error("SomeComponent must be used within a ThemeProvider");
  }
  const [theme, setTheme] = context;

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const onSearchHandler = (text: string) => {
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
        <Link to="/home" className={styles.logo}>
          <img
            src="src\assets\logo.svg"
            width={103}
            height={57.3}
            className={styles["logo-icon"]}
            alt="logo"
          />
        </Link>

        <div className={styles[`search-container`]}>
          <Search
            onSearch={onSearchHandler}
            onShow={onShowSearchHandler}
            onHide={onHideSearchHandler}
            keywords={keywords}
            showClass={isSearch && "show"}
          />

          <button className={styles.search} onClick={onToggleSeacrh}>
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles["search-icon"]}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.1415 4.5623C15.5924 7.01317 15.5924 10.9868 13.1415 13.4377C10.6907 15.8886 6.71701 15.8886 4.26613 13.4377C1.81526 10.9868 1.81526 7.01317 4.26613 4.5623C6.71701 2.11142 10.6907 2.11142 13.1415 4.5623ZM15.2195 14.1039C17.77 10.8563 17.5488 6.1411 14.5558 3.14808C11.3238 -0.0838428 6.08384 -0.0838427 2.85192 3.14808C-0.380007 6.38001 -0.380007 11.62 2.85192 14.8519C5.84494 17.8449 10.5601 18.0662 13.8077 15.5156C13.8209 15.5304 13.8345 15.5449 13.8486 15.559L18.5302 20.2406C18.9207 20.6311 19.5539 20.6311 19.9444 20.2406C20.3349 19.85 20.3349 19.2169 19.9444 18.8263L15.2629 14.1448C15.2487 14.1307 15.2342 14.117 15.2195 14.1039Z"
                fill="currentColor"
              />
            </svg>
          </button>

          <button className={styles.theme} onClick={changeTheme}>
            {theme === "light" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={`size-6 ${styles.icon}`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`size-6 ${styles.icon}`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            )}
          </button>
        </div>
        {/* <p className={styles.date}>{formatDate(new Date())}</p> */}
      </header>
    </div>
  );
};

export default Header;
