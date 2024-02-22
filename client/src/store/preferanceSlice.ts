import { createSlice } from "@reduxjs/toolkit";
import { toogleTheme } from "../helper/toogleTheme";
import type { PreferanceState } from "../@types";

const initialState: PreferanceState = {
  mode: "LIGHT",
};

const preferanceSlice = createSlice({
  name: "preferance",
  initialState,
  reducers: {
    initTheme: (state ) => {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        toogleTheme("DARK");
        state.mode = "DARK";
      } else {
        state.mode = "LIGHT";
      }
    },
    changeTheme: (state, action) => {
      if (action.payload === "LIGHT") {
        state.mode = "LIGHT";
        toogleTheme("LIGHT");
      } else if (action.payload === "DARK") {
        state.mode = "DARK";
        toogleTheme("DARK");
      } else {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          toogleTheme("DARK");
          state.mode = "DARK";
        } else {
          toogleTheme("LIGHT");
          state.mode = "LIGHT";
        }
      }
    },
  },
});

export const { initTheme, changeTheme } = preferanceSlice.actions;
export default preferanceSlice.reducer;
