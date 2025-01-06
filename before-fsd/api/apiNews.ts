// import axios from "axios";
// import { CategoriesApiResponse, NewsApiResponse, ParamsType } from "../types";

// const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
// const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

// export const fetchNews = async (params?: ParamsType):Promise<NewsApiResponse> => {
//   try {
//     const {
//       page_number = 1,
//       page_size = 10,
//       category,
//       keywords,
//     } = params || {};
    
//     const response = await axios.get(`${BASE_URL}search`, {
//       params: {
//         apiKey: API_KEY,
//         page_number,
//         page_size,
//         category,
//         keywords
//       },
//     });

//     return response.data;
//   } catch (err) {
//     console.log(err);
//     return { news: [], page: 1, status: "news api error" };
//   }
// };

// export const fetchLatestNews = async () => {
//   try {
//     const response = await axios.get(`${BASE_URL}latest-news`, {
//       params: {
//         apiKey: API_KEY,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const fetchCategories = async ():Promise<CategoriesApiResponse> => {
//   try {
//     const response = await axios.get(`${BASE_URL}available/categories`, {
//       params: {
//         apiKey: API_KEY,
//       },
//     });

//     return response.data;
//   } catch (err) {
//     console.log(err);
//     return {categories: [], description: "", status: "categories api error"}
//   }
// };
