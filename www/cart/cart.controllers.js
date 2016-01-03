angular
  .module('cart')
  .controller('CartCtrl', function ($scope, CartService, $stateParams) {
    var vm = this;
    $scope.cartProducts = CartService.getCartProducts();

    if($stateParams.newCartProduct) {
      vm.cart = CartService.getProduct($stateParams.newCartProduct);
    }

    // $scope.getTotalPrice = function () {
    //   totalPrice = 0; //this is reading out to the total
    //   for (var i = 0; i < $scope.products.length; i++) {
    //     if ($scope.products[i].productPrice) {
    //       totalPrice += $scope.products[i].productPrice;
    //       console.log('what is total productPrice', totalPrice);
    //     }
    //   }
    //   $scope.totalPriceValue = totalPrice;
    // };


  });
