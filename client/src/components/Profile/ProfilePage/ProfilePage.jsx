import React from 'react';
import "./ProfilePage.css";
import { useSelector } from 'react-redux';

const ProfilePage = () => {
  const { company } = useSelector((state) => state.loginCompany);
  const { products } = useSelector((state) => state.getAllProducts);
  const { retailers } = useSelector((state) => state.getAllRetailers);
  return (
    <>
      {
        company && (
          <div className="container profile_container">
            <div className="card shadow profile_card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4 d-flex justify-content-center">
                    <img src="https://cdn-icons-png.flaticon.com/512/560/560216.png" alt="profile-image" className='my-3 profile_img' />
                  </div>
                  <div className="col-md-5 my-4">
                    <div className="row my-2">
                      <div className="col-md-12">
                        <p><b>CIN -</b>
                          <span className="company_details"> {company.CIN}</span>
                        </p>
                      </div>
                    </div>
                    <div className="row my-2">
                      <div className="col-md-12">
                        <p><b>Name -</b>
                          <span className="company_details"> {company.name}</span>
                        </p>
                      </div>
                    </div>
                    <div className="row my-2">
                      <div className="col-md-12">
                        <p><b>Email -</b>
                          <span className="company_details"> {company.email}</span>
                        </p>
                      </div>
                    </div>


                  </div>

                  <div className="col-md-3 my-2">
                    <div className="row my-2">
                      <div className="col-md-12 d-flex justify-content-center">
                        <p><b>Total Products</b> <br />
                          <div className="my-2 d-flex justify-content-center">
                            <span className="count">{products.length}</span>
                          </div>
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 d-flex justify-content-center">
                        <p><b>Total Retailers</b> <br />
                          <div className="my-2 d-flex justify-content-center">
                            <span className="count">{retailers.length}</span>
                          </div>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }

    </>
  )
}

export default ProfilePage