angular.module('doIt-app', ['underscore', 'ui.router', 'ngMaterial', 'ngResource']).config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('login', {
        url: '/login',
        template: '<login></login>'
    })
    .state('register', {
        url: '/register',
        template: '<register></register>'
    })
    .state('profile', {
        url: '/profile',
        template: '<profile></profile>'
    })
    .state('home', {
        url: '/home',
        template: '<home></home>'
    })
    .state('cityDetails', {
        url: '/cityDetails/:name',
        template: '<city-details></city-details>'
    })
    .state('cityEdit', {
        url: '/cityEdit/:name',
        template: '<city-edit></city-edit>'
    })
    .state('map', {
        url: '/map',
        template: '<map></map>'
    });

    $urlRouterProvider.otherwise('/');
}]);
