import React, {useState} from 'react';
import "./RegisterProduct.css";
import Typography from '@mui/material/Typography'
import { Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch, useSelector } from 'react-redux';
import { registerProduct } from '../../Actions/Product';
import {toast} from "react-toastify";

const RegisterProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState();
    const [description, setDescription] = useState("");

    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.registerProduct)

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(registerProduct(name, price, description, toast));
    }

    return (
        <>
            <div className="card mx-auto registerProductCard">
                <div className="card-body">
                    <form onSubmit={submitHandler}>
                        <Typography className="text-center" variant="h2" color="initial">
                            Register Your Product
                        </Typography>
                        <div className="row my-5">
                            <div className="col-md-6">
                                <TextField
                                    fullWidth
                                    label="Product Name"
                                    id="fullWidth"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="col-md-6">
                                <TextField
                                    fullWidth
                                    label="Product Price"
                                    id="fullWidth"
                                    type="number"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="row my-5">
                            <div className="col-md-12">
                                <TextField
                                    id="outlined-multiline-flexible"
                                    label="Product Description"
                                    multiline
                                    fullWidth
                                    maxRows={4}
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <Button type="submit" disabled={loading} variant="contained" endIcon={<SendIcon />}>
                                    Register
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default RegisterProduct