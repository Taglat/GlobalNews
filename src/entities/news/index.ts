import { NewsApiResponse, NewsItemType } from "./model/types";
import { NewsBanner } from "./ui/news-banner/news-banner";
import NewsItem from "./ui/news-item/news-item";
import newsReducer from "./model/newsSlice";
import { newsApi, useGetLatestNewsQuery, useGetNewsQuery } from "./api/newsApi";

export type { NewsApiResponse, NewsItemType };
export { NewsBanner, NewsItem, newsReducer, newsApi, useGetNewsQuery, useGetLatestNewsQuery };