angular.module('doIt-app', ['ngRoute']).config(['$routeProvider', '$locationProvider', function ($route, $locationProvider) {
	$locationProvider.hashPrefix('');
	$route
	.when('/login', {
		templateUrl: 'login/login.html',
		controller: 'loginCtr'
	})
	.when('/', {
		template: ''
	})
	.otherwise({
		redirectTo: '/login'
	});
}])
