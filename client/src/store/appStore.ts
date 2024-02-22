import { configureStore } from "@reduxjs/toolkit";
import preferanceSlice from "./preferanceSlice";
import toggleModalSlice from "./toggleModalSlice";

export const appStore = configureStore({
  reducer: {
    preferance: preferanceSlice,
    modal: toggleModalSlice
  },
});

// Infer the `RootState` and `AppStore` types from store itself
export type RootState = ReturnType<typeof appStore.getState>;

// Infer type: {preferanceSlice}
export type AppDispatch = typeof appStore.dispatch;
