import styles from "./Pagination.module.css";

const Header = ({ totalPages, onNext, onPrev, onCurrent }) => {
  return (
    <div className={styles.pagination}>
      <div>
        <button className={styles.arrow} onClick={onPrev}>
          {"<"}
        </button>
      </div>
      {[...Array(totalPages)].map((_, index) => {
        return (
          <button
            key={index}
            className={styles.pageNumber}
            onClick={onCurrent.bind(this, index + 1)}
          >
            {index + 1}
          </button>
        );
      })}
      <div>
        <button className={styles.arrow} onClick={onNext}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Header;
