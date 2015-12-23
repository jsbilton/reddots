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
  })

  .state('app.addStore', {
    url: "/addStore",
    templateUrl: "map/views/addStore.html",
    views: {
      'menuContent': {
        templateUrl: "map/views/addStore.html",
        controller: "MapCtrl"
      }
    }
  });
});
