import { createSlice } from "@reduxjs/toolkit";
import { SEARCH_ENDPOINT } from "../utils/util";

const initialState = { loading: false, allBooks: [] };
const bookProductsSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    fetchingBooks(state, action) {
      state.loading = true;
    },
    fetchBookProducts(state, action) {
      state.loading = false;
      state.allBooks = [...state.allBooks, ...action.payload.books];
    },
    resetBooks(state, action) {
      state.allBooks = [];
    },
  },
});

export const { fetchBookProducts, fetchingBooks, resetBooks } =
  bookProductsSlice.actions;
export default bookProductsSlice.reducer;

export function getBooks(selectTech) {
  return async function getBooksThunk(dispatch, getState) {
    dispatch(fetchingBooks());
    const noOfApiCalls = [1, 2, 3, 4];
    await Promise.all(
      noOfApiCalls.map(async (id) => {
        const res = await fetch(`${SEARCH_ENDPOINT}/${selectTech}?page=${id}`);
        const response = await res.json();
        dispatch(fetchBookProducts(response));
      })
    );
  };
}
