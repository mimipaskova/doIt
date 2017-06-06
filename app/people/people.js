function peopleCtr($scope, $http, $state, People, $mdDialog) {

    $scope.filter = {};
    this.people = People.getPeople();
    this.filteredPeople = this.people;
    this.searchField = 'name';
    console.log('dewdwdw', $scope);

    this.search = function(string) {
        this.searchField = string;
        console.log(this.searchField);
        console.log(string);
    }
    this.filtering = function() {
        console.log('filtering');
        this.filteredPeople = this.people.filter((person) => {
            console.log(person[this.searchField], this.searchField, this.searchString);
            return person[this.searchField].includes(this.searchString);
        });
        console.log(this.filteredPeople);
    }

    this.seePerson = function(ev, person) {
        console.log(person);
        $mdDialog.show(
        $mdDialog.alert()
            .parent(angular.element(document.querySelector('#popupContainer')))
            .clickOutsideToClose(true)
            .title(person.name)
            .textContent(person.position + ' ' +  person.email)
            .ariaLabel('Alert Dialog Demo')
            .ok('Got it!')
            .targetEvent(ev)
        );
    }

}

angular.module('doIt-app').component('people', {
    bindings: {},
    controller: peopleCtr,
    templateUrl: 'people/people.html'
});


angular.module('doIt-app')
.filter('reverse', function() {
  return function(input, uppercase) {
    input = input || '';
    var out = '';
    for (var i = 0; i < input.length; i++) {
      out = input.charAt(i) + out;
    }
    // conditional based on optional argument
    if (uppercase) {
      out = out.toUpperCase();
    }
    return out;
  };
})
// .controller('MyController', ['$scope', 'reverseFilter', function($scope, reverseFilter) {
//   $scope.greeting = 'hello';
//   $scope.filteredGreeting = reverseFilter($scope.greeting);
// }]);