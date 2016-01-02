angular
  .module('cart')
  .config(['localStorageServiceProvider', function(localStorageServiceProvider){
  localStorageServiceProvider.setPrefix('ls');
}])
  .factory('CartService', function ($http, $rootScope) {
    var url = 'http://tiny-tiny.herokuapp.com/collections/reddot-cart';

    var getCartProducts = function () {
      return $http.get(url);
    };

    var getProducts = function(id, products) {
      return $http.get(url + "/" + id + products);
    };

    var addToCart = function(id) {
      return $http.get(url + "/" + id);
    };
//added this for the customer button to direct to checkout view  
    var custCheckOut = function(id, products) {
      return $http.get(url + "/" + id);
    };
    return {
      getProducts: getProducts,
      getCartProducts: getCartProducts,
      addToCart: addToCart,
      custCheckOut: custCheckOut
    };
  });
