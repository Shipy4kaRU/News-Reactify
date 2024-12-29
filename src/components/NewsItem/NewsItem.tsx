import styles from "./NewsItem.module.css";
import { formatTimeAgo } from "../../helpers/formatTimeAgo.ts";
import { FC } from "react";
import { News } from "../../types/interfaces.ts";

interface NewsItemProps {
  item: News;
  onSelect: () => void;
}

const NewsItem: FC<NewsItemProps> = ({ item, onSelect }) => {
  return (
    <li className={styles.item} onClick={onSelect}>
      <div
        className={styles.wrapper}
        style={{ backgroundImage: `url(${item.urlToImage})` }}
      ></div>
      <div className={styles.info}>
        <p className={styles.title}>{item.description}</p>
        <p className={styles.extra}>
          {formatTimeAgo(item.publishedAt)} by {item.author}
        </p>
      </div>
    </li>
  );
};

export default NewsItem;
