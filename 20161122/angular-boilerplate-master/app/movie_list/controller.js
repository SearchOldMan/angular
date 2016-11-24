/************正在热映模块********************/
(function(angular){
	'use strict';

			//模块
	angular.module('myApp.movie_list', ['ngRoute','myApp.http_server'])
	//路由
	.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/:type/:page', {
	    templateUrl: 'movie_list/view.html',
	    controller: 'MovieListController'
	  });
	}])

	.controller('MovieListController', ['$scope','$routeParams','$route','HttpServer',function($scope,$routeParams,$route,HttpServer) {

		var count = 6;
		var page = parseInt($routeParams.page);
		var start = (page-1) * count;
		$scope.subjects = [];
		$scope.total = 0;  //总数
		$scope.pageCount = 0; //总页数
		$scope.currentPage = 0;//当前页
		//是否显示loading层
		$scope.loading = true;

		HttpServer.jsonp('http://api.douban.com/v2/movie/'+$routeParams.type,{count:count,start:start},function(data){
			$scope.subjects = data.subjects;
			$scope.total = data.total;
			$scope.pageCount = Math.ceil($scope.total / count);
			$scope.currentPage = $routeParams.page;
			//加载完成之后，loading消失
			$scope.loading = false;
			$scope.$apply();
		});
		


		//上一页或者下一页的跳转
		$scope.go = function(page){
			if(parseInt(page) >= 1 && parseInt(page) <= $scope.pageCount)
			{
				$route.updateParams({ page:page });  //把地址栏的页数同步更新起来 
				console.log(typeof page);
			}
			//$route.updateParams({page:page});

		};
	}]);
})(angular);
