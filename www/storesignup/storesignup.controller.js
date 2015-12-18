angular
    .module('storesignup')
    .controller('StoreSignupCtrl', function ($scope, $stateParams, StoreSignupService, $window) {

      $scope.submitStore = function(store) {
        StoreSignupService.sendStore(store).success(function(data) {
          console.log("SUCCEssFUL Post", data);
          $scope.storeview = data.store;
        });
      };

      

    });
