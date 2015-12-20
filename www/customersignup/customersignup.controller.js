angular
    .module('customersignup')
    .controller('CustomerSignupCtrl', function($state, $auth, $scope, $stateParams, CustomerSignupService, $window) {

      $scope.signup = function(user) {
        console.log("USER", user);
        $auth.signup({
          displayName: user.displayName,
          email: user.email,
          password: user.password,
          confirmPassword: user.confirmPassword
        }).catch(function(response) {
          console.log("ERROR SIGNUP", response);
          //where to go on failure
          $state.go('app.signup');
        });
        //where to go on success
          $state.go('app.map');
      };

    });
