import { createReducer } from "@reduxjs/toolkit";

const initialState = {
};

export const registerRetailerReducer = createReducer(initialState, {
    RegisterRetailerRequest: (state) => {
        state.loading = true;
    },
    RegisterRetailerSuccess: (state, action) => {
        state.loading = false;
        state.retailer = action.payload;
    },
    RegisterRetailerFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearErrors: (state) => {
        state.errors = null;
    },
})