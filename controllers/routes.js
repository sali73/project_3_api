const express = require('express');
const router = express.Router();
const products = require('../models/products');
 
/////////////////// 
//Index Route
//////////////////
router.post('/', async (req, res) => {
   try {
       const createproducts= await products.create(req.body);
       res.status(200).json(createproducts);
   } catch (error) {
       res.status(400).json(error);
   }
});
router.get('/', async (req, res) => {
   try {
       const gitproducts = await products.find({});
       res.status(200).json(gitproducts);
   } catch (error) {
       res.status(400).json(error);
   }
});
 
///////////////////
//Delete Route
///////////////////
router.delete('/:id', async (req, res) => {
   try {
       const deleteproducts = await products.findByIdAndRemove(req.params.id);
       res.status(200).json(deleteproducts);
   } catch (error) {
       res.status(400).json(error);
   }
});
 
 ///////////////////
//Edit Route
///////////////////
router.put('/:id', async (req, res) => {
   try {
       const updateproducts = await products.findByIdAndUpdate(
           req.params.id,
           req.body,
           { new: true }
       );
       res.status(200).json(updateproducts);
   } catch (error) {
       res.status(400).json(error);
   }
});
 
 
module.exports = router;
