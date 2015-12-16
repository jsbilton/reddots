angular
    .module('reddots.services', [])
    .factory('CustomerService', function ($http) {
      var url = '/createcustomer';

      function createCustomer() {
        return $http.get('/storelocations');
      }

      function sendStorelocations(storelocations) {
        return $http.post(url, storelocations);
      }

      function getStore(name) {
        return $http.get('/store/' + name);
      }

      return {
        sendStorelocations: sendStorelocations,
        getStorelocations: getStorelocations,
        getStore: getStore
      };
    });
