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
  .state('app.custStoreView', {
    url: "/custStoreView/:custId",
    views: {
      'menuContent': {
        templateUrl: "customersignup/views/custStoreView.html",
        controller: 'CustomerSignupCtrl'
      }
    }
  });

});
