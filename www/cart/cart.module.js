angular
  .module('cart', ['stores'])
  .config(function ($stateProvider) {
      $stateProvider
        .state('app.cart', {
          url: '/cart',
          views: {
          'menuContent': {
          templateUrl: 'cart/views/cart.html',
          controller: 'CartController'
            }
          },
          // onEnter: function ($state, $auth) {
          //   if(!$auth.isAuthenticated()) $state.go('login');
          // }
      });
    });
