angular
    .module('customersignup')
    .controller('CustomerSignupCtrl', function($state, $auth, $scope, $stateParams, CustomerSignupService, $window) {

      $scope.signup = function(newCustomer) {
        console.log("USER", newCustomer);
        $auth.signup({
          displayName: newCustomer.displayName,
          email: newCustomer.email,
          password: newCustomer.password,
          confirmPassword: newCustomer.confirmPassword
        }).catch(function(response) {
          console.log("ERROR SIGNUP", response);
          //where to go on failure
          $state.go('app.signup');
        });
        //where to go on success
          $state.go('app.map');
      };



    });
