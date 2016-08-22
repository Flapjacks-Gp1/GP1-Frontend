var express = require('express');
var app = express();
var ejs = require("ejs");
var bodyParser  = require("body-parser");
var expressLayouts = require("express-ejs-layouts");
var request = require('request');

app.use(bodyParser.urlencoded({extended: true}));

app.set("views", "./app/views");
app.set("view engine", "ejs");
app.use(expressLayouts);


app.use(express.static('./public'));

//routing

app.get("/", function(req, res){
  res.render('homepage');
});

app.get("/login", function(req, res){
  res.render('users/login');
});

app.post("/login", function(req, res){
});

app.get("/signup", function(req, res){
  res.render('users/signup');
  console.log(req.body);
});

app.get("/profile", function(req, res){
  res.render("users/userprofile");
});

app.get("/events", function(req, res){
  res.render("events/findanevent");
});

app.get("/events-create", function(req, res){
  res.render("events/createevent");
});

app.get("/events-edit", function(req, res){
  res.render("events/createevent");
});




//Server
app.set('port', (process.env.PORT || 7000));

app.listen(app.get('port'), function() {
  console.log('My express server is running at localhost', app.get('port'));
});

module.exports = app;
