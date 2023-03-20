import React, { useState } from 'react';
import "./ProductPage.css";
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import RegisterProduct from '../RegisterProduct/RegisterProduct';
import AddProduct from './AddProduct/AddProduct';
import ProductTable from './ProductTable/ProductTable';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';

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

  return (
    <>
      <div class="container my-5">

        <div class="row height d-flex justify-content-center align-items-center">

          <div class="col-md-8">

            <div class="search">
              <i class="fa fa-search"></i>
              <input type="text" class="form-control" placeholder="Search a Product..." />
              <button class="btn btn-primary"> <SearchIcon /> </button>
            </div>

          </div>

          <div class="col-md-4">

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
      <div class="card my-5 shadow table_card">
        <div class="card-body">

          {/* <table class="table">
            <thead>
              <tr class="table-dark">
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table> */}
          <ProductTable />
        </div>
      </div>
    </>
  )
}

export default ProductPage