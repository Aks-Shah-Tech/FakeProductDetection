const Company = require('../models/Company.model');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin.model');

exports.isAuthenticated = async (req, res, next) => {
    try {
        const {
            token
        } = req.cookies;
        if (!token) {
            return res.status(401).json({
                message: 'Please login first'
            });
        }

        const decoded = await jwt.verify(token, process.env.JWT_SECRET);

        req.company = await Company.findById(decoded._id);

        next();
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
};

exports.isAdminAuthenticated = async (req, res, next) => {
    try {
        const {
            adminToken
        } = req.cookies;
        if (!adminToken) {
            return res.status(401).json({
                message: 'Please login first'
            });
        }

        const decoded = await jwt.verify(adminToken, process.env.JWT_SECRET_ADMIN);

        req.admin = await Admin.findById(decoded._id);

        next();
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
};