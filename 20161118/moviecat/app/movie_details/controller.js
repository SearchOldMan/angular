
/**************主模块所依赖的子模块*******************/
(function(angular) {
  'use strict';

  // 创建模块
  var module = angular.module(
    'moviecat.movie_details', [
      'ngRoute',
      'moviecat.services.http'
    ]);
  // 配置模块的路由
  module.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/details/:id', {
      templateUrl: 'movie_details/view.html',
      controller: 'MovieDetailsController'
    });
  }]);

  module.controller('MovieDetailsController', [
    '$scope',
    '$route',
    '$routeParams',
    'HttpService',
    function($scope, $route, $routeParams, HttpService) {
      
      //暴露数据
      $scope.detail = {};  //详细信息集合  对象
      var id = $routeParams.id;

      var apiaddress = 'https://api.douban.com/v2/movie/subject/' + id;  //豆瓣上详细信息的地址
      HttpService.jsonp(apiaddress,{},function(data){
        $scope.detail = data;

        $scope.$apply();

      });
    }
  ]);
})(angular);

