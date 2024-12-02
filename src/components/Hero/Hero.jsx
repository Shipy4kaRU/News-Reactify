import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import withSkeleton from "../../helpers/hocs/withSkeleton.jsx";
import Image from "../UI/Image/Image";
import styles from "./Hero.module.css";

const Hero = ({ item }) => {
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

const HeroWithSkeleton = withSkeleton(Hero, "banner", 1);

export default HeroWithSkeleton;
