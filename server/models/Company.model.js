const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    CIN: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isVerified: {
        type: Boolean,
        default: false
    },
});


const Company = mongoose.model('Company', companySchema);

module.exports = Company;