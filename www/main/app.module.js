angular
  .module('reddots', [
    'ionic',
    'reddots.controllers',
    'map',
    'storeview',
    'storesignup',
    'customersignup',
    'angular-mapbox',
    'ui.router',
    'ngSanitize',
    'satellizer'
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
  })
  .config(function ($authProvider) {
    if (ionic.Platform.isIOS() || ionic.Platform.isAndroid()) {
      $authProvider.cordova = true;
    }
   $authProvider.loginUrl = '/auth/login';
   $authProvider.signupUrl = '/auth/signup';

  $authProvider.google({
     clientId: '469379853070-g23rimletc4dddro1vcqvak3nk3gsrgm.apps.googleusercontent.com',
     url: 'https://mean-starter.herokuapp.com/auth/google',
     redirectUri: 'http://localhost'
   });
});
