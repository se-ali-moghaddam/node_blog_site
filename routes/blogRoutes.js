const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

router.get('/add', blogController.addBlog);
router.get('/:id', blogController.getBlog);

module.exports = router;