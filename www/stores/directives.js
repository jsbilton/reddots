(function() {
  'use strict';

  angular.module ('stores')
    .directive('storeMarker', function() {
      return {
        restrict: 'E',
        templateUrl: 'stores/views/storeMarker.html',
        controller: function($scope, StoresService) {

        }
      };
    });
}());
