import React, { useState, useEffect } from 'react';
import "./LandingPage.css";
import TextField from '@mui/material/TextField';
import qrcode from "../../images/qr.png";
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import { Link } from 'react-router-dom';
import QRCode from "qrcode.react";
import { useDispatch } from 'react-redux';
import { clearRetailer } from '../../Actions/Retailer';
import { clearProduct } from '../../Actions/Product';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    height: 500,
    bgcolor: 'transparent',
};

const styleRegister = {
    position: 'absolute',
    top: '44%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    height: 500,
    bgcolor: 'transparent',
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

    useEffect(() => {
        dispatch(clearProduct());
        dispatch(clearRetailer());
    }, [])

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
            <nav className="navbar navbar-dark navbar-expand-md pr-3 pl-3 landing_page_navbar">
                <div className="container-fluid">
                    <a className="navbar-brand px-2 navbar_title">Fakeproductdetection</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="nav navbar-nav ms-auto px-3 links">

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
            <div className="container my-5 home_container">
                <div className="card user_section_card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-7 user_section_content_col">
                                <p className="user_section_content">
                                    <span className="span1">Welcome to the Fake Product Detection Application</span>
                                    <br />
                                    <br />
                                    <span className="span2">
                                        We have 2 step verification process:
                                        <br />
                                        <LooksOneIcon /> Scan the QR code of the product.
                                        <br />
                                        <LooksTwoIcon /> Scan the Retailer QR code.
                                    </span>
                                    <span className="span3">
                                        <br />
                                        <br />
                                        If both the test passes the product is verified other wise you can raise the query directly to the company with just one click.
                                    </span>
                                </p>
                                <Link to="/verify/product">
                                    <button className="qrcode_btn">
                                        Scan QRCode
                                        <img src={qrcode} alt="scan-qrcode" className="qrcode_img" />
                                    </button>
                                </Link>

                            </div>
                            <div className="col-md-5 user_section_content_col_2">
                                <img src="https://cdn.dribbble.com/users/579758/screenshots/7727505/media/655769bd430477c4df30866d2c215223.jpg?compress=1&resize=1200x900&vertical=top" alt="product_detection" className="user_section_image" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card my-5 retailer_section_card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-5 col-sm-12">
                                <p className="my-2 retailer_section_content">
                                    Generate Retailer QRCode
                                </p>
                            </div>
                            <div className="col-md-4 col-sm-12" style={{ display: 'flex', justifyContent: 'end' }}>
                                <TextField value={rid} onChange={(e) => setRid(e.target.value)} id="outlined-basic" label="Enter RID" variant="standard" className='input_ret' sx={{ height: "3px", width: "100%" }} />
                            </div>
                            <div className="col-md-3 col-sm-12 retailer_section_content_col_2">

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