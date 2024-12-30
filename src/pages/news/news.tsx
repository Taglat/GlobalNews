import { useEffect, useState } from "react";
import cl from "./styles.module.css";
import NewsBanner from "../../components/news-banner/news-banner";
import { fetchNews } from "../../api/apiNews";
import { NewsItemType } from "../../types";
import NewsList from "../../components/news-list/news-list";
import Skeleton from "../../components/skeleton/skeleton";

const News = () => {
  const [news, setNews] = useState<NewsItemType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAndSetNews = async () => {
      try {
        setIsLoading(true);
        const response = await fetchNews();
        setNews(response.news);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAndSetNews();
  }, []);

  return (
    <div className={cl.news}>
      {isLoading ? <Skeleton count={1} type="banner" /> : (news.length > 0 && <NewsBanner item={news[0]} />)}

      {isLoading ? <Skeleton count={10} type="item" /> : <NewsList news={news} /> }
    </div>
  );
};

export default News;
