angular
  .module('storesignup', [])

  .config(function($stateProvider) {
    $stateProvider

  .state('app.storesignup', {
    url: "/storesignup",
    templateUrl: "storesignup/views/storesignup.html",
    views: {
      'menuContent': {
        templateUrl: "storesignup/views/storesignup.html",
        controller: 'StoreSignupCtrl'
      }
    }
  });
});
