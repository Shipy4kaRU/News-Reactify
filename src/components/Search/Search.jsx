import styles from "./Search.module.css";

const Search = ({ onSearch, keywords, showClass, onShow, onHide }) => {
  return (
    <div className={`${styles.search} ${styles[showClass]}`}>
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
