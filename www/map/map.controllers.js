// app.storelocations.js controls the same view for all users whether they are authenticated or not.
// it displays the map, and ideally, locations of nearby stores based on data from the database.
// geolocation needs to work. this goes hand-in-hand with store location data populating the map.
//The following is brought to you in part by Nic Raboy of Ionic for helping with Google Maps

angular
.module('map')

.controller('MapCtrl', function($scope, $ionicLoading, $window) {

  $scope.positions = [{
    lat: 32.77943,
    lng: -79.9341
  }];

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
