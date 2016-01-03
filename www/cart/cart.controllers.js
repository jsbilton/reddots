angular
  .module('cart')
  .controller('CartCtrl', function ($scope, CartService, $stateParams) {
    var vm = this;
    $scope.cartProducts = CartService.getCartProducts();

    if($stateParams.newCartProduct) {
      vm.cart = CartService.getProduct($stateParams.newCartProduct);
    }



  });
