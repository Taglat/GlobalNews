import { NewsApiResponse, NewsItemType } from "./model/types";
import NewsCard from "./ui/news-card/news-card";
import newsReducer from "./model/newsSlice";
import { newsApi, useGetLatestNewsQuery, useGetNewsQuery } from "./api/newsApi";

export type { NewsApiResponse, NewsItemType };
export { NewsCard, newsReducer, newsApi, useGetNewsQuery, useGetLatestNewsQuery };