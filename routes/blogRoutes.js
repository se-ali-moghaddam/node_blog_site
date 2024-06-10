const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

router.get('/', (req, res) => {
    res.render('index', {title: 'Home'});
});

router.get('/blogs/add', blogController.addBlog);

router.get('/blog/:id', blogController.getBlog);

module.exports = router;