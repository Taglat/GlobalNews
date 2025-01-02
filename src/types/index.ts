export type SkeletonType = "banner" | "item";

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

export type IFilters = {
  page_number: number;
  page_size: number;
  category: CategoriesType | null;
  keywords: string;
}

export type ParamsType = Partial<IFilters>;

export type CategoriesApiResponse = {
  categories: CategoriesType[];
  description: string;
  status: string;
}

export type CategoriesType =
  | "regional"
  | "technology"
  | "lifestyle"
  | "business"
  | "general"
  | "programming"
  | "science"
  | "entertainment"
  | "world"
  | "sports"
  | "finance"
  | "academia"
  | "politics"
  | "health"
  | "opinion"
  | "food"
  | "game"
  | "fashion"
  | "academic"
  | "crap"
  | "travel"
  | "culture"
  | "economy"
  | "environment"
  | "art"
  | "music"
  | "notsure"
  | "CS"
  | "education"
  | "redundant"
  | "television"
  | "commodity"
  | "movie"
  | "entrepreneur"
  | "review"
  | "auto"
  | "energy"
  | "celebrity"
  | "medical"
  | "gadgets"
  | "design"
  | "EE"
  | "security"
  | "mobile"
  | "estate"
  | "funny"
  | null;

  