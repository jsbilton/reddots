angular.module('starter.controllers', [])
.controller('LoginCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // $scope.login = Login.all();
  // $scope.remove = function(chat) {
  //   Login.remove(chat);
  // };
})

.controller('LoginCtrl', function($scope, $stateParams, Login) {
  $scope.login = Login.get($stateParams.loginId);
})

.controller('AppCtrl', function($scope) {
  $scope.settings = {
    enableCustomer: true
  };
});
