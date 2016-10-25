angular.module('WebApp.services', [])
    .factory('webAppAPI', function ($http) {

        var webAppAPI = {};

        webAppAPI.reset = function () {
            return $http({
                type: 'GET',
                url: 'http://127.0.0.1:8081/reset',
                cache: false
            });
        };

        webAppAPI.isSumTwo = function () {
            return $http({
                type: 'GET',
                url: 'http://127.0.0.1:8081/is-sum-2',
                cache: false
            });
        };

        webAppAPI.getNumbers = function () {
            return $http({
                type: 'GET',
                url: 'http://127.0.0.1:8081/get-numbers',
                cache: false
            });
        };

        webAppAPI.addNumber = function (data) {
            var json = JSON.stringify(data);
            return $http({
                method: "POST",
                url: 'http://127.0.0.1:8081/addNumber',
                data: data,
                headers: { 'Content-Type': 'application/json' }
            })
        };

        return webAppAPI;
    });