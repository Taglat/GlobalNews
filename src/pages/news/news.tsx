import { useEffect, useState } from "react";
import cl from "./styles.module.css";
import NewsBanner from "../../components/news-banner/news-banner";
import { fetchNews } from "../../api/apiNews";
import { NewsItemType } from "../../types";
import NewsList from "../../components/news-list/news-list";

const News = () => {
  const [news, setNews] = useState<NewsItemType[]>([]);

  useEffect(() => {
    const fetchAndSetNews = async () => {
      try {
        const response = await fetchNews();
        setNews(response.news);
      } catch (e) {
        console.log(e);
      }
    };

    fetchAndSetNews();
  }, []);

  return (
    <div className={cl.news}>
      {news.length > 0 ? (
        <NewsBanner item={news[0]} />
      ) : (
        <p>No news available.</p>
      )}

      <NewsList news={news} />
    </div>
  );
};

export default News;
