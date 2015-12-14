angular.module('reddots.controllers', [
  'ngMap'])

.controller('AppCtrl', function($scope) {
})

.controller('HeaderCtrl', function($scope) {
  $scope.header = header;
})

.controller('LoginCtrl', function($scope) {
  $scope.login = login;
})

.controller('LoginCtrl', function($scope, $stateParams) {

})

.controller('LocationsCtrl', function($scope) {
  $scope.locations = locations;
})

.controller('LocationsCtrl', function($scope, $stateParams) {

})

.controller('CustomerCtrl', function($scope) {
  $scope.createcustomer = create-customer;
})

.controller('CustomerCtrl', function($scope, $stateParams) {

})

.controller('OwnerCtrl', function($scope) {
  $scope.createowner = owner;
})

.controller('OwnerCtrl', function($scope, $stateParams) {

});

//POPUP confirm 
// angular.module('mySuperApp', ['ionic'])
// .controller('PopupCtrl',function($scope, $ionicPopup, $timeout) {
//
// // Triggered on a button click, or some other target
// $scope.showPopup = function() {
//   $scope.data = {}
//
//   // An elaborate, custom popup
//   var myPopup = $ionicPopup.show({
//     template: '<input type="password" ng-model="data.wifi">',
//     title: 'Enter Wi-Fi Password',
//     subTitle: 'Please use normal things',
//     scope: $scope,
//     buttons: [
//       { text: 'Cancel' },
//       {
//         text: '<b>Save</b>',
//         type: 'button-positive',
//         onTap: function(e) {
//           if (!$scope.data.wifi) {
//             //don't allow the user to close unless he enters wifi password
//             e.preventDefault();
//           } else {
//             return $scope.data.wifi;
//           }
//         }
//       }
//     ]
//   });
//   myPopup.then(function(res) {
//     console.log('Tapped!', res);
//   });
//   $timeout(function() {
//      myPopup.close(); //close the popup after 3 seconds for some reason
//   }, 3000);
//  };
//  // A confirm dialog
//  $scope.showConfirm = function() {
//    var confirmPopup = $ionicPopup.confirm({
//      title: 'Consume Ice Cream',
//      template: 'Are you sure you want to eat this ice cream?'
//    });
//    confirmPopup.then(function(res) {
//      if(res) {
//        console.log('You are sure');
//      } else {
//        console.log('You are not sure');
//      }
//    });
//  };
