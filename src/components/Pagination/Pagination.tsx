import { FC } from "react";
import styles from "./Pagination.module.css";

interface HeaderProps {
  totalPages: number;
  onNext: () => void;
  onPrev: () => void;
  onCurrent: (page: number) => void;
  currentPage: number;
}

const Header: FC<HeaderProps> = ({
  totalPages,
  onNext,
  onPrev,
  onCurrent,
  currentPage,
}) => {
  return (
    <div className={styles.pagination}>
      <div>
        <button
          disabled={currentPage <= 1}
          className={styles.arrow}
          onClick={onPrev}
        >
          {"<"}
        </button>
      </div>
      {[...Array(totalPages)].map((_, index) => {
        return (
          <button
            key={index}
            className={styles.pageNumber}
            disabled={index + 1 === currentPage}
            onClick={onCurrent.bind(this, index + 1)}
          >
            {index + 1}
          </button>
        );
      })}
      <div>
        <button
          disabled={currentPage >= totalPages}
          className={styles.arrow}
          onClick={onNext}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Header;
