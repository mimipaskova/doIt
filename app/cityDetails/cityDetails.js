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
                latitude: $scope.city.latitude,
                longitude: $scope.city.longitude
            }
        }
        console.log(this.city);
        Cities.addCity(this.city);
    }

    this.currentCity = '';
};


angular.module('doIt-app').component('cityDetails', {
  bindings: {},
  controller: cityDetailsCtr,
  templateUrl: 'cityDetails/cityDetails.html'
});