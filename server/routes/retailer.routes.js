const express = require("express");
const {
    registerRetailer,
    QRcodeFromretID,
    getAllRetailer,
    deleteRetailer,
    getRetailerById,
    verifyRetailer
} = require('../controllers/retailer.controllers')
const {
    isAuthenticated
} = require('../middlewares/auth.js')
const router = express.Router();

// Creation of retailer by the Company who is verified
router.route("/register/retailer").post(isAuthenticated, registerRetailer);

// Retailer can get the QR code from the Retatiler ID.
router.route("/getQRcodeFromretID").get(QRcodeFromretID);

// Getting all the retailers Registerd by the Company
router.route('/getAllRetailer').get(isAuthenticated, getAllRetailer)

// Company can delete the Retailer created by them
router.route('/deleteRetailer').post(isAuthenticated, deleteRetailer)

// Company can fetch the details of retailer from Id
router.route('/getretailerbyId').post(isAuthenticated, getRetailerById)

// For Retailer Verification 
router.route('/verify/retailer/:id').get(verifyRetailer);

module.exports = router;