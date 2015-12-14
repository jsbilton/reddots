
angular
  .module('reddots', ['ionic',
    'reddots.controllers',
    'ngMap',
    'ngCordova'
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
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.locations', {
      url: "/locations",
      templateUrl: "templates/locations.html",
      views: {
        'menuContent': {
          templateUrl: "templates/locations.html",
          controller: "LocationsCtrl"
        }
      }
    })

    .state('app.login', {
      url: "/login",
      views: {
        'menuContent': {
          templateUrl: "templates/login.html",
          controller: 'LoginCtrl'
        }
      }
    })

    .state('app.createcustomer', {
      url: "/createcustomer",
      views: {
        'menuContent': {
          templateUrl: "templates/createcustomer.html",
          controller: 'CustomerCtrl'
        }
      }
    })

    .state('app.createowner', {
      url: "/createowner",
      views: {
        'menuContent': {
          templateUrl: "templates/createowner.html",
          controller: 'OwnerCtrl'
        }
      }
    })
    .state('app.storeview', {
      url: "/storeview",
      views: {
        'menuContent': {
          templateUrl: "templates/storeview.html",
          controller: 'StoreviewCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');
});
