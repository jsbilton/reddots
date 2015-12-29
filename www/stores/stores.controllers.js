// stores.controllers.js controls the same view for all users whether they are authenticated or not.
// it displays the map, and ideally, locations of nearby stores based on data from the database.
// geolocation needs to work. this goes hand-in-hand with store location data populating the map.

angular
.module('stores')
.controller('StoresCtrl', function($state, $auth, $scope, StoresService, $stateParams, mapboxService, $ionicLoading, $window) {
  mapboxService.init({ accessToken: 'pk.eyJ1IjoiamV0YmFsYWd0YXMiLCJhIjoiY2lpZ28waDZlMDJobHY1bTF1YnZrcHcxdSJ9.2YP0ceOasnLzdmIAG9Uy3g' });
    $scope.map = {
      center: {
        latitude: 32.788969,
        longitude: -79.938103
      },
      zoom: 8
    };
     StoresService.getStores().success(function (stores) {
       $scope.stores = stores;
     });

     $scope.goToStoreView = function(store) {
       var id = store._id;
       $state.go('app.storeview', {storeId: id});
     };

     $scope.addStore = function (store) {
       StoresService.createStore(store);
     };

     $scope.deleteStore = function (store) {
       $scope.stores.splice(index, 1);
     };

     $scope.signup = function(newStore) {
       console.log("STORE", newStore);
       $auth.signup({
         displayName: newStore.name,
         storeAddress: newStore.address,
         email: newStore.email,
         password: newStore.password,
         confirmPassword: newStore.confirmPassword
       }).catch(function(response) {
         console.log("ERROR SIGNUP", response);
         //where to go on failure
         $state.go('app.storesignup');
       });
       //where to go on success
        var id = store._id;
         $state.go('app.storeview', {storedId: id});
     };

    //  StoresService.addItem().success(function (item) {
    //    $scope.item = item;
    //  });

    var vm = this;
    //$scope.storeview = StoresService.getStores();



    if($stateParams.storeId) {
      vm.storeDetail = StoresService.getStore($stateParams.storeId);
    }
     $scope.name="addStoreItems";
     $scope.items = [];
     $scope.addItem = function (itemName, itemPrice) {
      $scope.items.push({
        name: itemName,
        price: itemPrice
      });
      $scope.itemName = "";
      $scope.itemPrice = "";
    };

    $scope.removeItem = function (index) {
      $scope.items.splice(index, 1);
    };

    $scope.edit = function(item) {
      alert('Edit Item: ' + item.id);
    };

    $scope.getOneStore = function() {
      var id = $stateParams.storeId;
      StoresService.getStores().success(function (stores) {
        for (var i in stores) {
          if (stores[i]._id === id) {
            $scope.OneStore = stores[i];
          }
        }
        console.log(stores[i]);
      });
    };

});
