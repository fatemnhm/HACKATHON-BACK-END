const express = require('express')
const verifyToken = require('../middleware/verify-token')
const Product = require('../models/products')
const router = express.Router()
require('dotenv').config();



router.post('/', async (req, res) => {
    try {
        req.body.author = req.user._id
        const product = await  Product.create(req.body)
        Product._doc.author = req.user
        res.status(201).json(product)
    } catch (error) {
        res.status(500).json(error)
    }
})

// INDEX - GET ALL THE ProductS - I will do it tomorrow
router.get('/', async(req, res) => {
    try {
        const products = await Product.find({})
        .populate('author')
        .sort({createdAt:'desc'});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json(error);
    }
})
