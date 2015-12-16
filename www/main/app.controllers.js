angular.module('reddots.controllers', ['ngMap'])

.controller('AppCtrl', function($scope) {
})

.controller('LoginCtrl', function($scope, $stateParams) {
  // $scope.login = login
})

.controller('CustomerCtrl', function($scope, $stateParams) {
  // $scope.createcustomer = createcustomer;
})

.controller('StorelocationsCtrl', function($scope, $stateParams) {
  // $scope.locations = locations;
})

.controller('StoreCtrl', function($scope, $stateParams) {
  // $scope.createstore = store;
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
