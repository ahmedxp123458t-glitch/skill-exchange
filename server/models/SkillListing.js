const mongoose = require('mongoose');

const skillListingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  skill: { type: String, required: true },
  description: { type: String, default: '' },
  level: { type: String, enum: ['beginner', 'intermediate', 'advanced'], default: 'beginner' }
});

module.exports = mongoose.model('SkillListing', skillListingSchema);
