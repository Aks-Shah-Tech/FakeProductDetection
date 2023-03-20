import React, { useState, useEffect } from 'react'
import QRCode from "react-qr-code";
import "./ViewProduct.css";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from "react-router-dom";
import { getProductById } from '../../Actions/Product';
import { toast } from "react-toastify";
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material';


const ViewProduct = () => {

    const dispatch = useDispatch();
    const { product } = useSelector((state) => state.verifyProduct);


    return (
        <>
            {
                product && (
                    <>
                        <div className="card mx-auto productCard">
                            <div className="card-body">
                            <div className="row">
                                    <div className="col-md-12">
                                        <div style={{ height: "auto", margin: "0 auto", width: "100%", display: "flex", justifyContent: "center"}}>
                                            <QRCode
                                                size={256}
                                                style={{ height: "200px",width: "200px" }}
                                                value={product._id}
                                                viewBox={`0 0 256 256`}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col-md-12">
                                        <Typography variant="h5" color="initial" className='text-center'>
                                            <span style={{fontWeight: 'bold', color: '#4186f2'}}>PRODUCT DETAILS</span>
                                        </Typography>
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col-md-12">
                                        <Typography variant="h6" color="initial" className='text-center'>
                                            <span style={{fontWeight: 'bold'}}>Name -</span>  {product.name}
                                        </Typography>
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col-md-12">
                                        <Typography variant="h6" color="initial" className='text-center'>
                                        <span style={{fontWeight: 'bold'}}>Price -</span>  {product.price}/-
                                        </Typography>
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col-md-12">
                                        <Typography variant="h6" color="initial" className='text-center'>
                                        <span style={{fontWeight: 'bold'}}>Category - </span>
                                        <span style={{textTransform: "capitalize"}}>{product.category}</span>  
                                        </Typography>
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col-md-12">
                                        <Typography variant="h6" color="initial" className='text-center'>
                                        <span style={{fontWeight: 'bold'}}>Description -</span>  {product.description}
                                        </Typography>
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col-md-12" style={{ display: "flex", justifyContent: "center"}}>
                                        <Link to="/verify/retailer" className='product_details_link'>
                                        <Button variant='contained'>Verify Retailer</Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }


        </>
    )
}

export default ViewProduct