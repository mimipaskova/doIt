angular.module('doIt-app').service('Map', Map);

function Map(Cities) {

    this.cities = Cities.getCities();
    this.markers = [];
    this.map;

    this.initMap = function() {

        this.map = new google.maps.Map(document.getElementById('markers'), {
            zoom: 4,
            center: new google.maps.LatLng( 44,22),
            mapTypeId: 'terrain'
        });
        this.cities.forEach(city => {
            this.addMarker(city);
        });

        return this.map;
    };

    this.addMarker = function(city) {
        let location = {lat: city.coordinates.lat, lng: city.coordinates.lng};
        var marker = new google.maps.Marker({
            position: location,
            map: this.map,
            title: city.name
        });

        this.markers.push(marker);
    };

    this.showMarkers = function() {
        for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(this.map);
        }
    };

    this.hideMarkers = function() {
        for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(null);
        }
    };

    this.getMarkers = function() {
        return this.markers;
    };
}