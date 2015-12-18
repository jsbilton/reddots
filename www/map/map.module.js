angular
  .module('map', [])

  .config(function($stateProvider) {
    $stateProvider

  .state('app.map', {
    url: "/map",
    templateUrl: "map/views/map.html",
    views: {
      'menuContent': {
        templateUrl: "map/views/map.html",
        controller: "MapCtrl"
      }
    }
  });
});
