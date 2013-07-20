'use strict';

/* App Module */

angular.module('rms', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/home', {templateUrl: 'partials/home.html',   controller: MainCtrl}).
      when('/StudioPolicy', {templateUrl: 'partials/StudioPolicy.html', controller: MainCtrl}).
      when('/bio', {templateUrl: 'partials/bio.html', controller: MainCtrl}).
      when('/signup', {templateUrl: 'partials/signup.html', controller: SignupCtrl}).
      otherwise({redirectTo: '/home'});
}]);
