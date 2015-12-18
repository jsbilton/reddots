angular
    .module('customersignup')
    .controller('CustomerSignupCtrl', function($scope, $stateParams, CustomerSignupService, $window) {

      CustomerSignupService.getStorelocations().success(function(data) {
        console.log(data);
        $scope.storelocations = data;
      });

      $scope.submitStorelocations = function(storelocations) {
        CustomerSignupService.sendStorelocations(storelocations).success(function(data) {
          console.log("SUCCEssFUL Post", data);
          $scope.storelocations = data.storelocations;
        });
      };

      $scope.getOne = function(name) {
        CustomerSignupService.getStore(name).success(function(data){
          console.log(data);
        });
      };
    });
