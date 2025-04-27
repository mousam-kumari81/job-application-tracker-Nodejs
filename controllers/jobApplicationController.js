const JobApplication = require('../models/JobApplication');

// Get all job applications for a user
exports.getApplications = async (req, res) => {
  try {
    const applications = await JobApplication.find({ user: req.user._id });
    res.json(applications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a new job application
exports.addApplication = async (req, res) => {
  const { company, position, status, notes } = req.body;
  const newApplication = new JobApplication({ company, position, status, notes, user: req.user._id });

  try {
    const savedApplication = await newApplication.save();
    res.status(201).json(savedApplication);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a job application
exports.updateApplication = async (req, res) => {
  try {
    const updatedApplication = await JobApplication.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      req.body,
      { new: true }
    );
    res.json(updatedApplication);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a job application
exports.deleteApplication = async (req, res) => {
  try {
    await JobApplication.findOneAndDelete({ _id: req.params.id, user: req.user._id });
    res.json({ message: 'Application deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};