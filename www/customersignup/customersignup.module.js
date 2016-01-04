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
  })
//added this to route to customer store VIEW
  .state('app.custHome', {
    url: "/custHome/:custId",
    views: {
      'menuContent': {
        templateUrl: "customersignup/views/custHome.html",
        controller: 'CustomerSignupCtrl'
      }
    }
  });

});
