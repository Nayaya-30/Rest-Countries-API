import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "/src/components/themeToggle/themeToggleSlice";

const store = configureStore({
    reducer: {
        theme: themeReducer,
    },
});

export default store;