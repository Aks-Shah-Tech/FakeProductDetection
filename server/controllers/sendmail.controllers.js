const {
    sendEmail
} = require('../middlewares/sendEmail.js');
const Company = require("../models/Company.model");

exports.sendmailApprove = async (req, res) => {
    try {
        // const company = await Company.findOne({
        //     email: req.body.email
        // });

        // if (!company) {
        //     return res.status(404).json({
        //         success: false,
        //         message: "Company not found",
        //     })
        // }

        const message = `Your company registration has been approved.`;

        try {
            await sendEmail({
                email: req.body.email,
                subject: "Company Registration",
                message,
            })

            res.status(200).json({
                success: true,
                message: `Email sent to ${req.body.email}`,
            })


            // Company.updateOne({
            //     CIN: company.CIN
            // }, {
            //     $set: {
            //         isVerified: true
            //     }
            // })

            // await company.save();

        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

exports.sendmailReject = async (req, res) => {
    try {
        // const company = await Company.findOne({
        //     email: req.body.email
        // });

        // if (!company) {
        //     return res.status(404).json({
        //         success: false,
        //         message: "Company not found",
        //     })
        // }

        const message = `Your company registration has been rejected.`;

        try {
            await sendEmail({
                email: req.body.email,
                subject: "Company Registration",
                message,
            })

            res.status(200).json({
                success: true,
                message: `Email sent to ${req.body.email}`,
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}