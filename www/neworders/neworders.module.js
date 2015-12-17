angular
  .module('neworders', [])

  .config(function($stateProvider) {
    $stateProvider

    .state('app.neworders', {
      url: "/neworders",
      views: {
        'menuContent': {
          templateUrl: "storesview/views/neworders.html",
          controller: 'NewOrdersCtrl'
        }
      }
    });
});
