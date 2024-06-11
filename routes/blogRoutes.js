const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

router.get('/add', blogController.addBlogGet);
router.post('/add', blogController.addBlogPost);
router.delete('/remove/:id', blogController.removeBlog);
router.get('/:id', blogController.getBlog);

module.exports = router;