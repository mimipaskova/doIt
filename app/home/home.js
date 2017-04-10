function homeCtr($scope, $http, $state, _, Cities) {

    console.log(Cities);
    this.cities = Cities.getCities();

    this.showMap = function(city) {
        console.log('show map', city);

        this.currentCity = city.name;
        var location = {latitude: city.coordinates.latitude, longitude: city.coordinates.longitude};
        console.log(city);
        Cities.showCity(city, 'map');
    }

};


angular.module('doIt-app').component('home', {
  bindings: {},
  controller: homeCtr,
  templateUrl: 'home/home.html'
});



function changeMarker ({latitude, longitude}) {

    var city = {lat: latitude, lng: longitude};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: city
    });
    var marker = new google.maps.Marker({
        position: city,
        map: map
    });
}