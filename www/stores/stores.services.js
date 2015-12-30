angular
  .module('stores')
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
      var product = new Product(data.products);
      product.details({productName: newProduct.name, productPrice: newProduct.price}, function (res) {
        console.log("response from db: ", res);
        newProduct.products = {
          productName: name[0],
          productPrice: price[0]
        };
        console.log(newProduct);
        products[productName] = productPrice;
        $http.post(url, newProduct).success(function (res) {
          console.log("NEW PRODUCT ADDED!");
        });
      });
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

angular
  .module('stores')
  .factory('ListFactory', function() {

    var list = [];
    var listStore = localStorage.getItem("list");
    if (listStore !== null && listStore !== '' && angular.isArray(angular.fromJson(listStore))) {
      list = angular.fromJson(listStore);
    }
    var listSrv = {
      setList: function(newList) {
        list = newList;
        localStorage.setItem("list", angular.toJson(list));
        return true;
      },
      getList: function() {
        if (list !== null) {
          return list;
        } else {
          return [];
        }
      }
    };
    return listSrv;
  });
