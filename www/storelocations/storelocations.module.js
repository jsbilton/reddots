angular
  .module('storelocations', [])

  .config(function($stateProvider) {
    $stateProvider

  .state('app.storelocations', {
    url: "/storelocations",
    templateUrl: "storelocations/views/storelocations.html",
    views: {
      'menuContent': {
        templateUrl: "storelocations/views/storelocations.html",
        controller: "StoreLocationsCtrl"
      }
    }
  });
});
