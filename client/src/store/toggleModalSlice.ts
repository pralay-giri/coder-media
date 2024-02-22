import { Slice, createSlice } from "@reduxjs/toolkit";
import { ToggleModalState } from "../@types";

const initialState: ToggleModalState = {
  toggle: false,
};

export const toggleModalSlice = createSlice({
  name: "openmodal",
  initialState,
  reducers: {
    toggleOpen: (state: ToggleModalState) => {
      state.toggle = true;
    },
    toggleClose: (state: ToggleModalState) => {
      state.toggle = false;
    },
  },
});

export const { toggleOpen, toggleClose } = toggleModalSlice.actions;
export default toggleModalSlice.reducer;
