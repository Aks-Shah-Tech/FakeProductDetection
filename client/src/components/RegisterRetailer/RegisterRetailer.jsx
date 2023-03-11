import React, {useState} from 'react';
import "./RegisterRetailer.css";
import Typography from '@mui/material/Typography'
import { Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch, useSelector } from 'react-redux';
import {toast} from "react-toastify";
import { registerRetailer } from '../../Actions/Retailer';

const RegisterRetailer = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.registerRetailer);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(registerRetailer(name, email, password, toast));
    }
  return (
    <>
        <div className="card mx-auto registerRetailerCard">
                <div className="card-body">
                    <form onSubmit={submitHandler}>
                        <Typography className="text-center" variant="h2" color="initial">
                            Register Your Company
                        </Typography>
                        <div className="row my-5">
                            <div className="col-md-6">
                                <TextField
                                    fullWidth
                                    label="Retailer Name"
                                    id="fullWidth"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="col-md-6">
                                <TextField
                                    fullWidth
                                    label="Retailer Email"
                                    id="fullWidth"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="row my-5">
                            <div className="col-md-12">
                                <TextField
                                    id="fullWidth"
                                    label="Password"
                                    type="password"
                                    fullWidth
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
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

export default RegisterRetailer