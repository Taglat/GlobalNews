import { CategoriesType } from "@/entities/category/model/types";

export type SkeletonType = "banner" | "item";

export type IFilters = {
  page_number: number;
  page_size: number;
  category: CategoriesType | null;
  keywords: string;
}

export type ParamsType = Partial<IFilters>;