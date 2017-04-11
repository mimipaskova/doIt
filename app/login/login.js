function loginCtr($scope, $http, $state) {
    console.log('login ctr');
    $scope.login = function () {
        $http.post('/api/login', {
            username: $scope.username,
            password: $scope.password
        }).then(function () {
            console.log('success');
            $state.go('profile');
        }, function () {
            // alert("Wrong password or email");
            console.log('fail');
        });
    };
}

angular.module('doIt-app').component('login', {
    bindings: {},
    controller: loginCtr,
    templateUrl: 'login/login.html'
});