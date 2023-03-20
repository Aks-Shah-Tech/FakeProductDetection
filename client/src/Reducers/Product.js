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
        state.success = null;
    },
    verifyProductSuccess: (state, action) => {
        state.loading = false;
        state.product = action.payload;
        state.success = true;
    },
    verifyProductFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
    },
    clearErrors: (state) => {
        state.errors = null;
    },
    clearProduct: (state) => {
        state.success = null;
        state.product = null;
    }
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

export const getRetailerReducer = createReducer(initialState, {
    getRetailerRequest: (state) => {
        state.loading = true;
    },
    getRetailerSuccess: (state, action) => {
        state.loading = false;
        state.retailer = action.payload;
    },
    getRetailerFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearErrors: (state) => {
        state.errors = null;
    },
})