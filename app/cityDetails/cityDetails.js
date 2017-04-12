function cityDetailsCtr($scope, $http, $state, _, Cities, Map, $stateParams) {
    console.log($stateParams.name);

    this.city = _.find(Cities.getCities(), c => {if(c.name === $stateParams.name) return c;});

    this.description = this.city.description;
    this.descButton = this.city.description ? 'Change description' : 'Add description';

    this.addDescriptionDialog = function() {
        $scope.showTheForm = true;
    };

    this.addDescription = function() {
        var changedCity = this.city;
        changedCity.description = this.description;
        Cities.addDescription(changedCity);
        $scope.showTheForm = false;
        this.descButton = 'Change description';
    };

    this.showMarker = function() {
        this.map = Map.initMap();
        Map.hideMarkers();
        Map.addMarker(this.city);
    };
}

angular.module('doIt-app').component('cityDetails', {
    bindings: {},
    controller: cityDetailsCtr,
    templateUrl: 'cityDetails/cityDetails.html'
});