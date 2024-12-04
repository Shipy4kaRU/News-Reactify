import styles from "./NewsList.module.css";
import NewsItem from "../NewsItem/NewsItem";
import withSkeleton from "../../helpers/hocs/withSkeleton.jsx";
import { useDispatch } from "react-redux";
import { currentNewsSliceActions } from "../../store/currentNewsSlice";

const NewsList = ({ news }) => {
  const dispatch = useDispatch();

  const onSelectHandler = (index) => {
    dispatch(currentNewsSliceActions.setCurrentNews(index));
  };

  return (
    <ul className={styles.list}>
      {news.map((el, index) => {
        if (!el.urlToImage) return;
        return (
          <NewsItem
            key={index}
            item={el}
            onSelect={onSelectHandler.bind(this, index)}
          />
        );
      })}
    </ul>
  );
};

const NewsListWithSkeleton = withSkeleton(NewsList, "banner", 1);

export default NewsListWithSkeleton;
