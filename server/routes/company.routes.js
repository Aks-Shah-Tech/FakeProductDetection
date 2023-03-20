const express = require('express');
const { registerCompany, login, logout, getAllCompanies, fetchCompanyDetails } = require('../controllers/company.controllers');
const { sendmailApprove, sendmailReject } = require('../controllers/sendmail.controllers');
const { isAuthenticated } = require('../middlewares/auth');
const router = express.Router();

//Register the Company
router.route('/register/company').post(registerCompany);
//Login
router.route('/login/company').post(login);
//Logout
router.route('/logout/company').get(isAuthenticated,logout);
//Getting all the registered companies
router.route('/allCompanies').get(getAllCompanies);
// Gets the data of the Company from the Cookies
router.route('/fetchCompanyDetails').get(isAuthenticated, fetchCompanyDetails);



module.exports = router;