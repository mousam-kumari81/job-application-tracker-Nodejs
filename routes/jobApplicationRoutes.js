const express = require('express');
const router = express.Router();
const jobApplicationController = require('../controllers/jobApplicationController');
const auth = require('../middleware/auth');

router.get('/', auth, jobApplicationController.getApplications);
router.post('/', auth, jobApplicationController.addApplication);
router.put('/:id', auth, jobApplicationController.updateApplication);
router.delete('/:id', auth, jobApplicationController.deleteApplication);

module.exports = router;