import styles from "./NewsList.module.css";
import NewsItem from "../NewsItem/NewsItem.tsx";
import withSkeleton from "../../helpers/hocs/withSkeleton.tsx";
import { useDispatch } from "react-redux";
import { currentNewsSliceActions } from "../../store/currentNewsSlice.ts";
import { FC } from "react";
import { News } from "../../types/interfaces.ts";

interface NewsListProps {
  news: News[];
}

const NewsList: FC<NewsListProps> = ({ news }) => {
  const dispatch = useDispatch();

  const onSelectHandler = (index: number) => {
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

const NewsListWithSkeleton = withSkeleton({
  Component: NewsList,
  type: "banner",
  count: 1,
});

export default NewsListWithSkeleton;
