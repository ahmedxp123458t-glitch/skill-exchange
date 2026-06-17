const express = require('express');
const router = express.Router();
const Rating = require('../models/Rating');
const User = require('../models/User');

router.post('/', async (req, res) => {
  try {
    const rating = new Rating(req.body);
    await rating.save();
    const ratings = await Rating.find({ toUserId: req.body.toUserId });
    const avg = ratings.reduce((s, r) => s + r.score, 0) / ratings.length;
    await User.findByIdAndUpdate(req.body.toUserId, { rating: Math.round(avg * 10) / 10 });
    res.status(201).json(rating);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const filter = {};
    if (req.query.toUserId) filter.toUserId = req.query.toUserId;
    const ratings = await Rating.find(filter).populate('fromUserId toUserId');
    res.json(ratings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
