angular
    .module('storesignup')
    .controller('StoreSignupCtrl', function ($state, $auth, $scope, $stateParams, StoreSignupService, $window) {

      $scope.signup = function(newSpot) {
        console.log("STORE", newSpot);
        $auth.signup({
          displayName: newSpot.name,
          storeAddress: newSpot.address,
          email: newSpot.email,
          password: newSpot.password,
          confirmPassword: newSpot.confirmPassword
        }).catch(function(response) {
          console.log("ERROR SIGNUP", response);
          //where to go on failure
          $state.go('app.storesignup');
        });
        //where to go on success
          $state.go('app.storeview');
      };

    });
