angular
    .module('storesignup')
    .controller('StoreSignupCtrl', function ($scope, $stateParams, StoreSignupService, $window) {

      $scope.signup = function() {
        $auth.signup({
          displayName: $scope.displayName,
          email: $scope.email,
          password: $scope.password
        }).catch(function(response) {
          if (typeof response.data.message === 'object') {
            angular.forEach(response.data.message, function(message) {
              $alert({
                content: message[0],
                animation: 'fadeZoomFadeDown',
                type: 'material',
                duration: 3
              });
            });
          } else {
            $alert({
              content: response.data.message,
              animation: 'fadeZoomFadeDown',
              type: 'material',
              duration: 3
            });
          }
        });
      };

      $scope.submitStore = function(store) {
        StoreSignupService.sendStore(store).success(function(data) {
          console.log("SUCCEssFUL Post", data);
          $scope.storeview = data.store;
        });
      };



    });
