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

module.exports = router;
