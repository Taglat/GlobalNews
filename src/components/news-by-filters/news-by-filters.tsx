import cl from './styles.module.css';
import { fetchNews } from '../../api/apiNews.ts';
import { useDebounce } from '../../hooks/useDebounce.ts';
import { useFetch } from '../../hooks/useFetch.ts';
import { useFilters } from '../../hooks/useFilters';
import { NewsApiResponse, ParamsType } from '../../types/index.ts';
import { NewsBannerWithSkeleton as NewsBanner } from '../news-banner/news-banner.tsx';
import NewsList  from '../news-list/news-list.tsx';
import Pagination from '../pagination/pagination.tsx';
import Search from '../search/search.tsx';
import NewsFilters from '../news-filters/news-filters.tsx';

const NewsByFilters = () => {
  const totalPages = 10;
  const pageSize = 10;

  const { filters, changeFilter } = useFilters({
    page_number: 1,
    page_size: pageSize,
    category: null,
    keywords: "",
  });

  const debouncedKeywords = useDebounce({
    value: filters.keywords,
    delay: 1500,
  });

  const { data, isLoading } = useFetch<NewsApiResponse, ParamsType>(fetchNews, {
    ...filters,
    keywords: debouncedKeywords,
  });

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
    <section className={cl.section}>
      <h2>🌎 Big News</h2>
      <NewsBanner item={data?.news?.[0] || null} isLoading={isLoading} />

      <div className={cl.newsList}>
        <NewsFilters changeFilter={changeFilter} filters={filters} />

        <Search
          keywords={filters.keywords}
          setKeywords={(keywords) => changeFilter("keywords", keywords)}
        />
        <NewsList news={data?.news || []} isLoading={isLoading} />

        <Pagination
          totalPages={totalPages}
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
          handlePageClick={handlePageClick}
          currentPage={filters.page_number}
        />
      </div>
    </section>
  );
};

export default NewsByFilters;
