const express = require('express');
const {verifyQRCode} = require('../controllers/verifyProduct.controllers.js');
const router = express.Router();

router.route('/verifyProduct').post(verifyQRCode);



module.exports = router;