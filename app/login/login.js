angular.module('doIt-app').controller('loginCtr', function ($scope, $http, $location) {
	console.log('login ctr')
	$scope.login = function () {
		$http.post('/login', {
			username: $scope.username,
			password: $scope.password
		}).then(function () {
			console.log('success');
			$location.url('/');
		}, function () {
			// alert("Wrong password or email");
			console.log('fail');
		});
	};
});