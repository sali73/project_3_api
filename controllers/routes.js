const express = require('express');
const router = express.Router();

const products = require('../models/products');

////////////////// 
//Index Route
//////////////////
router.get('/', async (req, res) => {
   try {
       const allProducts = await products.find({});
       res.status(200).json(allProducts);
   } catch (error) {
       res.status(400).json(error);
   }
});

//////////////////
// New Route
//////////////////
router.post('/', async (req, res) => {
   try {
       const newProduct = await products.create(req.body);
       res.status(200).json(newProduct);
   } catch (error) {
       res.status(400).json(error);
   }
});

//////////////////
// Delete Route
//////////////////
router.delete('/:id', async (req, res) => {
   try {
       const deletedProduct = await products.findByIdAndRemove(req.params.id);
       res.status(200).json(deletedProduct);
   } catch (error) {
       res.status(400).json(error);
   }
});

//////////////////
// Edit Route
//////////////////
router.put('/:id', async (req, res) => {
   try {
       const updatedProduct = await products.findByIdAndUpdate(
           req.params.id,
           req.body,
           { new: true }
       );
       res.status(200).json(updatedProduct);
   } catch (error) {
       res.status(400).json(error);
   }
});

module.exports = router;
