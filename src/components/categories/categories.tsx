import { CategoriesType } from "../../types";
import cl from "./styles.module.css";

const Categories = ({
  categories,
  setSelectedCategory,
  selectedCategory,
}: {
  categories: (CategoriesType)[];
  setSelectedCategory: (category: CategoriesType) => void;
  selectedCategory: CategoriesType;
}) => {
  return (
    <div className={cl.categories}>
      {categories.map((category) => {
        return (
          <button
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? cl.active : cl.item}
            key={category}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
