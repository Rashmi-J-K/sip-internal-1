// routes/foods.js
const express = require('express');
const router = express.Router();
const Food = require('../models/Food');

// Fetch all food items
router.get('/', async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Search for food items by keyword
router.get('/search', async (req, res) => {
  try {
    const keyword = req.query.keyword;
    const foods = await Food.find({ name: { $regex: keyword, $options: 'i' } });
    res.json(foods);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
