const Company = require("../models/Company.model");

exports.registerCompany = async (req, res) => {
    try {
        const {
            CIN,
            name,
            email,
            password,
        } = req.body;
        const newCompany = new Company({
            CIN,
            name,
            email,
            password
        });
        await newCompany.save();
        res.status(200).json({
            success: true,
            company: newCompany,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
};