angular.module('doIt-app', ['ngRoute', 'ngResource']).config(['$routeProvider', '$locationProvider', function ($route, $locationProvider) {
  $locationProvider.hashPrefix('');
  $route
  .when('/login', {
    templateUrl: 'login/login.html',
    controller: 'loginCtr'
  })
  .when('/register', {
    templateUrl: 'register/register.html',
    controller: 'registerCtr'
  })
  .when('/profile', {
    templateUrl: 'profile/profile.html',
    controller: 'profileCtr'
  })
  .when('/', {
    template: ''
  })
  .otherwise({
    redirectTo: '/login'
  });
}]);
