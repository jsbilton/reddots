angular.module('reddots', ['ionic', 'ngMap'])

// .controller('LocationsCtrl', function($scope, $state, $cordovaGeolocation, $ionicLoading) {
//
//   $scope.positions = [{
//     lat: 32.7794,
//     lng: -79.9341
//   }];
//
//   $scope.$on('mapInitialized', function(event, map) {
//     $scope.map = map;
//   });
//
//   $scope.centerOnMe= function(){
//   $scope.positions = [];
//
//
//     $ionicLoading.show({
//       template: 'Loading...'
//     });
//
//
//     navigator.geolocation.getCurrentPosition(function(position) {
//       var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
//       $scope.positions.push({lat: pos.k,lng: pos.B});
//       console.log(pos);
//       $scope.map.setCenter(pos);
//       $ionicLoading.hide();
//     });
//
//   };
//
// });
// Example taken from ng-maps c/o Mike Harrington @ http://codepen.io/mhartington/pen/bwdoA

//The following is brought to you in part by Nic Raboy of Ionic for helping with Google Maps
.controller('LocationsCtrl', function($scope, $ionicLoading) {

    google.maps.event.addDomListener(window, 'load', function() {
        var myLatlng = new google.maps.LatLng(32.7794, -79.9341);

        var mapOptions = {
            center: myLatlng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById("map"), mapOptions);

        navigator.geolocation.getCurrentPosition(function(pos) {
            map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            var myLocation = new google.maps.Marker({
                position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                map: map,
                title: "My Location"
            });
        });

        $scope.map = map;
    });
    //   var liquor = new google.maps.Marker({
    //    position: liquor,
    //    map: map,
    //    title: 'ABC Store'
    //  });
});

// var map;
// var infowindow;
//
// function initMap() {
//   var theIronYard = {lat: 32.7794, lng: -79.9341};
//
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: theIronYard,
//     zoom: 15
//   });
//
//   infowindow = new google.maps.InfoWindow();
//
//   var service = new google.maps.places.PlacesService(map);
//   service.nearbySearch({
//     location: theIronYard,
//     radius: 500,
//     types: ['store']
//   }, callback);
// }
//
// function callback(results, status) {
//   if (status === google.maps.places.PlacesServiceStatus.OK) {
//     for (var i = 0; i < results.length; i++) {
//       createMarker(results[i]);
//     }
//   }
// }
//
// function createMarker(place) {
//   var placeLoc = place.geometry.location;
//   var marker = new google.maps.Marker({
//     map: map,
//     position: place.geometry.location
//   });
//
//   google.maps.event.addListener(marker, 'click', function() {
//     infowindow.setContent(place.name);
//     infowindow.open(map, this);
//   });
// }
