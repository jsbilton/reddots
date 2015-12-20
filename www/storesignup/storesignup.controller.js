angular
    .module('storesignup')
    .controller('StoreSignupCtrl', function ($state, $auth, $scope, $stateParams, StoreSignupService, $window) {

      $scope.signup = function(store) {
        console.log("STORE", store);
        $auth.signup({
          displayName: store.displayName,
          storeAddress: store.address,
          email: store.email,
          password: store.password,
          confirmPassword: store.confirmPassword
        }).catch(function(response) {
          console.log("ERROR SIGNUP", response);
          //where to go on failure
          $state.go('app.storesignup');
        });
        //where to go on success
          $state.go('app.storeview');
      };

    });
