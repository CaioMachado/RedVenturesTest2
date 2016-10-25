angular.module('WebApp', [
  'WebApp.services',
  'WebApp.controllers',
  'ngRoute'
]).
  config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
      when("/numbers", { templateUrl: "partials/numbers.html" }).
      when("/issum2", { templateUrl: "partials/issum2.html" }).
      otherwise({ redirectTo: '/numbers' });
  }]);