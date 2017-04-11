function cityDetailsCtr($scope, $http, $state, _, Cities) {

    console.log(Cities);
    this.cities = Cities.getCities();

    this.changeCity = function() {
        var city = _.findWhere(this.cities, {name: this.currentCity});
        console.log(city);
        Cities.showCity(city, 'map');
    };


    this.addCity = function() {
        this.city = {
            name: $scope.city.name,
            coordinates: {
                lat: $scope.city.latitude,
                lng: $scope.city.longitude
            }
        };
        console.log(this.city);
        Cities.addCity(this.city).then(() => {
            console.log('stabna');
        }, err => {
            console.log('error', err);
        });
    };

    this.currentCity = '';
}

angular.module('doIt-app').component('cityDetails', {
    bindings: {},
    controller: cityDetailsCtr,
    templateUrl: 'cityDetails/cityDetails.html'
});