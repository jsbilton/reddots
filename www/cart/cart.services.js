angular

.module('cart')
  .factory('CartService', function($http) {
        var url = 'https://tiny-tiny.herokuapp.com/collections/reddot';

        var getCartItems = function() {
          return $http.get(url);
        };

        var newCartItem = function(item) {
          return $http.post(url, item);
        };

        var selectItemID = function(item) {
          return item._id;
        };

        var deleteCartItem = function(item) {
          var id = selectItemID(item);
          var url = 'https://tiny-tiny.herokuapp.com/collections/reddot/' + id;
          return $http.delete(url, item);
        };

        return {
          getCartItems: getCartItems,
          selectItemID: selectItemID,
          deleteCartItem: deleteCartItem,
          newCartItem: newCartItem

        };



});
