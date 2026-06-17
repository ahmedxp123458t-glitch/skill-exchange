const express = require('express');
const router = express.Router();
const SkillListing = require('../models/SkillListing');

router.post('/', async (req, res) => {
  try {
    const listing = new SkillListing(req.body);
    await listing.save();
    res.status(201).json(listing);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const filter = {};
    if (req.query.skill) filter.skill = new RegExp(req.query.skill, 'i');
    if (req.query.level) filter.level = req.query.level;
    const listings = await SkillListing.find(filter).populate('userId');
    res.json(listings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
