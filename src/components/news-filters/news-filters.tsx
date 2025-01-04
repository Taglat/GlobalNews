import cl from "./styles.module.css";
import Categories from "../categories/categories";
import Search from "../search/search";
import { IFilters } from "../../types";
import Slider from "../slider/slider"; 
import { useTheme } from "../../context/theme-context";
import { useGetCategoriesQuery } from "../../store/services/newsApi";
import { useAppDispatch } from "../../store";
import { setFilters } from "../../store/slices/newsSlice";

const NewsFilters = ({
  filters,
}: {
  filters: IFilters;
}) => {
  const { isDark } = useTheme();
  const {data} = useGetCategoriesQuery(null);
  const dispatch = useAppDispatch();

  return (
    <div className={cl.filters}>
      {data ? (
        <Slider isDark={isDark}>
          <Categories
            categories={data.categories}
            selectedCategory={filters.category}
            setSelectedCategory={(category) => dispatch(setFilters({ key: "category", value: category }))}
          />
        </Slider>
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => dispatch(setFilters({ key: "keywords", value: keywords }))}
      />
    </div>
  );
};

export default NewsFilters;
