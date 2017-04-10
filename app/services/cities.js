angular.module('doIt-app').service('Cities', cities);

function cities() {
  var cities = [
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
    ];
  return cities;
};