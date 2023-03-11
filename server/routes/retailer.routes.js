const express = require('express');
const { registerRetailer } = require('../controllers/retailer.controllers');
const router = express.Router();

router.route('/register/retailer').post(registerRetailer);



module.exports = router;