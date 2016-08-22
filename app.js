var express = require('express');
var app = express();
var ejs = require("ejs");
var bodyParser  = require("body-parser");
var expressLayouts = require("express-ejs-layouts");
var request = require("request");

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

app.post("/signup", function(req, res){
  res.render('users/signup');
  console.log(req.body);
});

app.get("/profile/:user_id", function(req, res){

res.render("users/userprofile");
  // var user_id = req.params.user_id;
  // console.log("user_id " +user_id );
  // var options = {
  //   url: "http://localhost:9000/api/users/" + user_id,
  //     headers: {
  //           "Authorization": "Bearer " + localStorage.getItem('jwt_token')
  //         }
  // }
  // // var url = "http://localhost:9000/api/users/" + user_id;
  // console.log("url " +url );
  // request(url, function(error, response, body){
  //   console.log("response.statusCode " + response.statusCode );
  //   if(!error && response.statusCode == 200){
  //
  //     var data = JSON.parse(body);
  //     console.log("data " + data );
  //     res.render("users/userprofile", {data: data});
  //   }
  // });
});

app.get("/events", function(req, res){
  var url = "http://localhost:9000/api/events";
  request(url, function(error, response, body){
    if(!error && response.statusCode == 200){
      var data = JSON.parse(body);
      res.render("events/findanevent", {data: data});
    }
  } );
  // var data = [{
  //   name: "testName",
  //   location: "testLocation",
  //   description: "testDesc"
  // }]
// res.render("events/findanevent", {data: data});

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
