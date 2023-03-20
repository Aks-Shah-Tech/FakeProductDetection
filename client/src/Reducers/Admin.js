import { createReducer } from "@reduxjs/toolkit";

const initialState = {
};

export const LoginAdminReducer = createReducer(initialState, {
    LoginAdminRequest: (state) => {
        state.loading = true;
    },
    LoginAdminSuccess: (state, action) => {
        state.loading = false;
        state.admin = action.payload;
        state.isAdminAuthenticated = true;
    },
    LoginAdminFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAdminAuthenticated = false;
    },
    LoadingRequest: (state) => {
        state.loading = true;
    },
    LoadingSuccess: (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
    },
    LoadingFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
    },
    LogoutAdminRequest: (state) => {
        state.loading = true;
    },
    LogoutAdminSuccess: (state, action) => {
        state.loading = false;
        state.admin = null;
        state.isAdminAuthenticated = false;
    },
    LogoutAdminFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAdminAuthenticated = true;
    },
    clearErrors: (state) => {
        state.errors = null;
    },
})