const Product = require("../models/Product.model");

exports.verifyQRCode = async (req, res) => {
    try {
        const {qrCode} = req.body;
        let product = await Product.findOne({ _id: qrCode });
        if(!product) {
            return res.status(400).json({
                success: false,
                message: "Product does not exists"
            });
        }
        res.status(200).json({
            success: true,
            message: "Product Exists",
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
};
