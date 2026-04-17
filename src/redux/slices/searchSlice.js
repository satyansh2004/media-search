import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchImg",
  initialState: {
    query: "",
    results: [],
    error: null,
    page: 1,
    tabs: "Photos"
  },

  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },

    setResults: (state, action) => {
      state.results = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },

    nextPage: (state, action) => {
      if (state.page != 500) {
        state.page += 1;
      }
    },

    prevPage: (state, action) => {
        if(state.page > 1) {
            state.page -= 1;
        }
    },

    resetPage: (state, action) => {
      state.page = 1;
    },

    setTabs: (state, action) => {
      state.tabs = action.payload
    }
  },
});

export const { setQuery, setResults, setError, nextPage, prevPage, resetPage, setTabs } = searchSlice.actions;

export default searchSlice.reducer;
