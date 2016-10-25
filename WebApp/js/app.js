angular.module('WebApp', [
  'WebApp.services',
  'WebApp.controllers',
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/", {templateUrl: "index.html"}).        
    when("/IsSum2", {templateUrl: "issum2.html"}).	
	otherwise({redirectTo: 'index.html'});
}]);