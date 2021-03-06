(function(angular) {
    'use strict';
    var app = angular.module('FinApp', ['ngRoute']);

    app.config(['$interpolateProvider', function($interpolateProvider) {
      $interpolateProvider.startSymbol('{a');
      $interpolateProvider.endSymbol('a}');
    }]);

    // app.config(['$routeProvider', function($routeProvider) {
    //     $routeProvider
    //         .when('/', {
    //             templateUrl: '../static/fin_o.html',
    //             controller: 'GreetingController'
    //         })
    // }])
    
    app.controller('GreetingController', ['$scope', function($scope) {
        $scope.greeting = 'Hola!';
    }]);
})(window.angular);