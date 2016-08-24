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
  res.render('homepage', {
    title: 'Don\'t say we bo jio'
  });
});

app.get("/login", function(req, res){
  res.render('users/login', {
    title: 'Login'
  });
});

app.get("/signup", function(req, res){
  res.render('users/signup', {
    title: 'Signup'
  });
  console.log(req.body);
});

app.get("/profile/:user_id", function(req, res){
  // console.log(req.params.id);
  // var url = "https://jio-app.herokuapp.com/api/users/" + req.params.id;
  // request(url, function(error, response, body){
  //   if(!error && response.statusCode == 200){
  //     var data = JSON.parse(body);
  //     res.render("users/userprofile", {data: data});
  //   }
  // });
  res.render("users/show", {
    title: 'Welcome User'
  });
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
      res.render("events/index", {data: data, title: "Join an Event"});
    }
  });
});

app.get("/events-create", function(req, res){
  res.render("events/create", {
    title: 'Create an Event'
  });
});

app.get("/events-edit/:id", function(req, res){
  var url = "http://localhost:9000/api/events" + req.params.id;
 request(url, function(error, response, body){
   if(!error && response.statusCode == 200){
     var data = JSON.parse(body);
     res.render("events/edit", {data: data, title: "Edit" + data.name});
   }
 } );
});


app.get("/events/:id", function(req, res){
  var url = "http://localhost:9000/api/events" + req.params.id;
  request(url, function(error, response, body){
    if(!error && response.statusCode == 200){
      var data = JSON.parse(body);
      console.log(req.params.id);
      res.render("events/show", {data: data, title: data.name});
    }
  } );

})

//Server
app.set('port', (process.env.PORT || 7000));

app.listen(app.get('port'), function() {
  console.log('My express server is running at localhost', app.get('port'));
});

module.exports = app;
