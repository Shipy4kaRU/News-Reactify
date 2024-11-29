import styles from "./Main.module.css";
import Hero from "../Hero/Hero";
import { useEffect, useState } from "react";
import { getNews } from "../../API/apiNews";
import NewsList from "../NewsList/NewsList";
import Skeleton from "../Skeleton/Skeleton";

const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true);
        const response = await getNews();
        console.log(response);
        setIsLoading(false);
        setNews(response.articles);
      } catch (err) {
        console.log(err);
      }
    };
    fetchNews(0);
  }, []);

  return (
    <div className={styles.main}>
      {news.length > 0 && !isLoading ? (
        <Hero item={news[0]} />
      ) : (
        <Skeleton count={1} type="banner" />
      )}
      {news.length > 0 && !isLoading ? (
        <NewsList news={news} />
      ) : (
        <Skeleton count={5} type="item" />
      )}
    </div>
  );
};

export default Main;
