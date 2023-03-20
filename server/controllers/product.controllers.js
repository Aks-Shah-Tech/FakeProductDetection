const Product = require("../models/Product.model");

exports.registerProduct = async (req, res) => {
    try {
        const {
            name,
            price,
            description,
            category,
            retailerId
        } = req.body;
        const company = req.company;
        const newProduct = new Product({
            name,
            price,
            description,
            category,
            retailerId,
            companyId: company._id
        });
        await newProduct.save();
        res.status(200).json({
            success: true,
            product: newProduct,
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
};

exports.getProductById = async (req, res) => {
    try {
        const company = req.company;
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not exists",
            });
        }
        if (product.companyId !== company._id) {
            return res.status(401).json({
                success: false,
                message: "You are not authorized to view this Product"
            })
        }

        return res.status(200).json({
            success: true,
            product,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
};

exports.getProductByIdForQr = async (req, res) => {
    try {
        let {
            id
        } = req.params;
        if (id.length !== 24) {
            return res.status(400).json({
                success: false,
                message: 'Fake Product Found!'
            })
        }
        const product = await Product.findById(id);
        if (!product) {
            return res.status(400).json({
                success: false,
                message: 'Fake Product Found!'
            })
        }
        return res.status(200).json({
            success: true,
            product,
            message: "Product Exist, Please Verify the Retailer Code Now."
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}



exports.getAllProducts = async (req, res) => {
    try {
        const company = req.company;
        const products = await Product.find({
            companyId: company._id
        });
        if (!products) {
            return res.status(404).json({
                success: false,
                message: 'No Product Avialable'
            })
        }
        return res.status(200).json({
            success: true,
            products,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
};