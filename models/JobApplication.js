const mongoose = require('mongoose');

const JobApplicationSchema = new mongoose.Schema({
  company: { type: String, required: true },
  position: { type: String, required: true },
  status: { type: String, default: 'Applied' },
  appliedDate: { type: Date, default: Date.now },
  notes: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Link to User
});

module.exports = mongoose.model('JobApplication', JobApplicationSchema);