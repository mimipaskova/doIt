function mapCtr($scope, $http, $state, _, Cities, $mdDialog) {
    var map = new google.maps.Map(document.getElementById('markers'), {
        zoom: 4,
        center: new google.maps.LatLng( 44,22),
        mapTypeId: 'terrain'
    });

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

        Cities.addCity(city).then(city => {
                var marker = new google.maps.Marker({
                    position: city.coordinates,
                    map: map,
                    title: city.name
                });
                map.panTo(city.coordinates);
            }, err => {
                console.log("It can't add this city", err);
            }
        );
    }   
    
    this.showMap = function() {

        var cities = Cities.getCities();

        cities.forEach(city => {
            var location = {lat: city.coordinates.lat, lng: city.coordinates.lng};
            var marker = new google.maps.Marker({
                position: location,
                map: map,
                title: city.name
            });
        });
    }
};

angular.module('doIt-app').component('map', {
  bindings: {},
  controller: mapCtr,
  templateUrl: 'map/map.html'
});