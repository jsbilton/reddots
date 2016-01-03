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

//added this for the customer button to direct to checkout view
    $scope.goCheckOut = function () {
      var id = $stateParams.storeId;
      $state.go('app.checkout', {storeId: id});
      };
    });

    
  });



// //This is a form for cart to tally up total costs of items in the cart
//     function CartCtrl($scope) {
//         $scope.invoice = {
//             items: []
//         };
//
//         $scope.addItem = function() {
//             $scope.invoice.items.push({
//                 qty: 1,
//                 description: '',
//                 cost: 0
//             });
//         },
//
//         $scope.removeItem = function(index) {
//             $scope.invoice.items.splice(index, 1);
//         },
//
//         $scope.total = function() {
//             var total = 0;
//             angular.forEach($scope.invoice.items, function(item) {
//                 total += item.qty * item.cost;
//             });
//
//             return total;
//         };
//     }
