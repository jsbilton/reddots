angular.module('reddots.controllers', [
  'ngMap'
])

.controller('AppCtrl', function($scope) {
})

.controller('LoginCtrl', function($scope, $stateParams) {
  // $scope.login = login
})

.controller('StoreViewCtrl', function($scope, $stateParams) {
    // $scope.storeview = storeview;
})

.controller('NewOrdersCtrl', function($scope, $stateParams) {
    // $scope.neworders = neworders;
    $scope.shouldShowDelete = false;
    $scope.shouldShowReorder = false;
    $scope.listCanSwipe = true;
});
