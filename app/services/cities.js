angular.module('doIt-app').service('Cities', Cities);

function Cities() {

    this.cities = [
        {
            name: 'Sofia',
            coordinates: {
                lat: 42.6977082,
                lng: 23.321867500000053
            }
        }, {
            name: 'Plovdiv',
            coordinates: {
                lat: 42.1354079,
                lng: 24.74529039999993
            }
        }, {
            name: 'Varna',
            coordinates: {
                lat: 43.2140504,
                lng: 27.914733299999966
            }
        }, {
            name: 'Burgas',
            coordinates: {
                lat: 42.50479259999999,
                lng: 27.462636100000054
            }
        }, {
            name: 'Pleven',
            coordinates: {
                lat: 43.642566,
                lng: -79.38705700000003
            }
        }, {
            name: 'Turnovo',
            coordinates: {
                lat: 43.642566,
                lng: -79.38705700000003
            }
        }, {
            name: 'Blagoevgrad',
            coordinates: {
                lat: 43.642566,
                lng: -79.38705700000003
            }
        }, {
            name: 'Ruse',
            coordinates: {
                lat: 43.642566,
                lng: -79.38705700000003
            }
        }
    ];

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

    this.addCity = function(city) {
        return new Promise((resolve, reject) => {
            if(_.find(this.cities, c => c.name == city.name) == undefined) {
                this.cities.push(city);
                this.addMarker(city);
                resolve();
            } else {
                reject('Exists the same city');
            }
        });
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

    this.getCities = function() {
        return this.cities;
    };

    this.getMarkers = function() {
        return this.markers;
    };
}