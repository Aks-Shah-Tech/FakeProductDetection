const express = require('express');
const verifyProduct = require('./routes/verifyProduct.routes.js');
const registerProduct = require('./routes/product.routes.js');
const registerCompany = require('./routes/company.routes.js');
const registerRetailer = require('./routes/retailer.routes.js');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();

if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config({path: "config/config.env"});
}

//using middlewares
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser()); 


//using routes
app.use('/api/v1', verifyProduct);
app.use('/api/v1', registerProduct);
app.use('/api/v1', registerCompany);
app.use('/api/v1', registerRetailer);

module.exports = app;