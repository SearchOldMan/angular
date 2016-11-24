'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.movie_list',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/in_theaters/1'});
}]).
controller('NavController', ['$scope','$location', function($scope,$location){
	var path = $location.path();
	
	if(path.startsWith('/in_theaters')){
		$scope.filetype = '/in_theaters';
	}else if(path.startsWith('/coming_soon')){
		$scope.filetype = '/coming_soon';
	}else{
		$scope.filetype = '/top250';
	}

	console.log($scope.filetype);
}])
