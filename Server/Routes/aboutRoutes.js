const express = require('express');
const router = express.Router();
const { getAbout, updateAbout } = require('../Controllers/aboutController');

router.get('/', getAbout);
router.post('/', updateAbout); // or put()

module.exports = router;
