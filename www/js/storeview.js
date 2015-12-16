(function() {
  'use strict';
  angular
    .module('storeview', [
      'ionic',
      'ngMap'
    ])

    .run(function($ionicPlatform) {
      $ionicPlatform.ready(function() {
        if(window.StatusBar) {
          StatusBar.styleDefault();
        }
      });
    })

}());
