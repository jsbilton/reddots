angular
  .module('cart')
  .controller('CartCtrl', function ($scope, $state, CartService, StoresService, $stateParams, localStorageService) {
    var vm = this;
    if($stateParams.cartProductId) {
      vm.cart = CartService.getProduct($stateParams.cartProductId);
    }
     $scope.name="addToCart";
     var productsInCart = localStorageService.get('products');
     console.log('what are these products', productsInCart);

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
         console.log('is this what you want?',data);
         $scope.stores = data;
       });
    };

//added this for the customer button to direct to checkout view
    $scope.goCheckOut = function () {
      var id = $stateParams.storeId;
      $state.go('app.checkout', {storeId: id});
      };

    $scope.getTotalPrice = function () {
      totalPrice = 0; //this is reading out to the total
      for (var i = 0; i < $scope.products.length; i++) {
        if ($scope.products[i].productPrice) {
          totalPrice += $scope.products[i].productPrice;
          console.log('what is total productPrice', totalPrice);
        }
      }
      $scope.totalPriceValue = totalPrice;
    };

    });
