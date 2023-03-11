import { createReducer } from "@reduxjs/toolkit";

const initialState = {
};

export const registerCompanyReducer = createReducer(initialState, {
    RegisterCompanyRequest: (state) => {
        state.loading = true;
    },
    RegisterCompanySuccess: (state, action) => {
        state.loading = false;
        state.company = action.payload;
    },
    RegisterCompanyFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearErrors: (state) => {
        state.errors = null;
    },
})