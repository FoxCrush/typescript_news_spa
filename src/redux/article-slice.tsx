import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface ArticleID {
  articleID: number;
  searchString: string;
}

// Define the initial state using interface from above
const initialState: ArticleID = {
  articleID: 0,
  searchString: "",
};

export const articleSlice = createSlice({
  name: "article",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Using the PayloadAction type to declare the contents of `action.payload`
    setArticleID: (state, action: PayloadAction<number>) => {
      state.articleID = action.payload;
    },
    setSearchString: (state, action: PayloadAction<string>) => {
      state.searchString = action.payload;
    },
  },
});

export const { setArticleID } = articleSlice.actions;
export const { setSearchString } = articleSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const articleSelector = (state: RootState) => state.article.articleID;
export const searchStringSelector = (state: RootState) =>
  state.article.searchString;

export default articleSlice.reducer;
