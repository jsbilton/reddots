// // map.controllers.js controls the same view for all users whether they are authenticated or not.
// // it displays the map, and ideally, locations of nearby stores based on data from the database.
// // geolocation needs to work. this goes hand-in-hand with store location data populating the map.
// //The following is brought to you in part by Nic Raboy of Ionic for helping with Google Maps
//
// angular
// .module('map')
//
// .controller('MapCtrl', function($scope, $ionicLoading, $window, NgMap) {
//
//   $scope.positions = [{
//     lat: 32.788990,
//     lng: -79.938120
//   }];
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
//             // var myStores = new google.maps.Marker({
//             //   postion: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
//             //   map: map,
//             //   title: "My Stores"
//             // });
//         });
//
//         $scope.map = map;
//     });
//
// });
//
//
//
//
// {"name": "Burris Liquor Store",
//   "address": "418 Meeting St",
//   "city": Charleston,
//   "state": "SC"
//   "zip" :29403,
//   "lat":  32.792784,
//   "lon": -79.937905 },
//
// {"name": "East Bay Wine & Spirits"
// "address": "289 East Bay St",
// "city": "Charleston",
// "state": "SC",
// "zip": 29401,
// "lat": 32.784315,
// "lon": -79.929106},
//
//
// {"name": "Pence’s Liquor & Wine"
// "address": "334 East Bay St, Suite A-1",
// "city": "Charleston",
// "state": "SC",
// "zip": 29401,
// "lat": 32.787681,
// "lon": -79.929110},
//
// {"name": "Shorty’s Package Store"
// "address": "949 King St",
// "city": "Charleston",
// "state": "SC",
// "zip": 29403,
// "lat": 32.801513,
// "lon": -79.950382},
//
//
// {"name":"Wine Shop",
// "address": "3 Lockwood Dr # 203",
// "city":"Charleston",
// "state": "SC",
// "zip": 29401,
// "lat":  32.778929,
// "lon": -79.949477},
//
// {"name": "The Charleston Beer Exchange",
// "address": "14 Exchange St",
// "city": "Charleston",
// "state": "SC",
// "zip": 29401,
// "lat": 32.776798,
// "lon": -79.926621},
//
// {"name": "Charleston Winery",
// "address": "63 S Market St",
// "city": "Charleston",
// "state": "SC",
// "zip": 29401,
// "lat": 32.780727,
// "lon": -79.929369}


var app = angular
.module("map")

.controller("MapCtrl", function ($scope, $ionicLoading, $window) {

    // current location
    $scope.loc = { lat: 32.788990, lon: -79.938120};
    $scope.gotoCurrentLocation = function () {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var c = position.coords;
                $scope.gotoLocation(c.latitude, c.longitude);
            });
            return true;
        }
        return false;
    };
    $scope.gotoLocation = function (lat, lon) {
        if ($scope.lat !== lat || $scope.lon != lon) {
            $scope.loc = { lat: lat, lon: lon };
            if (!$scope.$$phase) $scope.$apply("loc");
        }
    };

    // geo-coding
    $scope.search = "";
    $scope.geoCode = function () {
        if ($scope.search && $scope.search.length > 0) {
            if (!this.geocoder) this.geocoder = new google.maps.Geocoder();
            this.geocoder.geocode({ 'address': $scope.search }, function (results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    var loc = results[0].geometry.location;
                    $scope.search = results[0].formatted_address;
                    $scope.gotoLocation(loc.lat(), loc.lng());
                } else {
                    alert("Sorry, this search produced no results.");
                }
            });
        }
    };

    // some points of interest to show on the map
    // to be user as markers, objects should have "lat", "lon", and "name" properties
    $scope.stores = [
        { "name": "Burris Liquor Store", "lat":  32.792784, "lon": -79.937905},
        { "name": "East Bay Wine and Spirits","lat": 32.784315, "lon": -79.929106 },
        { "name": "Shorty’s Package Store", "lat": 32.801513, "lon": -79.950382},
        { "name": "Pence’s Liquor & Wine", "lat": 32.787681, "lon": -79.929110},
        { "name":"Wine Shop", "lat":  32.778929, "lon": -79.949477},
        { "name": "The Charleston Beer Exchange", "lat": 32.776798, "lon": -79.926621},
        { "name": "Charleston Winery", "lat": 32.780727, "lon": -79.929369 },
    ];
});

// formats a number as a latitude (e.g. 40.46... => "40°27'44"N")
app.filter('lat', function () {
    return function (input, decimals) {
        if (!decimals) decimals = 0;
        input = input * 1;
        var ns = input > 0 ? "N" : "S";
        input = Math.abs(input);
        var deg = Math.floor(input);
        var min = Math.floor((input - deg) * 60);
        var sec = ((input - deg - min / 60) * 3600).toFixed(decimals);
        return deg + "°" + min + "'" + sec + '"' + ns;
    };
});

// formats a number as a longitude (e.g. -80.02... => "80°1'24"W")
app.filter('lon', function () {
    return function (input, decimals) {
        if (!decimals) decimals = 0;
        input = input * 1;
        var ew = input > 0 ? "E" : "W";
        input = Math.abs(input);
        var deg = Math.floor(input);
        var min = Math.floor((input - deg) * 60);
        var sec = ((input - deg - min / 60) * 3600).toFixed(decimals);
        return deg + "°" + min + "'" + sec + '"' + ew;
    };
});

// - Documentation: https://developers.google.com/maps/documentation/
app.directive("appMap", function () {
    return {
        restrict: "E",
        replace: true,
        template: "<div></div>",
        scope: {
            center: "=",        // Center point on the map (e.g. <code>{ latitude: 10, longitude: 10 }</code>).
            markers: "=",       // Array of map markers (e.g. <code>[{ lat: 10, lon: 10, name: "hello" }]</code>).
            width: "@",         // Map width in pixels.
            height: "@",        // Map height in pixels.
            zoom: "@",          // Zoom level (one is totally zoomed out, 25 is very much zoomed in).
            mapTypeId: "@",     // Type of tile to show on the map (roadmap, satellite, hybrid, terrain).
            panControl: "@",    // Whether to show a pan control on the map.
            zoomControl: "@",   // Whether to show a zoom control on the map.
            scaleControl: "@"   // Whether to show scale control on the map.
        },
        link: function (scope, element, attrs) {
            var toResize, toCenter;
            var map;
            var currentMarkers;

            // listen to changes in scope variables and update the control
            var arr = ["width", "height", "markers", "mapTypeId", "panControl", "zoomControl", "scaleControl"];
            for (var i = 0, cnt = arr.length; i < arr.length; i++) {
                scope.$watch(arr[i], function () {
                    cnt--;
                    if (cnt <= 0) {
                        updateControl();
                    }
                });
            }

            // update zoom and center without re-creating the map
            scope.$watch("zoom", function () {
                if (map && scope.zoom)
                    map.setZoom(scope.zoom * 1);
            });
            scope.$watch("center", function () {
                if (map && scope.center)
                    map.setCenter(getLocation(scope.center));
            });

            // update the control
            function updateControl() {

                // update size
                if (scope.width) element.width(scope.width);
                if (scope.height) element.height(scope.height);

                // get map options
                var options =
                {
                    center: new google.maps.LatLng(32.788990, -79.938120),
                    zoom: 15,
                    mapTypeId: "roadmap"
                };
                if (scope.center) options.center = getLocation(scope.center);
                if (scope.zoom) options.zoom = scope.zoom * 1;
                if (scope.mapTypeId) options.mapTypeId = scope.mapTypeId;
                if (scope.panControl) options.panControl = scope.panControl;
                if (scope.zoomControl) options.zoomControl = scope.zoomControl;
                if (scope.scaleControl) options.scaleControl = scope.scaleControl;

                // create the map
                map = new google.maps.Map(element[0], options);

                // update markers
                updateMarkers();

                // listen to changes in the center property and update the scope
                google.maps.event.addListener(map, 'center_changed', function () {

                    // do not update while the user pans or zooms
                    if (toCenter) clearTimeout(toCenter);
                    toCenter = setTimeout(function () {
                        if (scope.center) {

                            // check if the center has really changed
                            if (map.center.lat() !== scope.center.lat ||
                                map.center.lng() !== scope.center.lon) {

                                // update the scope and apply the change
                                scope.center = { lat: map.center.lat(), lon: map.center.lng() };
                                if (!scope.$$phase) scope.$apply("center");
                            }
                        }
                    }, 500);
                });
            }

            // update map markers to match scope marker collection
            function updateMarkers() {
                if (map && scope.markers) {

                    // clear old markers
                    if (currentMarkers !== null) {
                        for (var i = 0; i < currentMarkers.length; i++) {
                            currentMarkers[i] = m.setMap(null);
                        }
                    }

                    // create new markers
                    currentMarkers = [];
                    var markers = scope.markers;
                    if (angular.isString(markers)) markers = scope.$eval(scope.markers);
                    for (var i = 0; i < markers.length; i++) {
                        var m = markers[i];
                        var loc = new google.maps.LatLng(m.lat, m.lon);
                        var mm = new google.maps.Marker({ position: loc, map: map, title: m.name });
                        currentMarkers.push(mm);
                    }
                }
            }

            // convert current location to Google maps location
            function getLocation(loc) {
                if (loc === null) return new google.maps.LatLng(40, -73);
                if (angular.isString(loc)) loc = scope.$eval(loc);
                return new google.maps.LatLng(loc.lat, loc.lon);
            }
        }
    };
});
