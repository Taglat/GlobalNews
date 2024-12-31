import axios from "axios";
import { NewsApiResponse } from "../types";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

type FetchNewsProps = {
  page_number: number;
  page_size: number;
}

export const fetchNews = async ({page_number = 1, page_size = 10}: FetchNewsProps):Promise<NewsApiResponse> => {
  try {
    const response = await axios.get(`${BASE_URL}search`, {
      params: {
        apiKey: API_KEY,
        page_number,
        page_size
      },
    });

    return response.data;
  } catch (err) {
    console.log(err);
    return { news: [], page: 1, status: "error" };
  }
};
