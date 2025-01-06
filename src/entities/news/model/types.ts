import { CategoriesType } from "@/entities/category/model/types";

export type NewsItemType = {
  author: string;
  category: CategoriesType[];
  description: string;
  id: string;
  image: string;
  language: string;
  published: Date;
  title: string;
  url: string;
}

export type NewsApiResponse = {
  news: NewsItemType[];
  page: number;
  status: string;
}