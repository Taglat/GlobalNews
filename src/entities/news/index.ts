import { NewsApiResponse, NewsItemType } from "./model/types";
import NewsCard from "./ui/news-card/news-card";
import NewsDetails from "./ui/news-details/news-details";
import newsReducer from "./model/newsSlice";
import { newsApi, useGetLatestNewsQuery, useGetNewsQuery } from "./api/newsApi";

export type { NewsApiResponse, NewsItemType };
export { NewsCard, NewsDetails, newsReducer, newsApi, useGetNewsQuery, useGetLatestNewsQuery };