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

//need to store to be able to shop from
      $scope.getOneStore = function() {
        var id = $stateParams.storeId;
        StoresService.getStore(id).then(function(data) {
           console.log(data);
           $scope.stores = data;
         });
      };

    });
