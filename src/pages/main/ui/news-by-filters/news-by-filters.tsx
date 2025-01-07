import cl from "./styles.module.css";
import { useAppDispatch, useAppSelector } from "@/app/appStore";
import { useGetCategoriesQuery } from "@/entities/category/api/categoriesApi";
import { useGetNewsQuery } from "@/entities/news/api/newsApi";
import { setFilters } from "@/entities/news/model/newsSlice";
import { Pagination } from "@/features/pagination";
import { TOTAL_PAGES } from "@/shared/constants/constants";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { NewsList } from "@/widgets/news";
import { NewsFilters } from "@/widgets/news";


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

  const { data } = useGetCategoriesQuery(null);

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
    <section className={`${cl.section} ${cl.newsList}`}>
      <NewsFilters categories={data && data.categories} filters={filters} />
      <Pagination
        totalPages={TOTAL_PAGES}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        currentPage={filters.page_number}
      />
      <NewsList news={news || []} type="item" direction="column" isLoading={isLoading} />
    </section>
  );
};

export default NewsByFilters;
