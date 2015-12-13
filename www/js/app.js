// Ionic Starter App, v0.9.20

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular

  .module('starter', ['ionic',
    'starter.controllers',
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
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.header', {
      url: "/header",
      views: {
        'menuContent' :{
          templateUrl: "templates/header.html",
          controller: "HeaderCtrl"
        }
      }
    })

    .state('app.browse', {
      url: "/browse",
      views: {
        'menuContent' :{
          templateUrl: "templates/browse.html",
          controller: "BrowseCtrl"
        }
      }
    })

    .state('app.login', {
      url: "/login",
      views: {
        'menuContent' :{
          templateUrl: "templates/login.html",
          controller: 'LoginCtrl'
        }
      }
    })

    .state('app.create-customer', {
      url: "/createcustomer",
      views: {
        'menuContent' :{
          templateUrl: "templates/createcustomer.html",
          controller: 'CustomerCtrl'
        }
      }
    })

    // .state('app.login', {
    //   url: "/login",
    //   views: {
    //     'menuContent' :{
    //       templateUrl: "templates/createcustomer.html",
    //       controller: 'AppCtrl'
    //     }
    //   }
    // })

    .state('app.create-owner', {
      url: "/createowner",
      views: {
        'menuContent' :{
          templateUrl: "templates/createowner.html",
          controller: 'OwnerCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');
});
