import { configureStore } from "@reduxjs/toolkit";
import themeReducer from '../slices/themeToggleSlice.js'
import countryReducer from '../slices/countrySlice.js'

const store = configureStore({
    reducer: {
        theme: themeReducer,
        country: countryReducer,
    },

    // This is to ignore the serializableCheck error on country data from the API
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // ignore some paths if you know they're safe
        ignoredActions: ["country/fetchCountries/fulfilled"],
        ignoredPaths: ["country.data"],
      },
    }),
});

export default store;