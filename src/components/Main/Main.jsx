import styles from "./Main.module.css";
import Hero from "../Hero/Hero";
import { useEffect, useState } from "react";
import { getNews } from "../../API/apiNews";
import NewsList from "../NewsList/NewsList";

const Main = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews();
        console.log(response);
        setNews(response.articles);
      } catch (err) {
        console.log(err);
      }
    };
    fetchNews(0);
  }, []);

  return (
    <div className={styles.main}>
      {news.length > 0 && <Hero item={news[0]} />}
      {news.length > 0 && <NewsList news={news} />}
    </div>
  );
};

export default Main;
