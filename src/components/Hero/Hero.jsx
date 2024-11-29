import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import Image from "../UI/Image/Image";
import styles from "./Hero.module.css";

const Hero = ({ item }) => {
  return (
    <div className={styles.Hero}>
      <Image image={item.urlToImage} />
      <p className={styles.title}>{item.description}</p>
      <p className={styles.extra}>
        {formatTimeAgo(item.publishedAt)} by {item.author}
      </p>
    </div>
  );
};

export default Hero;
