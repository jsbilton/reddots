angular
  .module('reddots', ['ionic',
    'reddots.controllers',
    'reddots.services',
    'ngMap'
  ])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "main/views/menu.html",
      controller: 'AppCtrl'
    })
    .state('app.storelocations', {
      url: "/storelocations",
      templateUrl: "main/views/storelocations.html",
      views: {
        'menuContent': {
          templateUrl: "main/views/storelocations.html",
          controller: "StorelocationsCtrl"
        }
      }
    })
    .state('app.login', {
      url: "/login",
      views: {
        'menuContent': {
          templateUrl: "main/views/login.html",
          controller: 'LoginCtrl'
        }
      }
    })
    .state('app.createcustomer', {
      url: "/createcustomer",
      views: {
        'menuContent': {
          templateUrl: "customers/views/createcustomer.html",
          controller: 'CustomerCtrl'
        }
      }
    })
    .state('app.createstore', {
      url: "/createstore",
      views: {
        'menuContent': {
          templateUrl: "stores/views/createstore.html",
          controller: 'StoreCtrl'
        }
      }
    })
    .state('app.storeview', {
      url: "/storeview",
      views: {
        'menuContent': {
          templateUrl: "main/views/storeview.html",
          controller: 'StoreviewCtrl'
        }
      }
    })
    .state('app.neworders', {
      url: "/neworders",
      views: {
        'menuContent': {
          templateUrl: "stores/views/neworders.html",
          controller: 'NewordersCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');
});
