const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
app.listen(3000);

app.use(express.static('public'));
app.use(expressLayouts);

app.set('layout', './layouts/default-layout')
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {title: 'Home'});
});

app.get('/blog/:id', (req, res) => {
    res.render('blog', {title: `Blog ${req.params.id}`});
});