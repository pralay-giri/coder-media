import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "userSlice",
    initialState: {
        modalState: false,
        isUserOuthenticated: false,
    },
    reducers: {
        setUserUserOuthenticated: (state, action) => {
            state.modalState = action.payload;
        },
        toggleModalState: (state, action) => {
            state.modalState = action.payload;
        },
    },
});

export const { toggleModalState, setUserUserOuthenticated } = userSlice.actions;
export default userSlice.reducer;
