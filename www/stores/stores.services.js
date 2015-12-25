angular
  .module('stores')
  .factory('StoresService', function ($http, $rootScope) {
    var url = 'http://tiny-tiny.herokuapp.com/collections/reddotsmapdata';
    var getSpots = function () {
      return $http.get(url);
    };
    var createSpot = function (newSpot) {
      var geocoder = new google.maps.Geocoder();
      geocoder.geocode({address: newSpot.address}, function (res) {
        console.log("response from google: ", res);
        newSpot.coords = {
          latitude: res[0].geometry.location.lat(),
          longitude: res[0].geometry.location.lng(),
        };
        console.log(newSpot);
        $http.post(url, newSpot).success(function (res) {
          console.log("yaay, spot created!");
        });

      });

    };
    var deleteSpot = function (removeSpot) {
      // var geocoder = new google.maps.Geocoder();
      // geocoder.geocode({address: removeSpot.address}, function (res) {
      //   console.log("response from google: ", res);
      //   removeSpot.coords = {
      //     latitude: res[0].geometry.location.lat(),
      //     longitude: res[0].geometry.location.lng(),
      //   };
        console.log(removeSpot);
        $http.delete(url, removeSpot).success(function (res) {
          console.log("yaay, spot deleted!");
        });

      // });

    };
    return {
      getSpots: getSpots,
      createSpot: createSpot,
      deleteSpot: deleteSpot
    };

  });

angular
  .module('stores')
  .factory('ListFactory', function() {

    var list = [];
    var listStore = localStorage.getItem("list");
    if (listStore !== null && listStore !== '' && angular.isArray(angular.fromJson(listStore))) {
      list = angular.fromJson(listStore);
    }
    var listSrv = {
      setList: function(newList) {
        list = newList;
        localStorage.setItem("list", angular.toJson(list));
        return true;
      },
      getList: function() {
        if (list !== null) {
          return list;
        } else {
          return [];
        }
      }
    };
    return listSrv;
  });

  // .factory('StoreViewService', function ($http) {
  //
  //     var addItem = function(newItem){
  //       $http.post(url, newItem).then(function(res) {
  //         console.log(res);
  //       });
  //     };
  //
  //     var getItems = function () {
  //       return $http.get(url);
  //     };
  //
  //     return {
  //       addItem: addItem,
  //       getItems: getItems
  //     };
  // });

  // angular
  //   .module('storesignup')
  //   .factory('StoreSignupService', function($http, $rootScope) {
  //     var url = '#/app/storesignup';
  //
  //     function createStore() {
  //       return $http.get('/storeview');
  //     }
  //
  //     function sendStore(store) {
  //       return $http.post(url, store);
  //     }
  //
  //     function getStore(name) {
  //       return $http.get('/store/' + name);
  //     }
  //
  //     var addItem = function(newItem){
  //       $http.post(url, newItem).then(function(res) {
  //         console.log(res);
  //       });
  //     };
  //
  //     var getItems = function () {
  //       return $http.get(url);
  //     };
  //
  //     return {
  //       createStore: createStore,
  //       sendStore: sendStore,
  //       getStore: getStore,
  //       addItem: addItem,
  //       getItems: getItems
  //     };
  //
  //   });
