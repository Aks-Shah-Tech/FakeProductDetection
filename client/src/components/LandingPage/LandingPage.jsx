import React, { useState, useEffect } from 'react';
import "./LandingPage.css";
import TextField from '@mui/material/TextField';
import User from "../../images/user.png";
import qrcode from "../../images/qr.png";
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import { Link, useNavigate } from 'react-router-dom';
// import QRCode from "react-qr-code";
import QRCode from "qrcode.react";
import { useDispatch, useSelector } from 'react-redux';
import { clearRetailer } from '../../Actions/Retailer';
import { clearProduct } from '../../Actions/Product';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    height: 500,
    bgcolor: 'transparent',
    // border: '2px solid #000',
    // boxShadow: 24,
    // p: 2,
};

const styleRegister = {
    position: 'absolute',
    top: '44%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    height: 500,
    bgcolor: 'transparent',
    // border: '2px solid #000',
    // boxShadow: 24,
    // p: 2,
};

const style2 = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 3,
    display: 'flex',
    justifyContent: 'center'
};

const LandingPage = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(clearProduct());
        dispatch(clearRetailer());
    },[])

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [openLogin, setOpenLogin] = useState(false);
    const handleOpenLogin = () => setOpenLogin(true);
    const handleCloseLogin = () => setOpenLogin(false);

    const [openQr, setOpenQr] = useState(false);
    const handleOpenQr = () => setOpenQr(true);
    const handleCloseQr = () => setOpenQr(false);

    const [rid, setRid] = useState("");

    const downloadQRCode = () => {
        // Generate download with use canvas and stream
        const canvas = document.getElementById("qr-gen");
        const pngUrl = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
        let downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = `${rid}.png`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

    return (
        <div className="landing_page_container">
            <nav class="navbar navbar-dark navbar-expand-md pr-3 pl-3 landing_page_navbar">
                <div class="container-fluid">
                    <a class="navbar-brand px-2 navbar_title">Fakeproductdetection</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="nav navbar-nav ms-auto px-3 links">
                            {/* <li class="nav-item"><a class="nav-link px-3 navbar_login">Login</a></li> */}

                            <li className="nav-item px-3">
                                <Button onClick={handleOpenLogin} variant="contained" endIcon={<LoginIcon />}>Login</Button>
                                <Modal
                                    open={openLogin}
                                    onClose={handleCloseLogin}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style}>
                                        <Login />
                                    </Box>
                                </Modal>
                            </li>

                            {/* <li class="nav-item"><a class="nav-link px-3 navbar_signup">Signup</a></li> */}

                            <li className="nav-item">
                                <Button onClick={handleOpen} variant="contained" endIcon={<HowToRegIcon />}>Signup</Button>
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={styleRegister}>
                                        <Signup />
                                    </Box>
                                </Modal>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container my-5">
                <div class="card user_section_card">
                    <div class="card-body">
                        <div className="row">
                            <div className="col-md-7 user_section_content_col">
                                <p className="user_section_content">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, dignissimos. Ipsa nisi, atque nam illo, ut voluptas quaerat totam dolorum natus laudantium ratione quo dignissimos deserunt ab molestias adipisci inventore. Consectetur incidunt eveniet, dolorum aperiam nihil tempore mollitia officia vel fuga sed qui nulla vitae labore ipsum quia aliquam vero nemo? Magnam ut unde delectus quisquam maxime.
                                </p>
                                <Link to="/verify/product">
                                    <button className="qrcode_btn">
                                        Scan QRCode
                                        <img src={qrcode} alt="scan-qrcode" className="qrcode_img" />
                                    </button>
                                </Link>

                            </div>
                            <div className="col-md-5 user_section_content_col_2">
                                <img src="https://img.freepik.com/free-vector/water-contamination-detection-system-abstract-concept-illustration_335657-3772.jpg" alt="product_detection" className="user_section_image" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card my-5 retailer_section_card">
                    <div class="card-body">
                        <div className="row">
                            <div className="col-md-5 col-sm-12">
                                <p className="my-2 retailer_section_content">
                                    Generate Retailer QRCode
                                </p>
                            </div>
                            <div className="col-md-4 col-sm-12" style={{display: 'flex', justifyContent: 'end'}}>
                            <TextField value={rid} onChange={(e) => setRid(e.target.value)} id="outlined-basic" label="Enter RID" variant="standard" className='input_ret' sx={{height: "3px", width: "100%"}} />
                            </div>
                            <div className="col-md-3 col-sm-12 retailer_section_content_col_2">
                                {/* <input type="text" value={rid} onChange={(e) => setRid(e.target.value)} className="input_retailer" placeholder="Enter RID" />
                                <button onClick={handleOpenQr} className="generate_btn">Generate</button> */}
                                
                                <Button onClick={handleOpenQr} variant='contained' endIcon={<ArrowCircleRightIcon />}>Generate QRCode</Button>
                                <Modal
                                    open={openQr}
                                    onClose={handleCloseQr}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style2}>
                                        <div className="row">
                                            <div className="col-md-12 qrcode_col">
                                                <QRCode
                                                    id="qr-gen"
                                                    value={rid}
                                                    size={290}
                                                    style={{ height: "90%", width: "80%" }}
                                                    level={"H"}
                                                    includeMargin={true}
                                                />
                                            </div>
                                            <div className="col-md-12 download_btn_col">
                                                <Button type="button" onClick={downloadQRCode} variant="outlined">
                                                    Download QR Code
                                                </Button>
                                            </div>
                                        </div>
                                    </Box>
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage