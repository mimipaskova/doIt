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


function homeCtr($scope, $http, $state, _) {
    this.changeCity = function() {
        console.log('sth changed', this.currentCity);
        var location = _.findWhere(this.cities, {name: this.currentCity}).coordinates;
        console.log(location);
        changeMarker(location);
    };

    this.currentCity = '';

    this.cities = [
        {
            name: 'Sofia',
            coordinates: {
                latitude: 42.6977082,
                longitude: 23.321867500000053
            }
        }, {
            name: 'Plovdiv',
            coordinates: {
                latitude: 42.1354079,
                longitude: 24.74529039999993
            }
        }, {
            name: 'Varna',
            coordinates: {
                latitude: 43.2140504,
                longitude: 27.914733299999966
            }
        }, {
            name: 'Burgas',
            coordinates: {
                latitude: 42.50479259999999,
                longitude: 27.462636100000054
            }
        }, {
            name: 'Pleven',
            coordinates: {
                latitude: 43.642566,
                longitude: -79.38705700000003
            }
        }, {
            name: 'Turnovo',
            coordinates: {
                latitude: 43.642566,
                longitude: -79.38705700000003
            }
        }, {
            name: 'Blagoevgrad',
            coordinates: {
                latitude: 43.642566,
                longitude: -79.38705700000003
            }
        }, {
            name: 'Ruse',
            coordinates: {
                latitude: 43.642566,
                longitude: -79.38705700000003
            }
        }
    ]
};


angular.module('doIt-app').component('home', {
  bindings: {},
  controller: homeCtr,
  templateUrl: 'home/home.html'
});