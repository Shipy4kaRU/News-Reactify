const URL = "https://newsapi.org/v2/top-headlines";
const KEY = "076e01274d3a4eaba29760429047080c";

export const getNews = async (
  category = "technology",
  news_number = 30,
  page_number = 1
) => {
  try {
    const response = await fetch(
      URL +
        `?category=${category}` +
        `&pageSize=${news_number}` +
        `&page=${page_number}` +
        "&apiKey=" +
        KEY
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(`СЛУЧИЛАСЬ ОШИБКА: ${err}`);
  }
};
