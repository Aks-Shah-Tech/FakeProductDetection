import './App.css';
import React from 'react';
import VerifyProduct from './components/VerifyProduct/VerifyProduct';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RegisterProduct from './components/RegisterProduct/RegisterProduct';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ViewProduct from './components/ViewProduct/ViewProduct';
import ProductsList from './components/ProductsList/ProductsList';
import RegisterCompany from './components/RegisterCompany/RegisterCompany';
import RegisterRetailer from './components/RegisterRetailer/RegisterRetailer';

function App() {
  return (
    <>
      <Router>
      <ToastContainer theme="dark" />
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/register/product" element={<RegisterProduct />} />
      <Route path="/verify/product" element={<VerifyProduct />} />
      <Route path="/view/product/:id" element={<ViewProduct />} />
      <Route path="/products/list" element={<ProductsList />} />
      <Route path="/register/company" element={<RegisterCompany />} />
      <Route path="/register/retailer" element={<RegisterRetailer />} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
