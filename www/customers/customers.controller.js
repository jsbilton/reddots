angular
    .module('reddots.controllers', ['ngMap'])
    .controller('CustomerCtrl', function ($scope, $stateParams, CustomerService) {

      CustomerService.getStorelocations().success(function(data) {
        console.log(data);
        $scope.storelocations = data;
      });

      $scope.submitStorelocations = function(storelocations) {
        CustomerService.sendStorelocations(storelocations).success(function(data) {
          console.log("SUCCEssFUL Post", data);
          $scope.storelocations = data.storelocations;
        });
      };

      $scope.getOne = function(name) {
        CustomerService.getStore(name).success(function(data){
          console.log(data);
        });
      };
    });
