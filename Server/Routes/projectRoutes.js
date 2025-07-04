const express = require('express');
const router = express.Router();
const { getProjects, addProject, deleteProject } = require('../Controllers/projectController');

router.get('/', getProjects);
router.post('/', addProject);
router.delete('/:id', deleteProject);

module.exports = router;
