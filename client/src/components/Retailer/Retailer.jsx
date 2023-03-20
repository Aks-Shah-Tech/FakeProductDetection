import React, { useEffect } from 'react';
import "./Retailer.css";
import { Link, useNavigate } from 'react-router-dom';
import RetailerPage from '../RetailerPage/RetailerPage';
import Dashboard from '../Dashboard/Dashboard';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Button from '@mui/material/Button';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useSelector } from 'react-redux';

const Retailer = () => {
  return (
    <>
        <Dashboard />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 dash_sidebar">
                        <ul>
                        <li><Link to="/" className='sidebar_link'><Button endIcon={<ShoppingCartCheckoutIcon />}>Product</Button></Link></li>
                            <li><Link to="/retailer" className='sidebar_link'><Button className='retailer_link' endIcon={<StorefrontIcon />}>Retailer</Button></Link></li>
                            <li><Link to="/retailer" className='sidebar_link'><Button endIcon={<AccountCircleIcon />}>Profile</Button></Link></li>
                        </ul>
                    </div>
                    <div className="col-md-10">
                        <RetailerPage />
                    </div>
                </div>
            </div>
        </>
  )
}

export default Retailer