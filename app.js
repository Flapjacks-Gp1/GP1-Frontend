var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/signup', function (req, res) {
    res.render('signup');
});

app.post('/signup', function (req, res) {

});

app.get('/login', function (req, res) {
    res.render('login');
});

app.get('/events', function (req, res) {
    res.render('events/index');
});

app.get('/events/create', function (req, res) {
    res.render('events/create');
});

app.use(express.static('public'));

app.listen(8080);
