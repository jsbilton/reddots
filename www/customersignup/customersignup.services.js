angular
    .module('customersignup')
    .factory('CustomerSignupService', function ($http, $rootScope) {
      var url = 'http://tiny-tiny.herokuapp.com/collections/reddot-customers';

      function createCustomer() {
      $http.post(url, newCustomer).then(function (res) {
        console.log("yaay, customer added!");
      });
        return $http.get('/map');
      }

      function sendStores(stores) {
        return $http.post(url, stores);
      }

      function getStores(stores) {
        return $http.get(url, stores);
      }

      function getStore(name) {
        return $http.get('/store/' + name);
      }

      var addItem = function(newItem){
        $http.post(url, newItem).then(function(res) {
          console.log(res);
        });
      };

      var getItems = function () {
        return $http.get(url);
      };

      return {
        createCustomer: createCustomer,
        sendStores: sendStores,
        getStores: getStores,
        getStore: getStore,
        addItem: addItem,
        getItems: getItems
      };

    });
