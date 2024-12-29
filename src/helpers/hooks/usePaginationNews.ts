import { useCallback, useState } from "react";

export const usePaginationNews = (initValue, totalPages) => {
  const [currentPage, setCurrentPage] = useState(initValue);

  const handleNextPage = useCallback(() => {
    if (currentPage < totalPages) {
      setCurrentPage((prevState) => prevState + 1);
    }
  }, [currentPage, totalPages, setCurrentPage]);

  const handlePrevPage = useCallback(() => {
    if (currentPage > 1) {
      setCurrentPage((prevState) => prevState - 1);
    }
  }, [currentPage, setCurrentPage]);

  const handleCurrentPage = (value) => {
    setCurrentPage(value);
  };

  return {
    currentPage,
    handleNextPage,
    handlePrevPage,
    handleCurrentPage,
  };
};
