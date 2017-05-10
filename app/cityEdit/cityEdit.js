function cityEditCtr($scope, $http, $state, _, Cities, Map, $stateParams) {
    console.log($stateParams.name);
    this.city = _.find(Cities.getCities(), c => {if(c.name === $stateParams.name) return c;});

    this.editCity = function() {
        console.log(this.city);
        Cities.editCity(this.city).then(() => {
            console.log('success');
        }, err => {
            console.log('Cant edit the city', err);
        });
    }
}

angular.module('doIt-app').component('cityEdit', {
    bindings: {},
    controller: cityEditCtr,
    templateUrl: 'cityEdit/cityEdit.html'
});