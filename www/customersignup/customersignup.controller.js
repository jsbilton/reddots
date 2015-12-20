angular
    .module('customersignup')
    .controller('CustomerSignupCtrl', function($state, $auth, $scope, $stateParams, CustomerSignupService, $window) {

      $scope.signup = function(user) {
        console.log("USER", user);
        $auth.signup({
          displayName: user.displayName,
          email: user.email,
          password: user.password
        }).catch(function(response) {
          console.log("ERROR SIGNUP", response);
          //where to go on failure
          $state.go('app.login');
        });
        //where to go on success
          $state.go('app.map');
      };

      CustomerSignupService.getStores().success(function(data) {
        // console.log(data);
        $scope.stores = data;
      });

      $scope.submitStorelocations = function(storelocations) {
        CustomerSignupService.sendStores(stores).success(function(data) {
          console.log("SUCCEssFUL Post", data);
          $scope.stores = data.stores;
        });
      };

      $scope.getOne = function(name) {
        CustomerSignupService.getStore(name).success(function(data){
          console.log(data);
        });
      };
    });
