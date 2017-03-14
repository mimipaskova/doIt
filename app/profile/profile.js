angular.module('doIt-app')
.controller('profileCtr', function ($scope, $http, $location, Profile) {
  console.log('profile ctr');
  $scope.profile = Profile.get();
  $scope.logout = function () {
    $http.post('/api/logout').then(function () {
      console.log('success');
      $location.url('/');
    }, function () {
      console.log('fail');
    });
  };
});