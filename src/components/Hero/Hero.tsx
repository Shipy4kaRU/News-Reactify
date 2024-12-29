import { formatTimeAgo } from "../../helpers/formatTimeAgo.ts";
import withSkeleton from "../../helpers/hocs/withSkeleton.tsx";
import Image from "../UI/Image/Image.tsx";
import styles from "./Hero.module.css";
import { News } from "../../types/interfaces.ts";
import { FC } from "react";

interface HeroProps {
  item: News;
}

const Hero: FC<HeroProps> = ({ item }) => {
  let content = <Image image={item.urlToImage} />;

  if (window.innerWidth >= 1440) {
    content = (
      <div className={styles["image-desc"]}>
        <Image image={item.urlToImage} />
        <p className={styles.content}>{item.content}</p>
      </div>
    );
  }

  return (
    <div className={styles.hero}>
      {content}
      <p className={styles.title}>{item.description}</p>
      <p className={styles.extra}>
        {formatTimeAgo(item.publishedAt)} by {item.author}
      </p>
    </div>
  );
};

const HeroWithSkeleton = withSkeleton({
  Component: Hero,
  type: "banner",
  count: 1,
});

export default HeroWithSkeleton;
