angular
  .module('stores')
  .config(['localStorageServiceProvider', function(localStorageServiceProvider){
  localStorageServiceProvider.setPrefix('ls');
}])
  .factory('StoresService', function ($http, $rootScope) {
    var url = 'http://tiny-tiny.herokuapp.com/collections/reddot-stores';

    var getStores = function () {
      return $http.get(url);
    };

    var createStore = function (newStore) {
      var geocoder = new google.maps.Geocoder();
      geocoder.geocode({address: newStore.address}, function (res) {
        console.log("response from google: ", res);
        newStore.coords = {
          latitude: res[0].geometry.location.lat(),
          longitude: res[0].geometry.location.lng(),
        };
        console.log(newStore);
        $http.post(url, newStore).success(function (res) {
          console.log("yaay, store created!");
        });
      });
    };

    var getStore = function(id) {
      return $http.get(url + "/" + id);
    };

    var deleteStore = function (removeStore) {
      console.log(removeStore);
      $http.delete(url, removeStore).success(function (res) {
        console.log("yaay, store deleted!");
      });
    };

    var addProduct = function (newProduct) {
      var data = [];
      data.map(function(el) {
        var products = el;
        products.productName = productName;
        products.productPrice = productPrice;
      });
        $http.post(url, products).then(function (res) {
          console.log("NEW PRODUCT ADDED!");
      });
      return products;
    };

    var getProducts = function(id, products) {
      return $http.get(url + "/" + id + products);
    };

    return {
      getStores: getStores,
      getStore: getStore,
      createStore: createStore,
      deleteStore: deleteStore,
      addProduct: addProduct,
      getProducts: getProducts
    };
  });
