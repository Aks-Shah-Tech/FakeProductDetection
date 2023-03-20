import './App.css';
import React, {useEffect} from 'react';
import VerifyProduct from './components/VerifyProduct/VerifyProduct';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RegisterProduct from './components/RegisterProduct/RegisterProduct';
import Login from './components/Login/Login';
import ViewProduct from './components/ViewProduct/ViewProduct';
import ProductsList from './components/ProductsList/ProductsList';
import RegisterCompany from './components/RegisterCompany/RegisterCompany';
import RegisterRetailer from './components/RegisterRetailer/RegisterRetailer';
import LandingPage from './components/LandingPage/LandingPage';
import Dashboard from './components/Dashboard/Dashboard';
import Product from './components/Product/Product';
import Retailer from './components/Retailer/Retailer';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import { useDispatch, useSelector } from 'react-redux';
import { loadCompany } from './Actions/Company';
import Cookies from "js-cookie";
import VerifyRetailer from './components/VerifyRetailer/VerifyRetailer';
import ViewRetailer from './components/ViewRetailer/ViewRetailer';
import FakeProduct from './components/FakeProduct/FakeProduct';
import FakeRetailer from './components/FakeRetailer/FakeRetailer';
import NotFound from './components/NotFound/NotFound';
import AdminLogin from './components/AdminLogin/AdminLogin';
import ReportForm from './components/ReportForm/ReportForm';
import Profile from './components/Profile/Profile';
import { getAllProducts } from './Actions/Product';
import { getAllRetailers } from './Actions/Retailer';
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCompany());
    dispatch(getAllProducts());
    dispatch(getAllRetailers());
  }, []);

  const {isAuthenticated} = useSelector((state) => state.loginCompany);
  const {isAdminAuthenticated} = useSelector((state) => state.loginAdmin);
  return (
    <>
      <Router>
      <ToastContainer theme="dark" />
      <Routes>
      <Route path="/" element={isAuthenticated ? <Product /> : <LandingPage />} />
      <Route path="/retailer" element={isAuthenticated ? <Retailer /> : <LandingPage />} />
      <Route path="/profile" element={isAuthenticated ? <Profile /> : <LandingPage />} />
      <Route path="/3ace1970.admin/dashboard" element={isAdminAuthenticated ? <AdminDashboard /> : <AdminLogin />} />
      <Route path="/verify/product" element={<VerifyProduct />} />
      <Route path="/view/product" element={<ViewProduct />} />
      <Route path="/verify/retailer" element={<VerifyRetailer />} />
      <Route path="/view/retailer" element={<ViewRetailer />} />
      <Route path="/fake/product" element={<FakeProduct />} />
      <Route path="/fake/retailer" element={<FakeRetailer />} />
      <Route path="/report" element={<ReportForm />} />
      <Route path="*" element={<NotFound />} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
