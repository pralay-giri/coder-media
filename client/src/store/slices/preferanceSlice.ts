import { Slice, createSlice } from "@reduxjs/toolkit";
import { toogleTheme } from "../../helper/toogleTheme";

const preferance: Slice = createSlice({
    name: "preferance",
    initialState: {
        mode: "LIGHT",
    },
    reducers: {
        initTheme: (state) => {
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

export const { initTheme, changeTheme } = preferance.actions;
export default preferance.reducer;
