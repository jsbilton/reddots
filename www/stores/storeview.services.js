// services for adding an item and getting an item
(function() {
  'use strict';

  angular
  .module('reddots.storeview.services')
  .factory('StoreviewService', function ($http) {

      var addItem = function(newItem){
        $http.post(url, newItem).then(function(res) {
          console.log(res);
        });
      };

      var getItems = function () {
        return $http.get(url);
      };

      return {
        addItem: addItem,
        getItems: getItems
      };
  });

}());
