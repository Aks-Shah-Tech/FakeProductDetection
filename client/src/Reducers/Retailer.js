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

export const getAllRetailerReducer = createReducer(initialState, {
    
    getAllRetailerRequest: (state) => {
        state.loading = true;
    },
    getAllRetailerSuccess: (state, action) => {
        state.loading = false;
        state.retailers = action.payload;
    },
    getAllRetailerFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearErrors: (state) => {
        state.errors = null;
    },
})

export const verifyRetailerReducer = createReducer(initialState, {
    verifyRetailerRequest: (state) => {
        state.loading = true;
        state.success = null;
    },
    verifyRetailerSuccess: (state, action) => {
        state.loading = false;
        state.retailer = action.payload;
        state.success = true;
    },
    verifyRetailerFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
    },
    clearErrors: (state) => {
        state.errors = null;
    },
    clearRetailer: (state) => {
        state.success = null;
        state.retailer = null;
    }
})

export const deleteRetailerReducer = createReducer(initialState, {
    
    deleteRetailerRequest: (state) => {
        state.loading = true;
    },
    deleteRetailerSuccess: (state, action) => {
        state.loading = false;
        state.retailers = action.payload;
    },
    deleteRetailerFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearErrors: (state) => {
        state.errors = null;
    },
})