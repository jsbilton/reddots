angular.module('checkout')

.controller('CheckoutCtrl', function($scope, $stateParams, StoresService, $ionicPopup) {

  $scope.getOneStore = function() {
      var id = $stateParams.storeId;
      StoresService.getStore(id).then(function(data) {
        //  console.log('is this what you want?', data);
         $scope.stores = data;
       });
    };

  var card1 = {
    name: 'Mike Brown',
    number: '5555 4444 3333 1111',
    expiry: '11 / 2020',
    cvc: '123'
  };
  var card2 = {
    name: 'Bill Smith',
    number: '4321 4321 4321 4321',
    expiry: '02 / 2018',
    cvc: '591'
  };

  var selectedCard = 1;
  $scope.card = card1;

  $scope.changeCard = function() {
    if (selectedCard == 1) {
      $scope.card = card2;
      selectedCard = 2;
    } else {
      $scope.card = card1;
      selectedCard = 1;
    }
  };

  $scope.clear = function() {
    $scope.card = {};
  };

  $scope.cardPlaceholders = {
    name: 'Your Full Name',
    number: 'xxxx xxxx xxxx xxxx',
    expiry: 'MM/YY',
    cvc: 'xxx'
  };

  $scope.cardMessages = {
    validDate: 'valid\nthru',
    monthYear: 'MM/YYYY',
  };

  $scope.cardOptions = {
    debug: false,
    formatting: true
  };

  // $scope.showConfirm = function() {
  //   console.log("fire");
  //     $ionicPopup.alert({
  //       title: 'Your order has been processed and will be ready upon arrival',
  //       template: 'All customers must show proper ID'
  //     });
  //   };


 });



// this card animation is a mashup of Jesse Pollak's and Sergey Gavruk's work
// https://github.com/jessepollak/card
// https://github.com/gavruk/angular-card
