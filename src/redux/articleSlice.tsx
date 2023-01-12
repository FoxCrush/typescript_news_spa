import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface ArticleID {
  articleID: number;
}

// Define the initial state using that type
const initialState: ArticleID = {
  articleID: 0,
};

export const articleSlice = createSlice({
  name: "article",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setArticleID: (state, action: PayloadAction<number>) => {
      state.articleID = action.payload;
    },
  },
});

export const { setArticleID } = articleSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectorArticle = (state: RootState) => state.article.articleID;

export default articleSlice.reducer;
