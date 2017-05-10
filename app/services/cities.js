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
            },
            description: 'ofia has been an area of continuous human habitation since at least the 8th millennium BC,[3] but others have inhabited the area 30,000 years ago.[54] The city has a history of nearly 7000 years and it is the second oldest city in Europe according to the city`s official website and other sources, though the meaning of the claim is unclear as in the world there were hardly any cities at the time. In the context, certainly the neolithic village in Slatina, dating to the 5th–6th millennium BC, is described.[55][55][56][57][58][59] However, the motto of the city is grows, but does not age. Remains from another neolithic settlement around the National Art Gallery are traced to the 3rd–4th millennium BC, which has been the traditional centre of the city ever since and is not changed today.[60] The earliest tribes who settled were the Thracians. In 1400 – 1300 BC. Sofia`s area was populated by the Thracian tribe of Tilataei. After the Celtic invasion in 3rd century BC Tilataei were conquered by the Celtic tribe of Serdi. The Celts were assimilated by the local Thracian population during the late Hellenistic period in 2nd – 1st century BC.[5] According to some sources, it got first an official mention in the 7th/8th century BC when the Serdi (Sardi) as a Thracian tribe established a settlement.[12][57][61] Other sources suppose that the Serdi`s Celtic origin is convincingly evidenced through linguistic and archaeological clues but that their presence is not evidenced before the 1st century BC,[62] whereas others assume their mixed Thracian-Celtic origin or relation to the Sards. The earliest evidence of Celtic pr',
            tags: ['first', 'second', 'third', 'gregre', 'grege', 'fewfwf', 'wqedb', 'gweqgqfqe']
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
        return new Promise((resolve, reject) => {
            if(_.find(this.cities, c => c.name == city.name) == undefined) {
                this.cities.push(city);
                // this.addMarker(city);
                resolve();
            } else {
                reject('Exists the same city');
            }
        });
    };

    this.addDescription = function(changedCity) {
        console.log(changedCity);
        _.find(this.cities, c => {if (c.name == changedCity.name) c.description = changedCity.description;});
    };

    this.getCities = function() {
        return this.cities;
    };
}