import { createSlice } from "@reduxjs/toolkit";

const initialState = { selectedTechnology: "", books: [] };
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addBook(state, action) {
      state.books.push(action.payload);
    },
    savedTech(state, action) {
      state.selectedTechnology = action.payload;
    },
    removeBook(state, action) {
      state.books.splice(action.payload, 1);
    },
  },
});

export const { addBook, savedTech, removeBook } = cartSlice.actions;
export default cartSlice.reducer;
