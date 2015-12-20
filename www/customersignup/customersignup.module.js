angular
  .module('customersignup', ['map'])

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
