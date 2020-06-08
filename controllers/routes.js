const express = require('express');
const router = express.Router();

const Product = require('../models/products');

// GET index
router.get('/', async (req, res) => {
    try {
        const allProducts = await Product.find({});
        res.status(200).json(allProducts);
    } catch (error) {
        res.status(400).json(error);
    }
})

// POST new
router.post('/', async (req, res) => {
    try {
        const newProduct = await Product.create(req.body);
        res.status(200).json(newProduct);
    } catch (error) {
        res.status(400).json(error);
    }
})

// DELETE
router.delete('/:id', async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedProduct);
    } catch (error) {
        res.status(400).json(error);
    }
})

// PUT update
router.put('/:id', async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(400).json(error);
    }
})

module.exports = router;