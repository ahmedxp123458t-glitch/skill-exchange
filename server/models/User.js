const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  skills: [{ type: String }],
  bio: { type: String, default: '' },
  rating: { type: Number, default: 0 }
});

module.exports = mongoose.model('User', userSchema);
