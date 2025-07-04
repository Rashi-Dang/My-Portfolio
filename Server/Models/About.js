const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
  bio: { type: String, required: true },
  skills: [String], // e.g., ["HTML", "CSS", "React"]
});

module.exports = mongoose.model('About', aboutSchema);
