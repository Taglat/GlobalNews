import { useEffect, useState } from "react";
import cl from "./styles.module.css";
import NewsBanner from "../../components/news-banner/news-banner";
import { fetchNews } from "../../api/apiNews";
import { NewsItemType } from "../../types";
import NewsList from "../../components/news-list/news-list";
import Skeleton from "../../components/skeleton/skeleton";
import Pagination from "../../components/pagination/pagination";

const News = () => {
  const [news, setNews] = useState<NewsItemType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const pageSize = 10;

  const fetchAndSetNews = async () => {
    try {
      setIsLoading(true);
      const response = await fetchNews({page_number: currentPage, page_size: pageSize});
      setNews(response.news);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAndSetNews();
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  }

  return (
    <div className={cl.news}>
      {isLoading ? <Skeleton count={1} type="banner" /> : (news.length > 0 && <NewsBanner item={news[0]} />)}

      <Pagination 
        totalPages={totalPages}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        currentPage={currentPage}
      />

      {isLoading ? <Skeleton count={10} type="item" /> : <NewsList news={news} /> }
    </div>
  );
};

export default News;
