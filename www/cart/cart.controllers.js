angular
  .module('cart')
  .controller('CartController', function ($scope, CartService, $stateParams) {
    var vm = this;
    $scope.cart = CartService.getCartItems();

    if($stateParams.favId) {
      vm.cartDetail = CartService.getCart($stateParams.cartId);

    }
// //Gets all store data
//      $scope.fromStore = function(liquor){
//          CartService.getItems(liquor).then(function(items){
//          $scope.items = items;
//          $location.path("/store");
//        });
//      };
//      CartService.getItems('liquor').then(function(items){
//      $scope.items = items;
//     });

//Get Cart Data
          CartService.getCartItems().success(function(cartItems){
            $scope.cartItems = cartItems;
          });

//Remove Item from Cart
          $scope.removeFromCart = function(item){
           CartService.removeFromCart(item);
         };

//Post and add item to cart
          $scope.addItem = function(item){
            CartService.addToCart(item);
            items.data.push({
            title: item.title

          });


          };



});
