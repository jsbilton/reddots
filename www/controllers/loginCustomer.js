//Login for Customer

angular
.controller('LoginCtrl', function ($scope, $state, $stateParams, $auth, $ionicPopup, $window) {
  $scope.isAuthenticated = function () {
    return $auth.isAuthenticated();
  };

  $scope.login = function() {
      $auth.login({
          email: $scope.email,
          password: $scope.password
        })
        .then(function(res) {
          console.log(res);
          $window.localStorage.setItem('customerRole', res.data.role);
          $state.go('tab.photos');
        })
        .catch(function(response) {

        });
    };

  $scope.authenticate = function(provider) {
      $auth.authenticate(provider)
        .then(function(res) {
          $window.localStorage.setItem('customerRole', res.data.role);
          $ionicPopup.alert({
            title: 'Success',
            content: 'You have successfully logged in!'
          });
          $state.go('tab.photos');
        })
        .catch(function(response) {
          $ionicPopup.alert({
            title: 'Error',
            content: response.data ? response.data || response.data.message : response
          });

        });
    };


    $scope.logout = function() {
      $auth.logout().then(function () {

        $ionicPopup.alert({
          title: "You've been logged out!"
        });
        $state.go('login');
      });
    };

    $scope.isAuthenticated = function() {
      return $auth.isAuthenticated();
    };

});
