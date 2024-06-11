const Blog = require('../models/blogModel');

const addBlogGet = (req, res) => {
    res.render('create-blog', {title: 'Create New Blog'});
};

const addBlogPost = (req, res) => {
    const blog = new Blog(req.body);
    blog.save(req.body)
        .then(() => res.redirect('/'))
        .catch(err => console.log(err));
};

const getBlog = (req, res) => {
    Blog.findById(req.params.id)
        .then(result => {
            res.render('blog', {title: `Blog ${result.title}`, result});
        })
        .catch();
};

const removeBlog = (req, res) => {
    Blog.findByIdAndDelete(req.params.id)
        .then(result => {
            res.json({
                redirect : '/'
            });
        })
        .catch(err => console.log(err));
};

module.exports = {
    addBlogGet,
    addBlogPost,
    getBlog,
    removeBlog
}