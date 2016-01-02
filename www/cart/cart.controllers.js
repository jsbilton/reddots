angular
  .module('cart')
  .controller('CartCtrl', function ($scope, CartService, StoresService, $stateParams, localStorageService) {
    var vm = this;
    if($stateParams.cartProductId) {
      vm.cart = CartService.getProduct($stateParams.cartProductId);
    }
     $scope.name="addToCart";
     var productsInCart = localStorageService.get('products');

      $scope.products = productsInCart || [];

      $scope.$watch('products', function () {
        localStorageService.set('products', $scope.products);
      }, true);
    //  $scope.addProduct = function (productName, productPrice) {
    //   $scope.products.push({
    //     productName: productName,
    //     productPrice: productPrice
    //   });
    //   $scope.productName = "";
    //   $scope.productPrice = "";
    // };

    // $scope.addToCart = function () {
    //   var id = $stateParams.storeId;
    //   CartService.getStore(id).then(function(data) {
    //     console.log(data);
    //     $scope.cart = data;
    //     $state.go('app.cart', {storeId: id});
    //   });
    // };

    $scope.getOneStore = function() {
      var id = $stateParams.storeId;
      CartService.getStore(id).success(function(data) {
         console.log(data);
         $scope.stores = data;
       });
    };




  });
