const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const blogRoutes = require('./routes/blogRoutes');
const mongoose = require('mongoose');

const mongoDbUrl = 'mongodb+srv://db_admin:test1234@myfirstcluster.lypywih.mongodb.net/node_blog_site_exam?retryWrites=true&w=majority&appName=MyFirstCluster';

const app = express();

mongoose.connect(mongoDbUrl)
    .then(() => {
        console.log('Connected to MongoDb :)');
        app.listen(3000);
        console.log('Listening on port 3000');
    })
    .catch(err => {
        console.log(err);
    });

app.use(express.static('public'));
app.use(expressLayouts);

app.set('layout', './layouts/default-layout');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {title: 'Home'});
});

app.use('/blogs', blogRoutes);