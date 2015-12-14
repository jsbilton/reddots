
angular.module('reddots.controllers', [
  'ionic',
  'ngMap',
  'ngCordova'
])

.controller('AppCtrl', function($scope) {
})

.controller('HeaderCtrl', function($scope) {
  $scope.header = header;
})

.controller('LoginCtrl', function($scope) {
  $scope.login = login;
})

.controller('LocationsCtrl', function($scope, $stateParams) {
  $scope.locations = locations;
})


.controller('CustomerCtrl', function($scope, $stateParams) {
  $scope.createcustomer = create-customer;
})


.controller('OwnerCtrl', function($scope, $stateParams) {
  $scope.createowner = owner;
});
