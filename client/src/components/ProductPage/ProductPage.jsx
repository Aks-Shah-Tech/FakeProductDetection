import React, { useEffect, useState } from 'react';
import "./ProductPage.css";
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import AddProduct from './AddProduct/AddProduct';
import ProductTable from './ProductTable/ProductTable';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../Actions/Product';
import { getAllRetailers } from '../../Actions/Retailer';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ProductPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [prodname, setProdname] = useState();

  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.getAllProducts);
  let pdts = products;

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllRetailers());
  }, [])

  const searchFilter = (pname) => {
    if (!pname) {
      pdts = products;
    } else {
      pdts = products.filter(product => product.name.toLowerCase().includes(pname.toLowerCase()));
    }
  }

  return (
    <>
      <div className="container my-5">

        <div className="row d-flex justify-content-center align-items-center">

          <div className="col-md-8">

            <div className="search">
              <i className="fa fa-search"></i>
              <input type="text" value={prodname} onChange={(e) => setProdname(e.target.value)} className="form-control" placeholder="Search a Product..." />
              <button className="btn btn-primary" onClick={searchFilter(prodname)}> <SearchIcon /> </button>
            </div>

          </div>

          <div className="col-md-4">

            <Button onClick={handleOpen} variant="contained" startIcon={<LibraryAddIcon />}>Add Product</Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h4" component="h2" className="text-center">
                  <b>Add Products Here</b>
                </Typography>
                <AddProduct />
              </Box>
            </Modal>

          </div>

        </div>
      </div>
      <div className="card shadow table_card">
        <div className="card-body">
          <ProductTable products={pdts} />
        </div>
      </div>
    </>
  )
}

export default ProductPage