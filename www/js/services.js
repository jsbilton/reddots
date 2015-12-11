// Services provide data

(function() {
  'use strict';
  
  angular
  .module('starter')
  .factory('ReddotService', function ($http) { //Google API
    var urlOpts = {
        baseUrl: "http://tiny-tiny.herokuapp.com/collections/reddots";
        apiKey: "",
        method: "",
        format: "json",
        buildUrl: function () {
          // body...
        }

      }
  } )





}());
