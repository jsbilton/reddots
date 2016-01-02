angular
  .module('cart')
  .controller('CartCtrl', function ($scope, CartService, $stateParams, localStorageService) {
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

    $scope.addToCart = function () {
      var id = $stateParams.storeId;
      StoresService.getStore(id).then(function(data) {
        console.log(data);
        $scope.cart = data;
        $state.go('app.cart', {storeId: id});
      });
    };

//added this for the customer button to direct to checkout view
    $scope.custCheckOut = function () {
      var id = $stateParams.storeId;
      CartService.getCart(id).then(function (data) {
        console.log(data);
        $scope.cart = data;
        $state.go('app.checkout', {custId: id});
      });
    };

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



  });


  //   .controller('CartController', function ($scope, CartService, $stateParams) {
  //     var vm = this;
  //     $scope.cart = CartService.getCartItems();
  //
  //     if($stateParams.favId) {
  //       vm.cartDetail = CartService.getCart($stateParams.cartId);
  //
  //     }
  // // //Gets all store data
  // //      $scope.fromStore = function(liquor){
  // //          CartService.getItems(liquor).then(function(items){
  // //          $scope.items = items;
  // //          $location.path("/store");
  // //        });
  // //      };
  // //      CartService.getItems('liquor').then(function(items){
  // //      $scope.items = items;
  // //     });
  //
  // //Get Cart Data
  //           CartService.getCartItems().success(function(cartItems){
  //             $scope.cartItems = cartItems;
  //           });
  //
  // //Remove Item from Cart
  //           $scope.removeFromCart = function(item){
  //            CartService.removeFromCart(item);
  //          };
  //
  // //Post and add item to cart
  //           $scope.addItem = function(item){
  //             CartService.addToCart(item);
  //             // items.data.push({
  //             // title: item.title
  //
  //           };
  //
  //
  //         });
