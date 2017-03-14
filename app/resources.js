angular.module('doIt-app')
.factory('Profile', function ($resource) {
	return $resource('/api/profile');
});