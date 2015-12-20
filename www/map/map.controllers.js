// map.controllers.js controls the same view for all users whether they are authenticated or not.
// it displays the map, and ideally, locations of nearby stores based on data from the database.
// geolocation needs to work. this goes hand-in-hand with store location data populating the map.
//The following is brought to you in part by Nic Raboy of Ionic for helping with Google Maps

angular
.module('map')

.controller('MapCtrl', function($scope, $ionicLoading, $window, NgMap) {

  $scope.positions = [{
    lat: 32.788990,
    lng: -79.938120,
  }];

    google.maps.event.addDomListener(window, 'load', function() {
        var myLatlng = new google.maps.LatLng(32.788990, -79.938120);

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
});


// angular.module('ngMap').controller('MyCtrl', function($timeout, NgMap) {
//    var vm = this;
//
//    vm.stores = {
//      foo: { position:[32.788990, -79.938120], items: [1,2,3,4]},
//      bar:{ position:[32.792670, -79.938020], items: [5,6,7,8]}
//    };
//
//    vm.initMap = function(mapId) {
//      vm.map = NgMap.initMap(mapId);
//      console.log('vm.map 2', vm.map);
//    };
//
//    vm.showStore = function(evt, storeId) {
//      vm.store = vm.stores[storeId];
//      console.log('vm.map', vm.map);
//      vm.map.showInfoWindow('bar', this);
//    };
//  });
// $scope.addMarker = function ( coordinates ) {
//     $scope.markers.push({
//         latitude: parseFloat(coordinates.latitude),
//         longitude: parseFloat(coordinates.longitude),
//         icon: "img/marker-map.png";
//     });
// }
//
// $scope.addUserMarker = function ( coordinates ) {
//     $scope.markers.push({
//         latitude: parseFloat(coordinates.latitude),
//         longitude: parseFloat(coordinates.longitude),
//     });
// }

// $scope.addUserMarker(position);
//
// $scope.populateMarkers = function(locations) {
//     for (var i = 0; i < locations.length; i++) {
//         $scope.addMarker(locations[i]);
//     }
// }
