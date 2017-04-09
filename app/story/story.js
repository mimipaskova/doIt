angular.module('doIt-app').controller('storyCtr', function ($scope, Story, $location) {
//   get all stories not only for the user
  $scope.stories = Story.query();
  
  $scope.addStory = function () {
    console.log("post add story", $scope.title);
    var story = new Story({
      title: $scope.title,
      description: $scope.description
    });
    story.$save().then(function () {
      console.log('success');
      $location.url('/profile');
    }, function () {
      // alert("Wrong password or email");
      console.log('fail');
    });
  };

  $scope.saveStory = function(story) {
    story.update();
  }
});