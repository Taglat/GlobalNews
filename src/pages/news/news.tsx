import { useEffect, useState } from "react";
import cl from "./styles.module.css";
import NewsBanner from "../../components/news-banner/news-banner";
import { fetchNews, fetchCategories } from "../../api/apiNews";
import { CategoriesType, NewsItemType } from "../../types";
import NewsList from "../../components/news-list/news-list";
import Skeleton from "../../components/skeleton/skeleton";
import Pagination from "../../components/pagination/pagination";
import Categories from "../../components/categories/categories";

const News = () => {
  const [news, setNews] = useState<NewsItemType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const pageSize = 10;
  const [categories, setCategories] = useState<(CategoriesType)[]>([] as (CategoriesType)[]);
  const [selectedCategory, setSelectedCategory] = useState<CategoriesType>('All');

  const fetchAndSetNews = async () => {
    try {
      setIsLoading(true);
      const response = await fetchNews({page_number: currentPage, page_size: pageSize, category:  selectedCategory === 'All' ? null : selectedCategory});
      setNews(response.news);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchAndSetCategories = async () => {
    try {
      const response = await fetchCategories();
      setCategories(["All", ...response.categories]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAndSetNews();
  }, [currentPage, selectedCategory]);

  useEffect(() => {
    fetchAndSetCategories();
  }, [])

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
      <Categories categories={categories} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />

      {isLoading ? <Skeleton count={1} type="banner" /> : (news.length > 0 && <NewsBanner item={news[0]} />)}

      {isLoading ? <Skeleton count={10} type="item" /> : <NewsList news={news} /> }
    
      <Pagination 
        totalPages={totalPages}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        currentPage={currentPage}
      />
    </div>
  );
};

export default News;
