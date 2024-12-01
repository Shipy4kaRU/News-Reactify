import styles from "./Main.module.css";
import Hero from "../Hero/Hero";
import { useEffect, useState } from "react";
import { getNews } from "../../API/apiNews";
import NewsList from "../NewsList/NewsList";
import Skeleton from "../Skeleton/Skeleton";
import Pagination from "../Pagination/Pagination";

let totalPages = null;

const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchNews = async (currentPage) => {
      try {
        setIsLoading(true);
        const response = await getNews("technology", 10, currentPage);
        console.log(response);
        setIsLoading(false);
        totalPages = Math.ceil(response.totalResults / 10);
        setNews(response.articles);
      } catch (err) {
        console.log(err);
      }
    };

    fetchNews(currentPage);
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevState) => prevState + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevState) => prevState - 1);
    }
  };

  const handleCurrentPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={styles.main}>
      {news.length > 0 && !isLoading ? (
        <Hero item={news[0]} />
      ) : (
        <Skeleton count={1} type="banner" />
      )}

      <Pagination
        totalPages={totalPages}
        onNext={handleNextPage}
        onPrev={handlePrevPage}
        onCurrent={handleCurrentPage}
      />

      {news.length > 0 && !isLoading ? (
        <NewsList news={news} />
      ) : (
        <Skeleton count={5} type="item" />
      )}
    </div>
  );
};

export default Main;
