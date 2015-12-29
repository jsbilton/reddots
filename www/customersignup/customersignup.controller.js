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

// need to control the customer store view and be able to add/remove/edit for the cart
      var vm = this;
      $scope.custHome = CustomerSignupService.getItems();

      if($stateParams.custId) {
        vm.storeDetail = CustomerSignupService.getItems($stateParams.custId);
      }
       $scope.name="addCustItems";
       $scope.items = [];
       $scope.addItem = function (itemName, itemPrice) {
        $scope.items.push({
          name: itemName,
          price: itemPrice
        });
        $scope.itemName = "";
        $scope.itemPrice = "";
      };

      $scope.removeItem = function (index) {
        $scope.items.splice(index, 1);
      };

      $scope.edit = function(item) {
        alert('Edit Item: ' + item.id);
      };

    });
