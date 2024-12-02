import styles from "./Categories.module.css";
import { NEWS_CATEGORIES } from "../../constants/contants";

const Categories = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className={styles.categories}>
      {NEWS_CATEGORIES.map((category) => (
        <button
          key={category}
          onClick={setSelectedCategory.bind(this, category)}
          className={
            selectedCategory === category ? styles.active : styles.item
          }
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
