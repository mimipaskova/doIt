function changeMarker ({latitude, longitude}) {
    document.getElementById('map').style.display = 'block';

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

function homeCtr($scope, $http, $state, _, Cities) {

    this.cities = Cities;

    this.changeCity = function() {
        console.log('sth changed', this.currentCity);
        var location = _.findWhere(this.cities, {name: this.currentCity}).coordinates;
        console.log(location);
        changeMarker(location);
    };

    this.currentCity = '';

};


angular.module('doIt-app').component('home', {
  bindings: {},
  controller: homeCtr,
  templateUrl: 'home/home.html'
});