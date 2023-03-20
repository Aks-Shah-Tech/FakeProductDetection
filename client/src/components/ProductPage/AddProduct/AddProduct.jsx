import React, {useState, useEffect} from 'react';
import { Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRetailers } from '../../../Actions/Retailer';
import { registerProduct } from '../../../Actions/Product';

const AddProduct = () => {
    //todo: retailer dropdown
    // const [name, setName] = useState();
    // const [price, setPrice] = useState();
    // const [description, setDescription] = useState();
    // const [category, setCategory] = useState();
    // const [retailerId, setRetailerId] = useState();

    const [val, setVal] = useState({
        name: null,
        price: null,
        description: null,
        category: null,
        retailerId: null,
          errors: {
            name: '',
            price: '',
            description: '',
            category: '',
            retailerId: '',
          }
      })

    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = val.errors;
    
        switch (name) {
          case 'name': 
            errors.name = 
              value.length < 5
                ? 'Product Name must be at least 5 characters long!'
                : '';
            break;
          case 'price': 
            errors.price = 
              (value > 10000000 || value < 100)
                ? 'Price must not be greater than 10 lakhs or less than 100!'
                : '';
            break;
          case 'description': 
            errors.description = 
            value.length === 0
            ? 'Description is required!'
            : '';
            break;
          case 'category': 
            errors.category = '';
            break;
            case 'retailerId': 
            errors.retailerId = '';
            break;
          default:
            break;
        }
    
        setVal({...val, errors, [name]: value});
      }
    
    const dispatch = useDispatch();
    const { retailers } = useSelector((state) => state.getAllRetailers);
    
    const submitProduct = async (e) =>{
        e.preventDefault();
        dispatch(registerProduct(val.name, val.price, val.description, val.category, val.retailerId, toast));
    }

  useEffect(() => {
    dispatch(getAllRetailers(toast));
  }, [retailers])

    return (
        <>
        <form onSubmit={submitProduct}>
            <div className="row my-5">
                <div className="col-md-6">
                    <TextField
                    required
                        fullWidth
                        label="Name"
                        name="name"
                        id="fullWidth"
                        helperText={val.errors.name}
                        value={val.name}
                        onChange={handleChange}
                        autoFocus
                    />
                </div>
                <div className="col-md-6">
                    <TextField
                    required
                        fullWidth
                        type="number"
                        name="price"
                        label="Price"
                        id="outlined-adornment-amount"
                        helperText={val.errors.price}
                        value={val.price}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="row my-5">
                <div className="col-md-6">
                    <FormControl required fullWidth>
                        <InputLabel id="demo-simple-select-label" >Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            name="category"
                            id="demo-simple-select"
                            label="Category"
                            helperText={val.errors.category}
                            value={val.category}
                            onChange={handleChange}
                        >
                            <MenuItem value="electronics">Electronics</MenuItem>
                            <MenuItem value="wearables">Wearables</MenuItem>
                            <MenuItem value="fashionApparel">Fashion Apparel</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="col-md-6">
                    <FormControl required fullWidth>
                        <InputLabel id="demo-simple-select-label">Retailer Name</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            name="retailerId"
                            id="demo-simple-select"
                            label="Retailer Name"
                            helperText={val.errors.retailerId}
                            value={val.retailerId}
                            onChange={handleChange}
                        >
                            {
                                retailers && retailers.map((retailer, i)=>{
                                    return <MenuItem value={retailer._id}>{retailer.name}</MenuItem>
                                })
                            }

                        </Select>
                    </FormControl>
                </div>
            </div>
            <div className="row mb-5 my-3">
                <div className="col-md-12">
                    <TextField
                    name="description"
                        id="outlined-multiline-flexible"
                        label="Description"
                        multiline
                        required
                        fullWidth
                        maxRows={4}
                        helperText={val.errors.description}
                        value={val.description}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <Button type="submit" variant="contained" fullWidth endIcon={<SendIcon />}>
                        Add Product
                    </Button>
                </div>
            </div>
            </form>
        </>
    )
}

export default AddProduct