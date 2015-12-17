  angular
    .module('storeview', [])

    .run(function($ionicPlatform) {
      $ionicPlatform.ready(function() {
        if(window.StatusBar) {
          StatusBar.styleDefault();
        }
      });
    });
