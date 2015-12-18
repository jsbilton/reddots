angular
  .module('reddots', [
    'ionic',
    'reddots.controllers',
    'storelocations',
    'storeview',
    'storesignup',
    'customersignup',
    'ngMap',
    'ui.router',
    'ngSanitize'
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

      .state('app.login', {
        url: "/login",
        views: {
          'menuContent': {
            templateUrl: "main/views/login.html",
            controller: 'LoginCtrl'
          }
        }
      })

      .state('app.storeview', {
        url: "/storeview",
        views: {
          'menuContent': {
            templateUrl: "storeview/views/storeview.html",
            controller: 'StoreViewCtrl'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/login');
  });
