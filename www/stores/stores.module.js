angular
  .module('stores', ['LocalStorageModule'])

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
    url: "/storeview/:storeId",
    views: {
      'menuContent': {
        templateUrl: "stores/views/storeView.html",
        controller: 'StoresCtrl'
      }
    }
  })

  .state('app.orderview', {
    url: "/orderview/:storeId",
    views: {
      'menuContent': {
        templateUrl: "stores/views/orderView.html",
        controller: 'StoresCtrl'
      }
    }
  });
});
