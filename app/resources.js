angular.module('doIt-app')
.factory('Profile', function ($resource) {
	return $resource('/api/profile');
})
.factory('Story', function ($resource) {
	return $resource('/api/story/:id', { id: '@_id' }, {
		update: {method: 'PUT'}
	});
});