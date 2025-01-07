import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { PAGE_SIZE } from "@/shared/constants/constants";
import { IFilters } from "@/shared/types";
import { NewsItemType } from "./types";

interface State {
  news: NewsItemType[];
  filters: IFilters;
  currentNews: NewsItemType | null;
}

const initialState: State = {
  news: [],
  currentNews: null,
  filters: {
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: "",
  },
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<NewsItemType[]>) => {
      state.news = action.payload;
    },
    setCurrentNews: (state, action: PayloadAction<NewsItemType | null>) => {
      state.currentNews = action.payload;
    },
    setFilters: (
      state,
      action: PayloadAction<{ key: string; value: string | null | number }>
    ) => {
      const { key, value } = action.payload;
      state.filters = { ...state.filters, [key]: value };
    },
  },
});

export const { setNews, setFilters, setCurrentNews } = newsSlice.actions;
export default newsSlice.reducer;