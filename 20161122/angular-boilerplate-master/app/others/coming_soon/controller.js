'use strict';

angular.module('myApp.comingSoon', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/coming_soon', {
    templateUrl: 'coming_soon/view.html',
    controller: 'ComingSoonController'
  });
}])

.controller('ComingSoonController', [function() {

}]);
