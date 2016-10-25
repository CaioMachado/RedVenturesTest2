angular.module('WebApp.controllers', []).
    controller('IndexController', function ($scope, webAppAPI, $window, $routeParams) {

        $scope.startPage = function () {
            $scope.number = "";
            webAppAPI.getNumbers().success(function (response) {
                $scope.numbers = response;
            });

            webAppAPI.isSumTwo().success(function (response) {
                $scope.issumtwo = response.result == true ? "Sim" : "Não";
            });
        }
        $scope.addNumber = function (number) {
            var json = { "number": number };
            webAppAPI.addNumber(json).then(function () {
                alert("Requested was processed successfully!");
                $scope.startPage();
            }, function (response) {
                alert("An error occurred trying to process:" + response.data);
            });
        }

        $scope.reset = function (number) {
            webAppAPI.reset().success(function (response) {
                $scope.startPage();
            });
        }

        $scope.startPage();
    }).
    controller('issumtwocontroller', function ($scope, webAppAPI, $window, $routeParams) {

        $scope.issumtwo = "";

        $scope.check = function (number) {
            webAppAPI.isSumTwo().success(function (response) {
                $scope.issumtwo = response.result == true ? "Yes." : "No.";
            });
        }
    });