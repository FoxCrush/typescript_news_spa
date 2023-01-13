//Redux or any other store management is not necessary but it is here to meet the requirements of the test task
import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "./article-slice";

export const store = configureStore({
  reducer: {
    article: articleReducer,
  },
});
// Inferring RootState and Dispatch types from the store itself means that they correctly update as you add more state slices or modify middleware settings.
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
