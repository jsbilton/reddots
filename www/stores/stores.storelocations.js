// app.storelocations.js controls the same view for all users whether they are authenticated or not.
// it displays the map, and ideally, locations of nearby stores based on data from the database.
// geolocation needs to work. this goes hand-in-hand with store location data populating the map.

angular.module('reddots', ['ionic', 'ngMap'])

.controller('StorelocationsCtrl', function($scope, $state, $cordovaGeolocation, $ionicLoading) {

  $scope.positions = [{
    lat: 43.07493,
    lng: -89.381388
  }];

  $scope.$on('mapInitialized', function(event, map) {
    $scope.map = map;
  });

  $scope.centerOnMe= function(){
  $scope.positions = [];


    $ionicLoading.show({
      template: 'Loading...'
    });


    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      $scope.positions.push({lat: pos.k,lng: pos.B});
      console.log(pos);
      $scope.map.setCenter(pos);
      $ionicLoading.hide();
    });

  };

});
// Example taken from ng-maps c/o Mike Harrington @ http://codepen.io/mhartington/pen/bwdoA
