function homeCtr($scope, $http, $state, _, Cities) {

    console.log(Cities);
    this.cities = Cities.getCities();

    this.showMap = function(city) {
        console.log('show map', city);

        this.currentCity = city.name;
        console.log(city);
        Cities.showCity(city, 'map');
    };
}


angular.module('doIt-app').component('home', {
    bindings: {},
    controller: homeCtr,
    templateUrl: 'home/home.html'
});