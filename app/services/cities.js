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

    this.addCity = function(city) {
        console.log(city);
        return new Promise((resolve, reject) => {
            if(_.find(this.cities, c => c.name == city.name) == undefined) {
                this.cities.push(city);
                resolve(city);
            } else {
                reject('Exists the same city');
            }
        });
    };

    this.getCities = function() {
        return this.cities;
    };

    this.showCity = function(city, elementId) {
        var location = {lat: city.coordinates.lat, lng: city.coordinates.lng};
        var map = new google.maps.Map(document.getElementById(elementId), {
            zoom: 8,
            center: location
        });
        var marker = new google.maps.Marker({
            position: location,
            map: map,
            title: city.name
        });

    };
};