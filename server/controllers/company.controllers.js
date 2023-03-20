const Company = require("../models/Company.model");

exports.registerCompany = async (req, res) => {
    try {
        const {
            CIN,
            name,
            email,
            password
        } = req.body;

        let company = await Company.findOne({
            email
        });
        if (company) {
            return res.status(400).json({
                success: false,
                message: "company already exists"
            });
        }

        company = await Company.create({
            CIN,
            name,
            email,
            password
        })
        res.status(201).json({
            success: true,
            message: "Your company registration request has been sent to admin."
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
};

exports.login = async (req, res) => {
    try {
        const {
            email,
            password
        } = req.body;

        const company = await Company.findOne({
            email
        });
        if (!company) {
            return res.status(400).json({
                success: false,
                message: "company does not exists"
            });
        }

        const verify = company.isVerified == true;

        if (!verify) {
            return res.status(400).json({
                success: false,
                message: "Your account has not been verified yet."
            });
        }

        const isMatch = await company.matchPassword(password);

        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Incorrect Credentials"
            });
        }

        const token = await company.generateToken();

        const options = {
            expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
            httpOnly: true
        }

        res.status(201).cookie("token", token, options).json({
            success: true,
            company,
            token,
            message: "Login Success"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

exports.logout = async (req, res) => {
    try {
        res
            .status(200)
            .cookie("token", null, {
                expires: new Date(Date.now()),
                httpOnly: true
            })
            .json({
                success: true,
                message: "Logged out",
            })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

exports.getAllCompanies = async (req, res) => {
    try {
        const companies = await Company.find({});

        res.status(200).json({
            success: true,
            companies,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
};

exports.fetchCompanyDetails = async (req, res) => {
    try {
        // if (!req.company) {
        //     return res.status(400).json({
        //         success: false,
        //         message: "Unable to fetch"
        //     });
        // }
        // return res.status(200).json({
        //     success: true,
        //     company: req.company,
        // })

        const company = await Company.findOne(req.company._id);

        res.status(200).json({
            success: true,
            company,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
};