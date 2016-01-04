angular
  .module('cart')
  // .controller('CartCtrl', function ($scope, CartService, $stateParams) {
  //   var vm = this;
  //   $scope.cartProducts = CartService.getCartProducts();
  .controller('CartCtrl', function ($scope, $state, CartService, StoresService, $stateParams, localStorageService,$rootScope) {
    var vm = this;
    glob = $rootScope.cartList;
    if($stateParams.cartProductId) {
      vm.cart = $rootScope.cartList;
    }

      // $scope.cartList = cartList || [];

    // if($stateParams.newCartProduct) {
    //   vm.cart = CartService.getProduct($stateParams.newCartProduct);
    // }

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

    $scope.getOneStore = function() {
      var id = $stateParams.storeId;
      StoresService.getStore(id).then(function(data) {
         console.log('is this what you want?', data);
         $scope.stores = data;
       });
    };

    $scope.removeProduct = function (product) {
      $rootScope.cartList.forEach(function(item,idx,arr) {
        if(item.productName === product.productName) {
          arr.splice(idx,1);
        }
      });
      $scope.getTotalPrice();
    };

//added this for the customer button to direct to checkout view
    $scope.goCheckOut = function () {
      var id = $stateParams.storeId;
      $state.go('app.checkout', {storeId: id});
      };

    $scope.getTotalPrice = function () {
      totalPrice = 0; //this is reading out to the total
      // for (var i = 0; i < $scope.cartList.length; i++) {
      //   if ($scope.products[i].productPrice) {
      //     totalPrice += $scope.products[i].productPrice;
      //   }
      // }
      $rootScope.cartList.forEach(function(item) {
        if(item.productPrice) {
          totalPrice += item.productPrice;
          console.log('what is total productPrice', totalPrice);
        }
      });
      $scope.totalPriceValue = totalPrice;
    };



    });
