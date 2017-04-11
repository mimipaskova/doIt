function cityDetailsCtr($scope, $http, $state, _, Cities, $stateParams) {
    console.log($stateParams.name);

    this.city = _.find(Cities.getCities(), c => {if(c.name === $stateParams.name) return c;});

    this.addDescription = function() {
        this.city.description = "gewgfowefbueiwbfiwbfewbfibewfiewbfiewfbew";
    }

    console.log(this.city);

    this.showMarker = function() {
        this.map = Cities.initMap();
        Cities.hideMarkers();
        Cities.addMarker(this.city);
    }
    
}

angular.module('doIt-app').component('cityDetails', {
    bindings: {},
    controller: cityDetailsCtr,
    templateUrl: 'cityDetails/cityDetails.html'
});