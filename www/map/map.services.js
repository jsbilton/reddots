angular
  .module('map')
  .factory('MapService', function ($http, $rootScope) {
    var url = 'http://tiny-tiny.herokuapp.com/collections/reddotsmapdata';
    var getSpots = function () {
      return $http.get(url);
    };
    var createSpot = function (newSpot) {
      var geocoder = new google.maps.Geocoder();
      geocoder.geocode({address: newSpot.address}, function (res) {
        console.log("response from google: ", res);
        newSpot.coords = {
          latitude: res[0].geometry.location.lat(),
          longitude: res[0].geometry.location.lng(),
        };
        console.log(newSpot);
        $http.post(url, newSpot).success(function (res) {
          console.log("yaay, spot created!");
        });

      });

    };
    return {
      getSpots: getSpots,
      createSpot: createSpot
    };

  });
  
