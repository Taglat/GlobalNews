import cl from "./styles.module.css";
import NewsBanner from "../../components/news-banner/news-banner";
import { fetchNews, fetchCategories } from "../../api/apiNews";
import NewsList from "../../components/news-list/news-list";
import Pagination from "../../components/pagination/pagination";
import Categories from "../../components/categories/categories";
import { useDebounce } from "../../hooks/useDebounce";
import Search from "../../components/search/search";
import { useFilters } from "../../hooks/useFilters";
import { useFetch } from "../../hooks/useFetch";
import { NewsApiResponse, ParamsType } from "../../types";

const News = () => {
  const totalPages = 10;
  const pageSize = 10;
  
  const {filters, changeFilter} = useFilters({
    page_number: 1,
    page_size: pageSize,
    category: null,
    keywords: ""
  })

  const debouncedKeywords = useDebounce({value: filters.keywords, delay: 1500});

  const { data, isLoading } = useFetch<NewsApiResponse, ParamsType>(fetchNews, {
    ...filters,
    keywords: debouncedKeywords,
  });

  const { data: dataCategories } = useFetch(fetchCategories);

  const handleNextPage = () => {
    if (filters.page_number < totalPages) {
      changeFilter("page_number", filters.page_number + 1);
    }
  };

  const handlePreviousPage = () => {
    if (filters.page_number > 1) {
      changeFilter("page_number", filters.page_number - 1);
    }
  };

  const handlePageClick = (pageNumber: number) => {
    changeFilter("page_number", pageNumber);
  };

  return (
    <div className={cl.news}>
      {dataCategories ? (
        <Categories
          categories={dataCategories.categories}
          selectedCategory={filters.category}
          setSelectedCategory={(category) => changeFilter("category", category)}
        />
      ) : null}

      <NewsBanner item={data?.news?.[0] || null} isLoading={isLoading} />

      <Search keywords={filters.keywords} setKeywords={(keywords) => changeFilter("keywords", keywords)} />
      <NewsList news={data?.news || []} isLoading={isLoading} />
    
      <Pagination 
        totalPages={totalPages}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        currentPage={filters.page_number}
      />
    </div>
  );
};

export default News;
