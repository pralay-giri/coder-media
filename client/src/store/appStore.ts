import { configureStore } from "@reduxjs/toolkit";
import preferanceSlice from "./preferanceSlice";

export const appStore = configureStore({
    reducer: {
        preferanceSlice,
    },
});
