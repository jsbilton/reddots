angular
  .module('cart', ['LocalStorageModule'])

  .config(function ($stateProvider) {
      $stateProvider
        .state('app.cart', {
          url: '/cart/:storeId',
          views: {
            'menuContent': {
          templateUrl: 'cart/views/cart.html',
          controller: 'CartCtrl'
            }
          },
          // onEnter: function ($state, $auth) {
          //   if(!$auth.isAuthenticated()) $state.go('app.login');
          // }
        });

    });
