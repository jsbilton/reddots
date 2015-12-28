angular
  .module('cart', [
    'ui.router'
  ])
  .config(function ($stateProvider) {
      $stateProvider
        .state('cart', {
          url: '/cart',
          views: {
          'menuContent': {
          templateUrl: 'cart/views/cart.html',
          controller: 'CartController as cartCtrl'
            }
          },
          onEnter: function ($state, $auth) {
            if(!$auth.isAuthenticated()) $state.go('login');
          }
      });
    });
