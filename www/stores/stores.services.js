angular
  .module('stores')
  .factory('StoresService', function ($http, $rootScope) {
    var url = 'http://tiny-tiny.herokuapp.com/collections/reddot-stores';
    var getStores = function () {
      return $http.get(url);
    };
    var createStore = function (newStore) {
      var geocoder = new google.maps.Geocoder();
      geocoder.geocode({address: newStore.address}, function (res) {
        console.log("response from google: ", res);
        newStore.coords = {
          latitude: res[0].geometry.location.lat(),
          longitude: res[0].geometry.location.lng(),
        };
        console.log(newStore);
        $http.post(url, newStore).success(function (res) {
          console.log("yaay, store created!");
        });

      });

    };

    var getStore = function(id) {
      console.log(url + "/" + id);
      return $http.get(url + "/" + id);
    };

    var deleteStore = function (removeStore) {
      // var geocoder = new google.maps.Geocoder();
      // geocoder.geocode({address: removeStore.address}, function (res) {
      //   console.log("response from google: ", res);
      //   removeStore.coords = {
      //     latitude: res[0].geometry.location.lat(),
      //     longitude: res[0].geometry.location.lng(),
      //   };
        console.log(removeStore);
        $http.delete(url, removeStore).success(function (res) {
          console.log("yaay, store deleted!");
        });

      // });

    };

    var addItem = function (newItem) {
      var item = new addItem();
      item.description({itemName: newItem.name, itemPrice: newItem.price}, function (res) {
        console.log("response from heroku: ", res);
        // newItem.description = {
        //   latitude: res[0].geometry.location.lat(),
        //   longitude: res[0].geometry.location.lng(),
        // };
        console.log(newItem);
        $http.post(url, newItem).success(function (res) {
          console.log("NEW ITEM created!");
        });

      });

    };


    return {
      getStores: getStores,
      getStore: getStore,
      createStore: createStore,
      deleteStore: deleteStore,
      addItem: addItem,
      // getItems: getItems
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
