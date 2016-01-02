angular
  .module('cart', ['LocalStorageModule'])

  .config(function ($stateProvider) {
      $stateProvider
        .state('app.cart', {
          url: '/cart',
          views: {
            'menuContent': {
              templateUrl: 'cart/views/cart.html',
              controller: 'CartCtrl'
            }
          },
          // onEnter: function ($state, $auth) {
          //   if(!$auth.isAuthenticated()) $state.go('app.login');
          // }
        })
        .state('app.cart-detail', {
          url: '/cart/:storeId',
          views: {
            'menuContent': {
              templateUrl: 'cart/views/cartProductDetail.html',
              controller: 'CartCtrl'
            }

          },
          // onEnter: function ($state, $auth) {
          //   if(!$auth.isAuthenticated()) $state.go('app.login');
          // }

        })
//added this for the customer button to direct to checkout view
        .state('app.checkout', {
          url: '/checkout/:custId',
          views: {
            'menuContent': {
              templateUrl: 'cart/views/checkout.html',
              controller: 'CartCtrl'
            }
          }
        });

    });
