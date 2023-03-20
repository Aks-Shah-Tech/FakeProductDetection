import React, { useState, useEffect } from 'react'
import QRCode from "react-qr-code";
import "./ViewRetailer.css";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from "react-router-dom";
import { getProductById } from '../../Actions/Product';
import { toast } from "react-toastify";
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material';

const ViewRetailer = () => {

    const dispatch = useDispatch();
    const { retailer } = useSelector((state) => state.verifyRetailer);


    return (
        <>
            {
                retailer && (
                    <>
                        <div className="card mx-auto retailerCard">
                            <div className="card-body">
                            <div className="row">
                                    <div className="col-md-12">
                                        <div style={{ height: "auto", margin: "0 auto", width: "100%", display: "flex", justifyContent: "center"}}>
                                            <QRCode
                                                size={256}
                                                style={{ height: "200px",width: "200px" }}
                                                value={retailer.retId}
                                                viewBox={`0 0 256 256`}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col-md-12">
                                        <Typography variant="h5" color="initial" className='text-center'>
                                            <span style={{fontWeight: 'bold', color: '#4186f2'}}>RETAILER DETAILS</span>
                                        </Typography>
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col-md-12">
                                        <Typography variant="h6" color="initial" className='text-center'>
                                            <span style={{fontWeight: 'bold'}}>Name -</span>  {retailer.name}
                                        </Typography>
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col-md-12">
                                        <Typography variant="h6" color="initial" className='text-center'>
                                        <span style={{fontWeight: 'bold'}}>Email -</span>  {retailer.email}/-
                                        </Typography>
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col-md-12">
                                        <Typography variant="h6" color="initial" className='text-center'>
                                        <span style={{fontWeight: 'bold'}}>Address - </span>
                                        <span style={{textTransform: "capitalize"}}>{retailer.address}</span>  
                                        </Typography>
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col-md-12" style={{ display: "flex", justifyContent: "center"}}>
                                        <Link to="/" className='retailer_details_link'>
                                        <Button variant='contained'>Back Home</Button>
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

export default ViewRetailer