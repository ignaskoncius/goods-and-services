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

module.exports = router;
