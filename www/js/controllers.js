
angular.module('reddots.controllers', [
  'ngMap',
  'ngCordova'
])

.controller('AppCtrl', function($scope) {
})

.controller('HeaderCtrl', function($scope) {
  $scope.header = header;
})

.controller('LoginCtrl', function($scope) {
  $scope.login = login;
})

.controller('LocationsCtrl', function($scope, $stateParams) {
  $scope.locations = locations;
})


.controller('CustomerCtrl', function($scope, $stateParams) {
  $scope.createcustomer = create-customer;
})


.controller('OwnerCtrl', function($scope, $stateParams) {
  $scope.createowner = owner;
});




// .controller('StoreviewCtrl', function($scope, $cordovaBarcodeScanner) {
//
//     $scope.scanBarcode = function() {
//         $cordovaBarcodeScanner.scan().then(function(imageData) {
//             alert(imageData.text);
//             console.log("Barcode Format -> " + imageData.format);
//             console.log("Cancelled -> " + imageData.cancelled);
//         }, function(error) {
//             console.log("An error happened -> " + error);
//         });
//     };

// .controller('StoreviewCtrl', function($scope) {
//     $scope.storeview = storeview;
//
// })
//
// .controller('StoreviewCtrl', function($scope, $stateParams) {
//
// });







// .controller('PopupCtrl',function($scope, $ionicPopup, $timeout) {
//
// // Triggered on a button click, or some other target
// $scope.showPopup = function() {
//   $scope.data = {}
//
//   // An elaborate, custom popup
//   var myPopup = $ionicPopup.show({
//     template: '',
//     title: 'Confirm Account ',
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
//      title: 'Confirm Account',
//      template: 'Are you sure you want to confirm account?'
//    });
//    confirmPopup.then(function(res) {
//      if(res) {
//        console.log('You are sure');
//      } else {
//        console.log('You are not sure');
//      }
//    });
//  };
