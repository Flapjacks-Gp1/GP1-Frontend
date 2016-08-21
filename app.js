var express = require('express');
var app = express();
var ejs = require("ejs");
var bodyParser  = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

//routing

app.get("/", function(req, res){
  res.render("homepage");
});











//Server
app.set('port', (process.env.PORT || 7000));

app.listen(app.get('port'), function() {
  console.log('My express server is running at localhost', app.get('port'));
});

module.exports = app;
