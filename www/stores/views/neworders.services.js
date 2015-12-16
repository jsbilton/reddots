angular
    .module('reddots.services', [])
    .factory('NewordersCtrl', function ($http) {
      var url = '/neworders';
      function getStorelocations() {
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
