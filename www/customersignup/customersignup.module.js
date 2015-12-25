angular
  .module('customersignup', ['stores'])

  .config(function($stateProvider) {
    $stateProvider

  .state('app.customersignup', {
    url: "/signup",
    templateUrl: "customersignup/views/customersignup.html",
    views: {
      'menuContent': {
        templateUrl: "customersignup/views/customersignup.html",
        controller: 'CustomerSignupCtrl'
      }
    }
  });
});
