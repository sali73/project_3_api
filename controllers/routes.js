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
router.delete('/:id', (req, res) => {
    res.send('Delete');
})

// PUT update
router.put('/:id', (req, res) => {
    res.send('Update');
})

module.exports = router;