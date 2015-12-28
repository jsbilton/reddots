angular
  .module('stores', [])

  .config(function($stateProvider) {
    $stateProvider

  .state('app.map', {
    url: "/map",
    templateUrl: "stores/views/map.html",
    views: {
      'menuContent': {
        templateUrl: "stores/views/map.html",
        controller: "StoresCtrl"
      }
    }
  })

  .state('app.addStore', {
    url: "/addStore",
    templateUrl: "stores/views/addStore.html",
    views: {
      'menuContent': {
        templateUrl: "stores/views/addStore.html",
        controller: "StoresCtrl"
      }
    }
  })

  .state('app.storeview', {
    url: "/storeview/:spotId",
    views: {
      'menuContent': {
        templateUrl: "stores/views/storeView.html",
        controller: 'StoresCtrl'
      }
    }
  });
});
