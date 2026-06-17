const express = require('express');
const router = express.Router();
const SkillRequest = require('../models/SkillRequest');

router.post('/', async (req, res) => {
  try {
    const sr = new SkillRequest(req.body);
    await sr.save();
    res.status(201).json(sr);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const filter = {};
    if (req.query.userId) {
      filter.$or = [{ fromUserId: req.query.userId }, { toUserId: req.query.userId }];
    }
    const requests = await SkillRequest.find(filter).populate('fromUserId toUserId');
    res.json(requests);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const sr = await SkillRequest.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(sr);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
