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

export const LoginCompanyReducer = createReducer(initialState, {
    LoginCompanyRequest: (state) => {
        state.loading = true;
    },
    LoginCompanySuccess: (state, action) => {
        state.loading = false;
        state.company = action.payload;
        state.isAuthenticated = true;
    },
    LoginCompanyFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
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
    LogoutCompanyRequest: (state) => {
        state.loading = true;
    },
    LogoutCompanySuccess: (state, action) => {
        state.loading = false;
        state.company = null;
        state.isAuthenticated = false;
    },
    LogoutCompanyFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = true;
    },
    clearErrors: (state) => {
        state.errors = null;
    },
})

export const verifyCompanyReducer = createReducer(initialState, {
    verifyCompanyRequest: (state) => {
        state.loading = true;
    },
    verifyCompanySuccess: (state, action) => {
        state.loading = false;
        state.company = action.payload;
    },
    verifyCompanyFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearErrors: (state) => {
        state.errors = null;
    },
})

export const getAllCompaniesReducer = createReducer(initialState, {
    getAllCompaniesRequest: (state) => {
        state.loading = true;
    },
    getAllCompaniesSuccess: (state, action) => {
        state.loading = false;
        state.companies = action.payload;
    },
    getAllCompaniesFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearErrors: (state) => {
        state.errors = null;
    },
})