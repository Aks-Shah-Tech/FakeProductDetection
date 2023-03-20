import React, {useState} from 'react';
import "./Dashboard.css";
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { logoutCompany } from '../../Actions/Company';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import LogoutIcon from '@mui/icons-material/Logout';

const Dashboard = () => {
    const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(logoutCompany(toast));
  }
    return (
        <>
            <nav class="navbar navbar-dark navbar-expand-md pr-3 pl-3 landing_page_navbar">
                <div class="container-fluid">
                    <Link to="/" class="navbar-brand px-2 navbar_title">Fakeproductdetection</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="nav navbar-nav ms-auto px-2 links">
                            
                            <li class="nav-item">
                                <Button onClick={submitHandler} variant="contained" color="error" endIcon={<LogoutIcon />}>
                                    Logout
                                </Button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Dashboard