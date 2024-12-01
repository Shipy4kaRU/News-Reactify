import styles from "./Main.module.css";
import Hero from "../Hero/Hero";
import { useEffect, useState } from "react";
import { getNews } from "../../API/apiNews";
import NewsList from "../NewsList/NewsList";
import Skeleton from "../Skeleton/Skeleton";
import Pagination from "../Pagination/Pagination";
import Categories from "../Categories/Categories";
import { NEWS_CATEGORIES } from "../constants/contants";
import { NUMBER_PAGE_NEWS } from "../constants/contants";
import Search from "../Search/Search";
import { useDebounce } from "../../helpers/hooks/useDebounce";

let totalPages = null;

const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState(NEWS_CATEGORIES[0]);
  const [keywords, setKeywords] = useState("");
  const debouncedKeywords = useDebounce(keywords, 1500);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true);
        const response = await getNews(
          category,
          NUMBER_PAGE_NEWS,
          currentPage,
          debouncedKeywords
        );
        console.log(response);
        setIsLoading(false);
        totalPages = Math.ceil(response.totalResults / NUMBER_PAGE_NEWS);
        setNews(response.articles);
      } catch (err) {
        console.log(err);
      }
    };

    fetchNews(currentPage);
  }, [currentPage, category, debouncedKeywords]);

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

  const setCategoryHandler = (category) => {
    setCategory(category);
  };

  const onSearchHandler = (text) => {
    setKeywords(text);
  };

  return (
    <main className={styles.main}>
      <Search onSearch={onSearchHandler} keywords={keywords} />

      <Categories
        selectedCategory={category}
        setSelectedCategory={setCategoryHandler}
      />

      {news.length > 0 && !isLoading ? (
        <Hero item={news[0]} />
      ) : (
        <Skeleton count={1} type="banner" />
      )}

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onNext={handleNextPage}
        onPrev={handlePrevPage}
        onCurrent={handleCurrentPage}
      />

      {news.length > 0 && !isLoading ? (
        <NewsList news={news} />
      ) : (
        <Skeleton count={5} type="item" />
      )}

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onNext={handleNextPage}
        onPrev={handlePrevPage}
        onCurrent={handleCurrentPage}
      />
    </main>
  );
};

export default Main;
