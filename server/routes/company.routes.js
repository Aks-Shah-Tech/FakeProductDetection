const express = require('express');
const { registerCompany } = require('../controllers/company.controllers');
const router = express.Router();

router.route('/register/company').post(registerCompany);



module.exports = router;