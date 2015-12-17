angular
  .module('storelocations', [])

  .config(function($stateProvider) {
    $stateProvider

  .state('app.storelocations', {
    url: "/storelocations",
    templateUrl: "stores/views/storelocations.html",
    views: {
      'menuContent': {
        templateUrl: "stores/views/storelocations.html",
        controller: "StorelocationsCtrl"
      }
    }
  });
});
