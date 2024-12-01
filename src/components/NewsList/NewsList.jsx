import styles from "./NewsList.module.css";
import NewsItem from "../NewsItem/NewsItem";

const NewsList = ({ news }) => {
  return (
    <ul className={styles.list}>
      {news.map((el, index) => {
        return <NewsItem key={index} item={el} />;
      })}
    </ul>
  );
};

export default NewsList;
