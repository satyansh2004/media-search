import { createSlice } from "@reduxjs/toolkit";

const loadSaved = () => {
  try {
    return JSON.parse(localStorage.getItem("Saved")) || [];
  } catch {
    return [];
  }
};

export const collectionSlice = createSlice({
  name: "collection",
  initialState: {
    saved: loadSaved(),
  },

  reducers: {
    saveToLocalStorage: (state, action) => {
      state.saved.push(action.payload);
      localStorage.setItem("Saved", JSON.stringify(state.saved));
    },

    removeFromCollection: (state, action) => {
      state.saved = state.saved.filter((item) => item != action.payload);
      localStorage.setItem("Saved", JSON.stringify(state.saved));
    },
  },
});

export const { saveToLocalStorage, removeFromCollection } =
  collectionSlice.actions;

export default collectionSlice.reducer;
