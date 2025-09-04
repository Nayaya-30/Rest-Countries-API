import { configureStore } from "@reduxjs/toolkit";
import themeReducer from '../slices/themeToggleSlice.js'
import countryReducer from '../slices/countrySlice.js'

const store = configureStore({
    reducer: {
        theme: themeReducer,
        country: countryReducer,
    },
});

export default store;