import cl from "./styles.module.css";
import { fetchCategories } from "../../api/apiNews";
import { useFetch } from "../../hooks/useFetch";
import Categories from "../categories/categories";
import Search from "../search/search";
import { CategoriesType, IFilters } from "../../types";
import Slider from "../slider/slider"; 

const NewsFilters = ({
  filters,
  changeFilter,
}: {
  filters: IFilters;
  changeFilter: (key: string, filter: CategoriesType | string | number | null) => void;
}) => {
  const { data: dataCategories } = useFetch(fetchCategories);

  return (
    <div className={cl.filters}>
      {dataCategories ? (
        <Slider>
          <Categories
            categories={dataCategories.categories}
            selectedCategory={filters.category}
            setSelectedCategory={(category) => changeFilter("category", category)}
          />
        </Slider>
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilter("keywords", keywords)}
      />
    </div>
  );
};

export default NewsFilters;
