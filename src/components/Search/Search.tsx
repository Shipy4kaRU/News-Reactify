import styles from "./Search.module.css";
import { FC } from "react";

interface SearchProps {
  onSearch: (text: string) => void;
  keywords: string;
  showClass: boolean | string;
  onShow: () => void;
  onHide: () => void;
}

const Search: FC<SearchProps> = ({
  onSearch,
  keywords,
  showClass,
  onShow,
  onHide,
}) => {
  return (
    <div
      className={`${styles.search} ${
        typeof showClass === "string" ? styles[showClass] : ""
      }`}
    >
      <input
        type="text"
        className={styles.input}
        value={keywords}
        onChange={(e) => onSearch(e.target.value)}
        onClick={onShow}
        onBlur={onHide}
        placeholder="Search"
      />
    </div>
  );
};

export default Search;
