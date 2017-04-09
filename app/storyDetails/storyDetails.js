angular.module('doIt-app').controller('storyDetailsCtr', function ($scope, Story, $location, $routeParams) {
  console.log('storyDetails ctr');
  console.log($routeParams.id);
//   $scope.storyId = $routeParams.id; // take it from the url
  $scope.story = Story.get({ id: $routeParams.id });

  console.log($scope.story);

  $scope.editStory = function() {
    console.log("You have to edit story");
  }
});