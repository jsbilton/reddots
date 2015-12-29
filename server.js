var path = require('path');
var async = require('async');
var bodyParser = require('body-parser');
var express = require('express');
var logger = require('morgan');
var mongoose = require('mongoose');
var config = require('./config');
var User = require('./models/User');
var authRoutes = require('./routes/auth');
var profileRoutes = require('./routes/profile');
var uploadRoutes = require('./routes/upload');
var role = require('./routes/roles');
var http = require('http');
var port = process.env.PORT || 3001;

mongoose.connect(config.MONGO_URI);
mongoose.connection.on('error', function() {
  console.error('MongoDB Connection Error. Please make sure that MongoDB is running.');
});

var app = express();

app.use(role.middleware());

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Force HTTPS on Heroku
if (app.get('env') === 'production') {
  app.use(function(req, res, next) {
    var protocol = req.get('x-forwarded-proto');
    protocol === 'https' ? next() : res.redirect('https://' + req.hostname + req.url);
  });
}
app.use(express.static(path.join(__dirname, 'www')));

// Routes
app.use('/auth', authRoutes);
app.use('/api', profileRoutes);
app.use('/api/uploads', uploadRoutes);


///////////////////////////////////////
// CREATE CUSTOMER ACCOUNT ON SIGNUP
///////////////////////////////////////

app.post('/customersignup', function(req,res,next) {
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

app.get('/map', function(req,res) {
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

app.post('/storesignup', function(req,res,next) {
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

app.get('/storeview/:storeId', function(req,res) {
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

app.listen(port, function() {
  console.log('WE ARE RUNNING ON PORT:' + port);
});
