// // map.controllers.js controls the same view for all users whether they are authenticated or not.
// // it displays the map, and ideally, locations of nearby stores based on data from the database.
// // geolocation needs to work. this goes hand-in-hand with store location data populating the map.
// //The following is brought to you in part by Nic Raboy of Ionic for helping with Google Maps
//



var cities = [
        {
         "name": "Burris Liquor Store",
         "lat": 32.792784,
         "lon": -79.937905
        },
        {
            city : 'chennai',
            desc : 'Test',
            lat : 52.238168,
            long : -52.238168
        },

    ];

angular
.module("map")
.controller('MapCtrl', function($scope, $http, $window, $ionicLoading, $compile) {
        // Map Settings //
        $scope.initialize = function() {
             var latitude= 32.788990;
             var longitude= -79.938120;
             var myLatlng = new google.maps.LatLng(32.788990, -79.938120);

            var mapOptions = {
                center : myLatlng,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                zoom : 15
            };



            var map = new google.maps.Map(document.getElementById("mapWrap"), mapOptions);
          // Geo Location /
            navigator.geolocation.getCurrentPosition(function(pos) {
                map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
                var myLocation = new google.maps.Marker({
                    position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                    map: map,
                    animation: google.maps.Animation.DROP,
                    title: "My Location"
                });
            });
            $scope.map = map;
            // Additional Markers  FOR THE DIFFERENT CITIES//
            $scope.markers = [];
            var infoWindow = new google.maps.InfoWindow();
            var createMarker = function (info){
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(info.lat, info.long),
                    map: $scope.map,
                    animation: google.maps.Animation.DROP,
                    title: info.city
                });
                marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
                google.maps.event.addListener(marker, 'click', function(){
                    infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
                    infoWindow.open($scope.map, marker);
                });
                $scope.markers.push(marker);
            };

// FOR LOOP TO ARRAY OF CITIES
            for (i = 0; i < cities.length; i++){
                createMarker(cities[i]);
            }

        };
        google.maps.event.addDomListener(document.getElementById("map1"), 'load', $scope.initialize());

    });




// angular
// .module('map')
//
// .controller('MapCtrl', function($scope, $ionicLoading, $window, NgMap) {
//
//     $scope.positions = [{
//       lat: 32.788990,
//       lng: -79.938120
//     }];
//
//     google.maps.event.addDomListener(window, 'load', function() {
//         var myLatlng = new google.maps.LatLng(32.788990, -79.938120);
//
//         var mapOptions = {
//             center: myLatlng,
//             zoom: 15,
//             mapTypeId: google.maps.MapTypeId.ROADMAP
//         };
//
//         var map = new google.maps.Map(document.getElementById("map"), mapOptions);
//
//         navigator.geolocation.getCurrentPosition(function(pos) {
//             map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
//             var myLocation = new google.maps.Marker({
//                 position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
//                 map: map,
//                 title: "My Location"
//             });
//
//         // var myStoreOne = new google.maps.LatLng(coords[32.792784], coords[-79.937905]);
//         // var mapOne = new google.maps.Map(document.getElementById("map"), myStoreOne);
//
//
//         });
//
//         $scope.map = map;
//     });
//
// });
//



// var myOptions = {
//         zoom: 4,
//         center: new google.maps.LatLng(32.788990, -79.938120),
//         mapTypeId: google.maps.MapTypeId.ROADMAP
//     };
//
//     var map = new google.maps.Map(document.getElementById('map_canvas'),
//         myOptions);
//
//     var marker = new google.maps.Marker({
//         position: map.getCenter(),
//         map: map,
//     });
//     var marker2 = new google.maps.Marker({
//         position: new google.maps.LatLng(32.780727,-79.929369),
//         map: map,
//     });
// }
// google.maps.event.addDomListener(window, 'load', initialize);
