// stores.controllers.js controls the same view for all users whether they are authenticated or not.
// it displays the map, and ideally, locations of nearby stores based on data from the database.
// geolocation needs to work. this goes hand-in-hand with store location data populating the map.

angular
.module('stores')
.controller('StoresCtrl', function($state, $auth, $scope, StoresService, mapboxService, $ionicLoading, $window) {
  mapboxService.init({ accessToken: 'pk.eyJ1IjoiamV0YmFsYWd0YXMiLCJhIjoiY2lpZ28waDZlMDJobHY1bTF1YnZrcHcxdSJ9.2YP0ceOasnLzdmIAG9Uy3g' });
    $scope.map = {
      center: {
        latitude: 32.788969,
        longitude: -79.938103
      },
      zoom: 8
    };
     StoresService.getSpots().success(function (spots) {
       $scope.spots = spots;



     });
     $scope.addSpot = function (spot) {
       StoresService.createSpot(spot);
     };

     $scope.signup = function(newSpot) {
       console.log("STORE", newSpot);
       $auth.signup({
         displayName: newSpot.name,
         storeAddress: newSpot.address,
         email: newSpot.email,
         password: newSpot.password,
         confirmPassword: newSpot.confirmPassword
       }).catch(function(response) {
         console.log("ERROR SIGNUP", response);
         //where to go on failure
         $state.go('app.storesignup');
       });
       //where to go on success
         $state.go('app.storeview');
     };

     $scope.name="asd";
     $scope.items = [];
     $scope.addItem = function (itemName, itemPrice) {
      $scope.items.push({
        name: itemName,
        price: itemPrice
      });
      $scope.itemName = "";
      $scope.itemPrice = "";
    };

    $scope.removeItem = function (index) {
      $scope.items.splice(index, 1);
    };
});

// app.storeview.js controls the same view for Customers, Stores, and Admin.
// AUTHENTICATED USERS: Customers can Read only, while Stores and Admin can CRUD.
// !AUTHENTICATED USERS: Read only.
// angular.module('storeview', [])
//
// .controller('StoreViewCtrl', function($scope) {
//
//   $scope.data = {
//     showDelete: false
//   };
//
//   $scope.edit = function(item) {
//     alert('Edit Item: ' + item.id);
//   };
//   $scope.share = function(item) {
//     alert('Share Item: ' + item.id);
//   };
//
//   $scope.moveItem = function(item, fromIndex, toIndex) {
//     $scope.items.splice(fromIndex, 1);
//     $scope.items.splice(toIndex, 0, item);
//   };
//
//   $scope.onItemDelete = function(item) {
//     $scope.items.splice($scope.items.indexOf(item), 1);
//   };
//
//   $scope.items = [
//     { id: 0 },
//     { id: 1 },
//     { id: 2 },
//     { id: 3 },
//     { id: 4 },
//     { id: 5 },
//     { id: 6 },
//     { id: 7 },
//     { id: 8 },
//     { id: 9 },
//     { id: 10 },
//     { id: 11 },
//     { id: 12 },
//     { id: 13 },
//     { id: 14 },
//     { id: 15 },
//     { id: 16 },
//     { id: 17 },
//     { id: 18 },
//     { id: 19 },
//     { id: 20 },
//     { id: 21 },
//     { id: 22 },
//     { id: 23 },
//     { id: 24 },
//     { id: 25 },
//     { id: 26 },
//     { id: 27 },
//     { id: 28 },
//     { id: 29 },
//     { id: 30 },
//     { id: 31 },
//     { id: 32 },
//     { id: 33 },
//     { id: 34 },
//     { id: 35 },
//     { id: 36 },
//     { id: 37 },
//     { id: 38 },
//     { id: 39 },
//     { id: 40 },
//     { id: 41 },
//     { id: 42 },
//     { id: 43 },
//     { id: 44 },
//     { id: 45 },
//     { id: 46 },
//     { id: 47 },
//     { id: 48 },
//     { id: 49 },
//     { id: 50 }
//   ];
//
// });
