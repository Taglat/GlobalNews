import { useState } from "react";
import { CategoriesType } from "../types";

interface IFilters {
  page_number: number;
  page_size: number;
  category: CategoriesType | null;
  keywords: string;
}

export const useFilters = (initialFilters: IFilters) => {
  const [filters, setFilters] = useState<IFilters>(initialFilters);

  const changeFilter = (key: string, value: string | null | number) => {
    setFilters((prev) => {
      return { ...prev, [key]: value };
    });
  };

  return { filters, changeFilter };
};
