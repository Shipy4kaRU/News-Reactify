import styles from "./NewsList.module.css";
import NewsItem from "../NewsItem/NewsItem";
import withSkeleton from "../../helpers/hocs/withSkeleton.jsx";

const NewsList = ({ news }) => {
  return (
    <ul className={styles.list}>
      {news.map((el, index) => {
        if (!el.urlToImage) return;
        return <NewsItem key={index} item={el} />;
      })}
    </ul>
  );
};

const NewsListWithSkeleton = withSkeleton(NewsList, "banner", 1);

export default NewsListWithSkeleton;
