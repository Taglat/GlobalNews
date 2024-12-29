import axios from "axios";
import { NewsItemType } from "../types";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const fetchNews = async ():Promise<{news: NewsItemType[]}> => {
  try {
    const response = await axios.get(`${BASE_URL}latest-news`, {
      params: {
        apiKey: API_KEY,
      },
    });

    return response.data;
  } catch (err) {
    console.log(err);
    return { news: [] }
  }
};
