angular.module('doIt-app').controller('homeCtr', function ($scope, Story, $location) {
//   get all stories
  $scope.stories = Story.query();
  
  
});