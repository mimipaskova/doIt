angular.module('doIt-app').controller('registerCtr', function ($scope, $http, $location) {
  console.log('register ctr');
  $scope.register = function () {
    $http.post('/api/register', {
      username: $scope.username,
      password: $scope.password
    }).then(function () {
      console.log('success');
      $location.url('/profile');
    }, function () {
      // alert("Wrong password or email");
      console.log('fail');
    });
  };
});