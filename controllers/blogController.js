const blog = require('../models/blogModel');

const addBlog = (req, res) => {
    res.render('create-blog', {title: 'Create New Blog'});
};

const getBlog = (req, res) => {
    res.render('blog', {title: `Blog ${req.params.id}`});
};

module.exports = {
    addBlog,
    getBlog
}