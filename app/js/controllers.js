'use strict';

/* Controllers */

function MainCtrl($scope) {
}

function SignupCtrl($scope, $http) {
    $http.post('api/signup')
        .success(function(data) {
            $scope.signup = "";
            $scope.result = data.result;
        });
}