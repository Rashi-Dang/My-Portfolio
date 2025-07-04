const express = require('express');
const router = express.Router();
const { createOrUpdateResume, getResume } = require('../Controllers/resumeController');

// POST (create or update)
router.post('/', createOrUpdateResume); // actually does create + update humne controller m findone use kia age koi hoga to update krega nhi to create

// GET
router.get('/', getResume);

module.exports = router;
