angular

.module('cart')
  .factory('CartService', function($http) {
        var url = 'https://tiny-tiny.herokuapp.com/collections/reddot';

//Get Cart Items
        var getCartItems = function() {
          return $http.get(url);
        };

//Add Item to Cart
        var addToCart = function(item){
          $http.post(url, item).success(function(response){
          });
        };

//Remove Item from Cart
        var getID = function(item){
          console.log(item._id);
          return item._id;
        };
        var removeFromCart = function(item){
          var id = getID(item);
          $http.delete(url + "/" + id);
        };
        
//View Single Item
        var getSingleItem = function(item){
          url = 'http://tiny-tiny.herokuapp.com/collections/reddot';
          var id = getID(item);
          var dog = $http.get(url + "/"+ _id);
          console.log(dog);
        };

return {
        getCartItems : getCartItems,
        addToCart : addToCart,
        removeFromCart : removeFromCart,
        getSingleItem : getSingleItem
      };


});
