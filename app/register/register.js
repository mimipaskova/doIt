function registerCtr($scope, $http, $state) {
    console.log('register ctr');
    $scope.register = function () {
        console.log('try to register');
        $http.post('/api/register', {
            username: $scope.user.username,
            password: $scope.user.password
        }).then(function () {
            console.log('success');
            $state.go('login');
        }, function (err) {
        // alert("Wrong password or email");
            console.log('fail', err);
        });
    };
}

angular.module('doIt-app').component('register', {
    bindings: {},
    controller: registerCtr,
    templateUrl: 'register/register.html'
});