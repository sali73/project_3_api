const express = require('express');
const router = express.Router();

const Product = require('../models/products');

// GET index
router.get('/', (req, res) => {
    res.send('Index');
})

// POST new
router.post('/', (req, res) => {
    res.send('New');
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