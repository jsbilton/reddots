
angular.module('reddots.controllers', [
  'ngMap'
])

.controller('AppCtrl', function($scope) {
})

.controller('LoginCtrl', function($scope, $stateParams) {
  // $scope.login = login;
})

.controller('LocationsCtrl', function($scope, $stateParams) {
  // $scope.locations = locations;
})


.controller('CustomerCtrl', function($scope, $stateParams) {
  // $scope.createcustomer = create-customer;
})


.controller('OwnerCtrl', function($scope, $stateParams) {
  // $scope.createowner = owner;
})

.controller('StoreviewCtrl', function($scope, $stateParams) {
    // $scope.storeview = storeview;
})

.controller('NewordersCtrl', function($scope, $stateParams) {
    // $scope.neworders = neworders;
    $scope.shouldShowDelete = false;
    $scope.shouldShowReorder = false;
    $scope.listCanSwipe = true;
});
