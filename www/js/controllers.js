angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
})

.controller('LoginCtrl', function($scope) {
  $scope.login = [
    { title: 'Name', id: 1 },
    { title: 'Email', id: 2 },
    { title: 'Password', id: 3 },
    { title: 'Confirm', id: 4 },
  ];
})

.controller('LoginCtrl', function($scope, $stateParams) {
})
