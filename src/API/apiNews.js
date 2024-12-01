const BASE_URL = "https://newsapi.org/v2/top-headlines";
const KEY = "076e01274d3a4eaba29760429047080c";

export const getNews = async (
  category = "technology",
  news_number = 30,
  page_number = 1,
  searchText = ""
) => {
  const url = new URL(BASE_URL);
  url.searchParams.append("category", category);
  url.searchParams.append("pageSize", news_number);
  url.searchParams.append("page", page_number);
  url.searchParams.append("apiKey", KEY);
  url.searchParams.append("q", searchText);
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(`СЛУЧИЛАСЬ ОШИБКА: ${err}`);
  }
};
