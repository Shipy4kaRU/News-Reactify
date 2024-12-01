import styles from "./Categories.module.css";
import { newsCategories } from "../../API/apiNews";

const Categories = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className={styles.categories}>
      {newsCategories.map((category) => (
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
