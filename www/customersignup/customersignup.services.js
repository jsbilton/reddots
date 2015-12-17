angular
    .module('customersignup', [])
    .factory('CustomerService', function ($http) {
      var url = '/signup';

      function createCustomer() {
        return $http.get('/storelocations');
      }

      function sendStorelocations(storelocations) {
        return $http.post(url, storelocations);
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
        sendStorelocations: sendStorelocations,
        getStorelocations: getStorelocations,
        getStore: getStore,
        addItem: addItem,
        getItems: getItems
      };

    });
