import styles from "./Categories.module.css";
import { NEWS_CATEGORIES } from "../../constants/contants.ts";
import { FC } from "react";

interface CategoriesProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const Categories: FC<CategoriesProps> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
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
