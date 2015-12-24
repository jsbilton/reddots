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

    $scope.edit = function(item) {
      alert('Edit Item: ' + item.id);
    };

});
