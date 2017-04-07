function profileCtr($scope, $http, $state, Profile) {
  console.log('profile ctr', Profile.get());
  $scope.profile = Profile.get();
  $scope.logout = function () {
    $http.post('/api/logout').then(function () {
      console.log('success');
      $state.go("login");
    }, function () {
      console.log('fail');
    });
  };
};

angular.module('doIt-app').component('profile', {
  bindings: {},
  controller: profileCtr,
  templateUrl: 'profile/profile.html'
});