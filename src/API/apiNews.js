const URL = "https://newsapi.org/v2/top-headlines?sources=techcrunch";
const KEY = "076e01274d3a4eaba29760429047080c";

export const getNews = async () => {
  try {
    const response = await fetch(URL + "&apiKey=" + KEY);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(`СЛУЧИЛАСЬ ОШИБКА ${err}`);
  }
};
