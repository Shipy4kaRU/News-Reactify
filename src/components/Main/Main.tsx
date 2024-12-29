import styles from "./Main.module.css";
import Hero from "../Hero/Hero";
import { useEffect, useState } from "react";
import { getNews } from "../../API/apiNews";
import NewsList from "../NewsList/NewsList.tsx";
import Pagination from "../Pagination/Pagination.tsx";
import Categories from "../Categories/Categories";
import { NEWS_CATEGORIES } from "../../constants/contants.ts";
import { NUMBER_PAGE_NEWS } from "../../constants/contants.ts";
import { usePaginationNews } from "../../helpers/hooks/usePaginationNews.ts";
import { useSelector } from "react-redux";

let totalPages = null;

const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState(NEWS_CATEGORIES[0]);
  const currentNews = useSelector((state) => state.currentNews.currentNews);

  const { currentPage, handleNextPage, handlePrevPage, handleCurrentPage } =
    usePaginationNews(1, totalPages);

  const debouncedKeywords = useSelector((state) => state.keywords.keywords);

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

  const setCategoryHandler = (category) => {
    setCategory(category);
  };

  return (
    <main className={styles.main}>
      <Categories
        selectedCategory={category}
        setSelectedCategory={setCategoryHandler}
      />

      <Hero isLoading={isLoading} item={news.length > 0 && news[currentNews]} />

      <NewsList news={news} isLoading={isLoading} />

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
