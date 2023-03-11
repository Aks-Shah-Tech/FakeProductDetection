import {configureStore} from '@reduxjs/toolkit';
import { registerCompanyReducer } from './Reducers/Company';
import { getAllProductsReducer, getProductReducer, registerProductReducer, verifyProductReducer } from './Reducers/Product';
import { registerRetailerReducer } from './Reducers/Retailer';

const store = configureStore({
    reducer: {
        registerProduct: registerProductReducer,
        verifyProduct: verifyProductReducer,
        getProduct: getProductReducer,
        getAllProducts: getAllProductsReducer,
        registerCompany: registerCompanyReducer,
        registerRetailer: registerRetailerReducer,
    },
});

export default store;