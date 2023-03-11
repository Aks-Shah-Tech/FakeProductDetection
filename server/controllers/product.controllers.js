const Product = require("../models/Product.model");

exports.registerProduct = async (req, res) => {
    try {
        const {
            name,
            price,
            description
        } = req.body;
        const newProduct = new Product({
            name,
            price,
            description
        });
        await newProduct.save();
        res.status(200).json({
            success: true,
            product: newProduct,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
};

exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if(!product) {
            res.status(404).json({
                success: false,
                message: "Product not exists",
            });
        }
        res.status(200).json({
            success: true,
            product,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
};


exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        
        res.status(200).json({
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