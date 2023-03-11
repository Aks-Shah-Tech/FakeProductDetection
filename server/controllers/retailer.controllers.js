const Retailer = require('../models/Retailer.model.js');

exports.registerRetailer = async (req, res) => {
    try {
        const {
            name,
            email,
            password
        } = req.body;
        const newRetailer = new Retailer({
            name,
            email,
            password
        });
        await newRetailer.save();
        res.status(200).json({
            success: true,
            retailer: newRetailer,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
};