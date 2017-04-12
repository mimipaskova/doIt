function mapCtr($scope, $http, $state, _, Cities, Map, $mdDialog) {

    this.cities = Cities.getCities();
    var map = Map.initMap();

    map.addListener('click', (e) => {
        var confirm = $mdDialog.prompt()
            .title('Name of the city')
            .placeholder('Dog name')
            .ariaLabel('Dog name')
            .initialValue('Sofia')
            .targetEvent(null)
            .ok('Okay!')
            .cancel('I\'m a cat person');

        $mdDialog.show(confirm).then((cityName) => {
            this.addCity({name:cityName, coordinates: {lat: e.latLng.lat(), lng: e.latLng.lng()}});
        }, function(err) {
            console.log('You did`t write name of the city', err);
        });
    });

    this.addCity = function(city) {
        let newCity = {
            name: city.name,
            coordinates: {
                lat: city.coordinates.lat,
                lng: city.coordinates.lng
            }
        };

        Cities.addCity(newCity).then(() => {
            // this.showMarker(newCity);
            // marker.setMap(map);
            Map.addMarker(newCity);
            map.panTo(newCity.coordinates);
        }, err => {
            console.log('It can\'t add this city', err);
        });
    };

    this.showMarker = function(city) {
        // If it is possible not to use all markers just to find one
        var cityMarker = _.find(Map.getMarkers(), marker => {if(marker.title === city.name) return marker;});
        map.setCenter(cityMarker.position);
    };

    this.showMarkers = function() {
        Map.showMarkers();
    };

    this.hideMarkers = function() {
        Map.hideMarkers();
    };
}

angular.module('doIt-app').component('map', {
    bindings: {},
    controller: mapCtr,
    templateUrl: 'map/map.html'
});