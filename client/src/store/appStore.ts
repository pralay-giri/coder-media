import { configureStore } from "@reduxjs/toolkit";
import preferanceSlice from "./slices/preferanceSlice";
import toggleModalSlice from "./slices/toggleModalSlice";

export const appStore = configureStore({
    reducer: {
        preferance: preferanceSlice,
        modal: toggleModalSlice,
    },
});

// Infer the `RootState` and `AppStore` types from store itself
export type RootState = ReturnType<typeof appStore.getState>;

// Infer type: {preferanceSlice}
export type AppDispatch = typeof appStore.dispatch;
