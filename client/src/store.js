import {configureStore} from '@reduxjs/toolkit';
import { LoginAdminReducer } from './Reducers/Admin';
import { getAllCompaniesReducer, LoginCompanyReducer, registerCompanyReducer, verifyCompanyReducer } from './Reducers/Company';
import { getAllProductsReducer, getProductReducer, getRetailerReducer, registerProductReducer, verifyProductReducer } from './Reducers/Product';
import { deleteRetailerReducer, getAllRetailerReducer, registerRetailerReducer, verifyRetailerReducer } from './Reducers/Retailer';

const store = configureStore({
    reducer: {
        registerProduct: registerProductReducer,
        verifyProduct: verifyProductReducer,
        getAllProducts: getAllProductsReducer,
        registerCompany: registerCompanyReducer,
        registerRetailer: registerRetailerReducer,
        getAllRetailers: getAllRetailerReducer,
        deleteRetailer: deleteRetailerReducer,
        verifyCompany: verifyCompanyReducer,
        getAllCompanies: getAllCompaniesReducer,
        loginCompany: LoginCompanyReducer,
        getRetailer: getRetailerReducer,
        verifyRetailer: verifyRetailerReducer,
        loginAdmin: LoginAdminReducer,
    },
});

export default store;