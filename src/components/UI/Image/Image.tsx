import { FC } from "react";
import styles from "./Image.module.css";

interface ImageProps {
  image: string;
}

const Image: FC<ImageProps> = ({ image }) => {
  return (
    <div className={styles.wrapper}>
      {image ? (
        <img src={image} alt="news picture" className={styles.image} />
      ) : null}
    </div>
  );
};

export default Image;
