import { configureStore } from "@reduxjs/toolkit";
import preferanceSlice from "./slices/preferanceSlice";
import userSlice from "./slices/userSlice";

export const appStore = configureStore({
    reducer: {
        userSlice,
        preferanceSlice,
    },
});
