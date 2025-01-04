import cl from './styles.module.css';
import { useDebounce } from '../../hooks/useDebounce.ts';
import { NewsBannerWithSkeleton as NewsBanner } from '../news-banner/news-banner.tsx';
import NewsList  from '../news-list/news-list.tsx';
import Pagination from '../pagination/pagination.tsx';
import NewsFilters from '../news-filters/news-filters.tsx';
import { TOTAL_PAGES } from '../../constants/constants.ts';
import { useGetNewsQuery } from '../../store/services/newsApi.ts';
import { useAppDispatch, useAppSelector } from '../../store/index.ts';
import { setFilters } from '../../store/slices/newsSlice.ts';

const NewsByFilters = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.news.filters);
  const news = useAppSelector((state) => state.news.news);

  const debouncedKeywords = useDebounce({
    value: filters.keywords,
    delay: 1500,
  });

  const { isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeywords,
  });

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      dispatch(
        setFilters({ key: "page_number", value: filters.page_number + 1 })
      );
    }
  };

  const handlePreviousPage = () => {
    if (filters.page_number > 1) {
      dispatch(
        setFilters({ key: "page_number", value: filters.page_number - 1 })
      );
    }
  };

  const handlePageClick = (pageNumber: number) => {
    dispatch(setFilters({ key: "page_number", value: pageNumber }));
  };

  return (
    <section className={cl.section}>
      <h2>🌎 Big News</h2>
      <NewsBanner item={news?.[0] || null} isLoading={isLoading} />

      <div className={cl.newsList}>
        <NewsFilters filters={filters} />

        <NewsList news={news || []} isLoading={isLoading} />

        <Pagination
          totalPages={TOTAL_PAGES}
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
