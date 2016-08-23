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
app.post("/signup", function(req, res){
  res.render('users/signup');
  console.log(req.body);
});

app.get("/profile/:user_id", function(req, res){
  // console.log(req.params.id);
  // var url = "http://localhost:9000/api/users/" + req.params.id;
  // request(url, function(error, response, body){
  //   if(!error && response.statusCode == 200){
  //     var data = JSON.parse(body);
  //     res.render("users/userprofile", {data: data});
  //   }
  // });
  res.render("users/userprofile");
});

//Removed the user edit page as it was causing issues due to the lack of autopopulate

// app.get("/useredit/:user_id", function(req, res){
//   res.render("users/editprofile");
// });

app.get("/events", function(req, res){
  var url = "http://localhost:9000/api/events";
  request(url, function(error, response, body){
    if(!error && response.statusCode == 200){
      var data = JSON.parse(body);
      res.render("events/findanevent", {data: data});
    }
  });
});

app.get("/events-create", function(req, res){
  res.render("events/createevent");
});

app.get("/events-edit/:id", function(req, res){
  res.render("events/editevent");
});

app.get("/events/:id", function(req, res){
  var url = "http://localhost:9000/api/events/" + req.params.id;
  request(url, function(error, response, body){
    if(!error && response.statusCode == 200){
      var data = JSON.parse(body);
      res.render("events/viewevent", {data: data});
    }
  } );

})

//Server
app.set('port', (process.env.PORT || 7000));

app.listen(app.get('port'), function() {
  console.log('My express server is running at localhost', app.get('port'));
});

module.exports = app;
