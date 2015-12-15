var express = require('express');
var port = process.env.PORT || 3001;
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
var App = require('./app');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

//Mongo Client
var mongoose = require('mongoose');
var mongoConfig = process.env.MONGOLAB_URI || process.env.MONGO_URI || 'mongodb://localhost:27017/test';

mongoose.connect(mongoConfig);

mongoose.connection.on('error', function() {
  console.error('MongoDB Connection Error. Please make sure that MongoDB is running.');
});

app.use(express.static(__dirname + "/www"));

app.post('/createcustomer', function(req,res,next) {
  console.log("Request From Client", req.body);
  var customer = new Customer(req.body);

  customer.save(function(err,data) {
    if (err) {
      console.log(err);
      next(err);
    }
    res.send(customer);
  });
});

app.get('/locations', function(req,res) {
  var locations = Locations.find({},function(err,data) {
    if(err) {
      console.log(err);
      next(err);
    }

    res.send(data);
  });
});

app.post('/createowner', function(req,res,next) {
  console.log("Request From Client",req.body);
  var owner = new Owner(req.body);

  owner.save(function(err,data) {
    if (err) {
      console.log(err);
      next(err);
    }
    res.send(owner);
  });
});

app.get('/storeview', function(req,res) {
  var storeview = Storeview.find({},function(err,data) {
    if(err) {
      console.log(err);
      next(err);
    }

    res.send(data);
  });
});

http.listen(port);
console.log('WE ARE RUNNING ON PORT:' + port);
