import React, { useState, useEffect } from 'react';
import "./AdminDashboard.css";
import { Link } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCompanies, verifyCompanyApprove } from "../../Actions/Company";
import { verifyCompanyReject } from "../../Actions/Company";
import { toast } from "react-toastify";
import { logoutAdmin } from '../../Actions/Admin';
import LogoutIcon from '@mui/icons-material/Logout';

const AdminDashboard = () => {
  const [approve, setApprove] = useState();
  const [reject, setReject] = useState();

  const dispatch = useDispatch();

  const { companies } = useSelector((state) => state.getAllCompanies)
    useEffect(() => {
        dispatch(getAllCompanies(toast));
    }, [companies])

  const approveReq = (e) => {
    e.preventDefault();
    dispatch(verifyCompanyApprove(approve._id, toast));
    console.log("approved");
  }

  const rejectReq = (e) => {
    e.preventDefault();
    dispatch(verifyCompanyReject(reject._id, toast));
    console.log(reject._id);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(logoutAdmin(toast));
  }
  return (
    <>
      <nav class="navbar navbar-dark navbar-expand-md pr-3 pl-3 landing_page_navbar">
        <div class="container-fluid">
          <Link to="/dashboard" class="navbar-brand px-2 navbar_title">Fakeproductdetection</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="nav navbar-nav ms-auto px-2 links">
              <li class="nav-item"><Link class="nav-link px-3 navbar_logout"><Button onClick={submitHandler} variant='contained' color='error' endIcon={<LogoutIcon />}>Logout</Button></Link></li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container-fluid">
        <div class="card my-5 shadow table_card">
          <div class="card-body">

            <table class="table">
              <thead>
                <tr class="table-dark">
                  <th scope="col">CIN</th>
                  <th scope="col">Company Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">IsVerified</th>
                  <th scope="col">Approve</th>
                  <th scope="col">Reject</th>
                </tr>
              </thead>
              <tbody>

                
                  {
                    companies && companies.map((company, index) => 
                      <>
                      {
                        String(company.isVerified) == "false" && 
                        <tr>
                        <th scope="row">{company.CIN}</th>
                        <td>{company.name}</td>
                        <td>{company.email}</td>
                        <td>{String(company.isVerified)}</td>
                        <td>
                          <form onSubmit={approveReq}>
                            <Button onClick={() => setApprove(company)} type="submit" style={{ color: "green" }}><CheckCircleIcon /></Button>
                          </form>
                        </td>
                        <td>
                          <form onSubmit={rejectReq}>
                            <Button onClick={() => setReject(company)} type="submit" style={{ color: "red" }}><CancelIcon /></Button>
                          </form>
                        </td>
                        </tr>
                      }
                      
                      </>
                    )
                  }

                

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminDashboard