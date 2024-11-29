import styles from "./NewsList.module.css";
import NewsItem from "../NewsItem/NewsItem";

const NewsList = ({ news }) => {
  return (
    <ul className={styles.list}>
      {news.map((el) => {
        return <NewsItem key={el.id} item={el} />;
      })}
    </ul>
  );
};

export default NewsList;
