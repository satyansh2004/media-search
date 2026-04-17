import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./slices/searchSlice.js"
import collectionReducer from "./slices/collectionSlice.js"

export const store = configureStore({
  reducer: {
    search: searchReducer,
    collection: collectionReducer
  },
});
