import React, {useState} from 'react';
import { Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch, useSelector } from 'react-redux';
import { registerRetailer } from '../../../Actions/Retailer';
import {toast} from "react-toastify";

const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );

const AddRetailer = () => {
    //todo: form band krna h after submit
    // const [name, setName] = useState();
    // const [email, setEmail] = useState();
    // const [address, setAddress] = useState();

    const [val, setVal] = useState({
        name: null,
        email: null,
        address: null,
          errors: {
            name: '',
            email: '',
            address: '',
          }
      })

      const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = val.errors;
    
        switch (name) {
          case 'name': 
            errors.name = 
              value.length < 4
                ? 'Name must be at least 4 characters long!'
                : '';
            break;
          case 'email': 
            errors.email = 
              validEmailRegex.test(value)
                ? ''
                : 'Email is not valid!';
            break;
          case 'address': 
            errors.address = 
              value.length < 6
                ? 'Address must be at least 8 characters long!'
                : '';
            break;
          default:
            break;
        }
    
        setVal({...val, errors, [name]: value});
      }

    const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.registerRetailer)

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(registerRetailer(val.name, val.email, val.address, toast));
  }
    return (
        <>
        <form onSubmit={submitHandler}>
            <div className="row my-5">
                <div className="col-md-6">
                    <TextField
                        fullWidth
                        required
                        label="Name"
                        name='name'
                        id="fullWidth"
                        helperText={val.errors.name}
                        value={val.name}
                onChange={handleChange}
                autoFocus
                    />
                </div>
                <div className="col-md-6">
                    <TextField
                        fullWidth
                        required
                        type="email"
                        name="email"
                        label="Email"
                        id="outlined-adornment-amount"
                        helperText={val.errors.email}
                        value={val.email}
                onChange={handleChange}
                    />
                </div>
            </div>
            <div className="row mb-5 my-3">
                <div className="col-md-12">
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Address"
                        name='address'
                        helperText={val.errors.address}
                        required
                        multiline
                        fullWidth
                        maxRows={4}
                        value={val.address}
                onChange={handleChange}
                    />
                </div>
            </div>
            <div className="row my-3">
                <div className="col-md-12">
                    <Button type="submit" disabled={loading} variant="contained" fullWidth endIcon={<SendIcon />}>
                        Add Retailer
                    </Button>
                </div>
            </div>
            </form>
        </>
    )
}

export default AddRetailer