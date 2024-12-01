import styles from "./Search.module.css";

const Search = ({ onSearch, keywords }) => {
  return (
    <div className={styles.search}>
      <input
        type="text"
        className={styles.input}
        value={keywords}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search"
      />
    </div>
  );
};

export default Search;
