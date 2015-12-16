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

///////////////////////////////////////
// CREATE CUSTOMER ACCOUNT ON SIGNUP
///////////////////////////////////////

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

/////////////////////////////////////////////////////////////////////////////////////
// SHOW CUSTOMER THE MAP **ON SIGNUP OR LOGIN **IDEALLY WITH NEARBY STORE LOCATIONS
/////////////////////////////////////////////////////////////////////////////////////

app.get('/storelocations', function(req,res) {
  var locations = Locations.find({},function(err,data) {
    if(err) {
      console.log(err);
      next(err);
    }

    res.send(data);
  });
});

//////////////////////////////////////////
// CREATE STORE OWNER ACCOUNT ON SIGNUP
//////////////////////////////////////////

app.post('/createowner', function(req,res,next) {
  console.log("Request From Client",req.body);
  var store = new Store(req.body);

  store.save(function(err,data) {
    if (err) {
      console.log(err);
      next(err);
    }
    res.send(store);
  });
});

////////////////////////////////////////////////////////////////////////
// ON SIGNUP OR LOGIN, SHOW STORE OWNER THE STOREVIEW WITH EDITABLE
// INVENTORY LIST, SAME VIEW FOR LOGGED IN CUSTOMERS BUT NOT EDITABLE.
////////////////////////////////////////////////////////////////////////

app.get('/storeview', function(req,res) {
  var storeview = Storeview.find({},function(err,data) {
    if(err) {
      console.log(err);
      next(err);
    }

    res.send(data);
  });
});

///////////////////////////////////////////////////////////////////
// SHOW EDITABLE INDIVIDUAL PRODUCT PAGE TO LOGGED IN STORE OWNER.
// SHOW NON EDITABLE INDIVIDUAL PRODUCT PAGE TO LOGGED IN CUSTOMER.
///////////////////////////////////////////////////////////////////

app.get('/storeview/:productname', function(req,res) {
  var storeview = Storeview.find({author: req.params.productname}, function(err,data) {
    if(err) next(err);

    if(data === null) {
      console.log('Could not find a product of that name');
    }
    console.log(req.body);
    console.log("FOUND PRODUCTS" + req.params.productname + data);
    res.send(data);
  });
});

http.listen(port);
console.log('WE ARE RUNNING ON PORT:' + port);
