angular
  .module('cart')
  .controller('CartController', function ($scope, CartService, $stateParams) {
    var vm = this;
    $scope.cart = CartService.getCartItems();

    if($stateParams.favId) {
      vm.cartDetail = CartService.getCart($stateParams.cartId);

    }



  });
