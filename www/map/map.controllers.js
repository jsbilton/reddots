// map.controllers.js controls the same view for all users whether they are authenticated or not.
// it displays the map, and ideally, locations of nearby stores based on data from the database.
// geolocation needs to work. this goes hand-in-hand with store location data populating the map.
//The following is brought to you in part by Nic Raboy of Ionic for helping with Google Maps

angular
.module('map')
.controller('MapCtrl', function($state, $auth, $scope, MapService, mapboxService, $ionicLoading, $window) {
  mapboxService.init({ accessToken: 'pk.eyJ1IjoiamV0YmFsYWd0YXMiLCJhIjoiY2lpZ28waDZlMDJobHY1bTF1YnZrcHcxdSJ9.2YP0ceOasnLzdmIAG9Uy3g' });
    $scope.map = {
      center: {
        latitude: 32.788969,
        longitude: -79.938103
      },
      zoom: 8
    };
     MapService.getSpots().success(function (spots) {
       $scope.spots = spots;



     });
     $scope.addSpot = function (spot) {
       MapService.createSpot(spot);
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
});
