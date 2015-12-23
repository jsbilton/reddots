angular
  .module('storesignup')
  .factory('StoreSignupService', function($http, $rootScope) {
    var url = '#/app/storesignup';

    function createStore() {
      return $http.get('/storeview');
    }

    function sendStore(store) {
      return $http.post(url, store);
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
      createStore: createStore,
      sendStore: sendStore,
      getStore: getStore,
      addItem: addItem,
      getItems: getItems
    };

  });
