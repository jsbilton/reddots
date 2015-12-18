angular
    .module('customersignup')
    .controller('CustomerSignupCtrl', function($scope, $stateParams, CustomerSignupService, $window) {

      CustomerSignupService.getStores().success(function(data) {
        console.log(data);
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
