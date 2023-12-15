import { createSlice } from "@reduxjs/toolkit";


const initialState = [];
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addBook(state, action) {
           state.push(action.payload);
        }
    }
});

export const { addBook } = cartSlice.actions;
export default cartSlice.reducer;