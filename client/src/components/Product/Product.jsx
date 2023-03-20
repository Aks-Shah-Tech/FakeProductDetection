import React, {useEffect} from 'react';
import ProductPage from '../ProductPage/ProductPage';
import "./Product.css";
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Dashboard from '../Dashboard/Dashboard';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useSelector } from 'react-redux';

const Product = () => {
    return (
        <>
            <Dashboard />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 dash_sidebar">
                        <ul>
                            <li><Link to="/" className='sidebar_link'><Button className='product_link' endIcon={<ShoppingCartCheckoutIcon />}>Product</Button></Link></li>
                            <li><Link to="/retailer" className='sidebar_link'><Button endIcon={<StorefrontIcon />}>Retailer</Button></Link></li>
                            <li><Link to="/retailer" className='sidebar_link'><Button endIcon={<AccountCircleIcon />}>Profile</Button></Link></li>
                        </ul>
                    </div>
                    <div className="col-md-10">
                        <ProductPage />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product