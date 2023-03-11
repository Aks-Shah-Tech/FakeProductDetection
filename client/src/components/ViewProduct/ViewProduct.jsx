import React, { useState, useEffect } from 'react'
import QRCode from "react-qr-code";
import "./ViewProduct.css";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { getProductById } from '../../Actions/Product';
import { toast } from "react-toastify";
import Typography from '@mui/material/Typography'

const ViewProduct = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const { product } = useSelector((state) => state.getProduct);

    useEffect(() => {
        dispatch(getProductById(params.id, toast));
    }, [params.id])
    return (
        <>
            {
                product && (
                    <>
                        <div className="card mx-auto productCard">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <Typography variant="h4" color="initial">
                                            Name : <span>{product.name}</span>
                                        </Typography>
                                    </div>
                                    <div className="col-md-6">
                                        <Typography variant="h4" color="initial">
                                            Price : <span>{product.price}</span>
                                        </Typography>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <Typography variant="h4" color="initial">
                                            Description : <span>{product.description}</span>
                                        </Typography>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <Typography variant="h4" color="initial">
                                            QRCode
                                        </Typography>
                                        <div style={{ height: "auto", margin: "0 auto", maxWidth: 64, width: "100%" }}>
                                            <QRCode
                                                size={256}
                                                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                                                value={product._id}
                                                viewBox={`0 0 256 256`}
                                            />
                                        </div>
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