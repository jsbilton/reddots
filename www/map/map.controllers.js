// map.controllers.js controls the same view for all users whether they are authenticated or not.
// it displays the map, and ideally, locations of nearby stores based on data from the database.
// geolocation needs to work. this goes hand-in-hand with store location data populating the map.
//The following is brought to you in part by Nic Raboy of Ionic for helping with Google Maps

angular
.module('map')
.controller('MapCtrl', function($scope, MapService, mapboxService, $ionicLoading, $window) {
  mapboxService.init({ accessToken: 'pk.eyJ1IjoiamV0YmFsYWd0YXMiLCJhIjoiY2lpZ28waDZlMDJobHY1bTF1YnZrcHcxdSJ9.2YP0ceOasnLzdmIAG9Uy3g' });
    $scope.map = {
      center: {
        latitude: 32.788969,
        longitude: -79.938103
      },
      zoom: 4
    };
     MapService.getSpots().success(function (spots) {
       $scope.spots = spots;



     });
     $scope.addSpot = function (spot) {
       MapService.createSpot(spot);
     };
});
