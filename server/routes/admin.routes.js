const express = require("express");
const router = express.Router();
const {
  getAllRequest,
  approveRequest,
  rejectRequest,
  registerAdmin,
  loginAdmin,
  logout
} = require('../controllers/admin.controllers');
const { isAdminAuthenticated } = require("../middlewares/auth");


// Get all the Companies who are not verified
router.route("/viewRequests").get(isAdminAuthenticated ,getAllRequest); 
// Approve the Company
router.route("/approveRequest").put(isAdminAuthenticated, approveRequest);
// Rejects the Company request and Delete it from the Database
router.route("/rejectRequest").post(isAdminAuthenticated, rejectRequest);

router.route("/register").post(registerAdmin);

router.route("/login").post(loginAdmin);

router.route("/logout").get(isAdminAuthenticated, logout);

module.exports = router;