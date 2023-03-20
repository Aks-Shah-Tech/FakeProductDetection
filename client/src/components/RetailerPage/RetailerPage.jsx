import React, { useState, useEffect } from 'react';
import "./RetailerPage.css";
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import RegisterProduct from '../RegisterProduct/RegisterProduct';
import AddRetailer from './AddRetailer/AddRetailer';
import DeleteIcon from '@mui/icons-material/Delete';
import { getAllRetailers, deleteRetailer } from '../../Actions/Retailer';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

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

const RetailerPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();
  const { retailers } = useSelector((state) => state.getAllRetailers);

  useEffect(() => {
    dispatch(getAllRetailers(toast));
  }, [retailers])

  const deleteRetailerById = (id) => {
    dispatch(deleteRetailer(id, toast));
  }
  
  return (
    <>
      <div class="container my-5">

        <div class="row height d-flex justify-content-center align-items-center">

          <div class="col-md-8">

            <div class="search">
              <i class="fa fa-search"></i>
              <input type="text" class="form-control" placeholder="Search a Retailer..." />
              <button class="btn btn-primary"> <SearchIcon /> </button>
            </div>

          </div>

          <div class="col-md-4">

            <Button onClick={handleOpen} variant="contained" startIcon={<PersonAddIcon />}>Add Retailer</Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h5" component="h2" className="text-center">
                  <b>Add Retailers Here</b>
                </Typography>
                <AddRetailer />
              </Box>
            </Modal>

          </div>

        </div>
      </div>
      <div class="card my-5 shadow table_card">
        <div class="card-body">

          <table class="table">
            <thead>
              <tr class="table-dark">
                <th scope="col">#</th>
                <th scope="col">Retailer Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                <th scope="col">Remove Retailer</th>
              </tr>
            </thead>
            <tbody>
              {
                retailers && (
                  retailers.map((retailer, i)=>{
                    return <tr>
                    <th scope="row">{i+1}</th>
                    <td>{retailer.retId}</td>
                    <td>{retailer.name}</td>
                    <td>{retailer.email}</td>
                    <td>{retailer.address}</td>
                    <td><Button onClick={()=>{deleteRetailerById(retailer._id)}} color="error" startIcon={<DeleteIcon />}>
                      Delete
                    </Button></td>
                  </tr>
                  })
                )
              }
              
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default RetailerPage