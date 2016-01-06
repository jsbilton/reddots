angular
  .module('checkout', ['LocalStorageModule'])

  .config(function ($stateProvider) {
      $stateProvider
        .state('app.checkout', {
          url: '/checkout/:storeId',
          views: {
            'menuContent': {
              templateUrl: 'checkout/views/checkout.html',
              controller: 'CheckoutCtrl'
            }
          },

          // onEnter: function ($state, $auth) {
          //   if(!$auth.isAuthenticated()) $state.go('app.login');
          // }

        });

    });
