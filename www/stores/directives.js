(function() {
  'use strict';

  angular.module ('stores')
    .directive('storeDetail', function() {
      return {
        restrict: 'E',
        templateUrl: 'stores/views/storeDetail.html',
        controller: function($scope, StoresService) {

        }
      };
    });
}());
