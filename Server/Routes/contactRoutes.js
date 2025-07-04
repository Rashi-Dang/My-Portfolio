const express = require('express');
const router = express.Router();
const { createContact } = require('../Controllers/contactController');

// @route   POST /api/contact
// @desc    Save contact message
// @access  Public
router.post('/', createContact);

module.exports = router;
