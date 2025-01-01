import { useEffect, useState } from "react";
import cl from "./styles.module.css";
import NewsBanner from "../../components/news-banner/news-banner";
import { fetchNews, fetchCategories } from "../../api/apiNews";
import { CategoriesType, NewsItemType } from "../../types";
import NewsList from "../../components/news-list/news-list";
import Pagination from "../../components/pagination/pagination";
import Categories from "../../components/categories/categories";
import { useDebounce } from "../../hooks/useDebounce";
import Search from "../../components/search/search";

const News = () => {
  const [news, setNews] = useState<NewsItemType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const pageSize = 10;
  
  const [categories, setCategories] = useState<(CategoriesType)[]>([] as (CategoriesType)[]);
  const [selectedCategory, setSelectedCategory] = useState<CategoriesType>('All');

  const [keywords, setKeywords] = useState("");
  const debouncedKeywords = useDebounce({value: keywords, delay: 1500});  

  const fetchAndSetNews = async () => {
    try {
      setIsLoading(true);
      const response = await fetchNews({
        page_number: currentPage,
        page_size: pageSize,
        category:  selectedCategory === 'All' ? null : selectedCategory,
        keywords: debouncedKeywords,
      });
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
  }, [currentPage, selectedCategory, debouncedKeywords]);

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

      <NewsBanner item={news[0]} isLoading={isLoading} />

      <Search keywords={keywords} setKeywords={setKeywords} />
      <NewsList news={news} isLoading={isLoading} />
    
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
