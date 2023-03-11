import { createReducer } from "@reduxjs/toolkit";

const initialState = {
};

export const registerProductReducer = createReducer(initialState, {
    RegisterProductRequest: (state) => {
        state.loading = true;
    },
    RegisterProductSuccess: (state, action) => {
        state.loading = false;
        state.product = action.payload;
    },
    RegisterProductFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearErrors: (state) => {
        state.errors = null;
    },
})

export const verifyProductReducer = createReducer(initialState, {
    verifyProductRequest: (state) => {
        state.loading = true;
    },
    verifyProductSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    verifyProductFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearErrors: (state) => {
        state.errors = null;
    },
})

export const getProductReducer = createReducer(initialState, {
    getProductRequest: (state) => {
        state.loading = true;
    },
    getProductSuccess: (state, action) => {
        state.loading = false;
        state.product = action.payload;
    },
    getProductFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearErrors: (state) => {
        state.errors = null;
    },
})

export const getAllProductsReducer = createReducer(initialState, {
    getAllProductsRequest: (state) => {
        state.loading = true;
    },
    getAllProductsSuccess: (state, action) => {
        state.loading = false;
        state.products = action.payload;
    },
    getAllProductsFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearErrors: (state) => {
        state.errors = null;
    },
})