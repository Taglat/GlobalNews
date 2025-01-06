import { ForwardedRef, forwardRef } from "react";
import { CategoriesType } from "../../types";
import cl from "./styles.module.css";

const Categories = forwardRef(({
  categories,
  setSelectedCategory,
  selectedCategory,
}: {
  categories: (CategoriesType)[];
  setSelectedCategory: (category: CategoriesType | null) => void;
  selectedCategory: CategoriesType | null;
}, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div ref={ref} className={cl.categories}>
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
});

Categories.displayName = "Categories";

export default Categories;
