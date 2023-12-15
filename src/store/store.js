import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";


// configureStore: which do lots of configuration for us
// 1. Don't need to do manual setup of redux dev tool extension
// 2. by default thunk middleware is available in configureStore
const store = configureStore({
    reducer: {
        cart: cartSlice
    }
})

export default store;