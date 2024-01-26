//Create a page slice with loading boolean
// Path: src/Services/pageSlice.js
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading: false,
    error: null,
};

const pageSlice = createSlice({
    name: "page",
    initialState,
    reducers: {
        toggleLoading: (state) => {
            state.loading = !state.loading;
        },
        updateLoading: (state, payload) => {
            state.loading = payload;
        },

    }
    //Getter
});

export const { toggleLoading, updateLoading } = pageSlice.actions;

export default pageSlice.reducer;