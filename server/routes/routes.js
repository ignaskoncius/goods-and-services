const express = require('express');
const GoodsOrServices = require('../models/post');
const router = express.Router();

// create new goods/service
router.post('/goodsServices/new', async (req, res) => {
  const newGoodsServices = new GoodsOrServices(req.body);
  try {
    const creatingNewGoodsServices = await newGoodsServices.save();
    res.json(creatingNewGoodsServices);
  } catch (error) {
    res.json(error);
  }
});

// get all goods/services
router.get('/allGoodsServices', async (req, res) => {
  try {
    const allGoodsServices = await GoodsOrServices.find();
    res.json(allGoodsServices);
  } catch (error) {
    res.status(500).json();
  }
});

// filter all items
router.get('/allGoodsServices/:filterValue', async (req, res) => {
  const filterBy = req.params.filterValue;
  try {
    const allGoodsServicesFromDb = await GoodsOrServices.find({ goodsServicesType: filterBy });
    res.json(allGoodsServicesFromDb);
  } catch (error) {
    res.status(500).json();
  }
});

// delete item
router.delete('/allGoodsServices/delete/:itemId', async (req, res) => {
  const idOfItemToDelete = req.params.itemId;
  try {
    const deleteResult = await GoodsOrServices.findByIdAndDelete(idOfItemToDelete);
    res.json(deleteResult);
  } catch (error) {
    res.status(500).json();
  }
});

module.exports = router;
