/************正在热映模块********************/
(function(angular){
	'use strict';

	//假数据
	/*var data = {
		  "count": 2,
		  "start": 0,
		  "total": 25,
		  "subjects": [
		    {
		      "rating": {
		        "max": 10,
		        "average": 7,
		        "stars": "35",
		        "min": 0
		      },
		      "genres": [
		        "剧情",
		        "喜剧"
		      ],
		      "title": "我不是潘金莲",
		      "casts": [
		        {
		          "alt": "https://movie.douban.com/celebrity/1050059/",
		          "avatars": {
		            "small": "http://img7.doubanio.com/img/celebrity/small/1691.jpg",
		            "large": "http://img7.doubanio.com/img/celebrity/large/1691.jpg",
		            "medium": "http://img7.doubanio.com/img/celebrity/medium/1691.jpg"
		          },
		          "name": "范冰冰",
		          "id": "1050059"
		        },
		        {
		          "alt": "https://movie.douban.com/celebrity/1274274/",
		          "avatars": {
		            "small": "http://img7.doubanio.com/img/celebrity/small/39703.jpg",
		            "large": "http://img7.doubanio.com/img/celebrity/large/39703.jpg",
		            "medium": "http://img7.doubanio.com/img/celebrity/medium/39703.jpg"
		          },
		          "name": "郭涛",
		          "id": "1274274"
		        },
		        {
		          "alt": "https://movie.douban.com/celebrity/1324043/",
		          "avatars": {
		            "small": "http://img7.doubanio.com/img/celebrity/small/58870.jpg",
		            "large": "http://img7.doubanio.com/img/celebrity/large/58870.jpg",
		            "medium": "http://img7.doubanio.com/img/celebrity/medium/58870.jpg"
		          },
		          "name": "大鹏",
		          "id": "1324043"
		        }
		      ],
		      "collect_count": 46461,
		      "original_title": "我不是潘金莲",
		      "subtype": "movie",
		      "directors": [
		        {
		          "alt": "https://movie.douban.com/celebrity/1274255/",
		          "avatars": {
		            "small": "http://img3.doubanio.com/img/celebrity/small/45667.jpg",
		            "large": "http://img3.doubanio.com/img/celebrity/large/45667.jpg",
		            "medium": "http://img3.doubanio.com/img/celebrity/medium/45667.jpg"
		          },
		          "name": "冯小刚",
		          "id": "1274255"
		        }
		      ],
		      "year": "2016",
		      "images": {
		        "small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2378133884.jpg",
		        "large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2378133884.jpg",
		        "medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2378133884.jpg"
		      },
		      "alt": "https://movie.douban.com/subject/26630781/",
		      "id": "26630781"
		    },
		    {
		      "rating": {
		        "max": 10,
		        "average": 7.9,
		        "stars": "40",
		        "min": 0
		      },
		      "genres": [
		        "动作",
		        "科幻",
		        "奇幻"
		      ],
		      "title": "奇异博士",
		      "casts": [
		        {
		          "alt": "https://movie.douban.com/celebrity/1009405/",
		          "avatars": {
		            "small": "http://img7.doubanio.com/img/celebrity/small/41072.jpg",
		            "large": "http://img7.doubanio.com/img/celebrity/large/41072.jpg",
		            "medium": "http://img7.doubanio.com/img/celebrity/medium/41072.jpg"
		          },
		          "name": "本尼迪克特·康伯巴奇",
		          "id": "1009405"
		        },
		        {
		          "alt": "https://movie.douban.com/celebrity/1025152/",
		          "avatars": {
		            "small": "http://img3.doubanio.com/img/celebrity/small/3546.jpg",
		            "large": "http://img3.doubanio.com/img/celebrity/large/3546.jpg",
		            "medium": "http://img3.doubanio.com/img/celebrity/medium/3546.jpg"
		          },
		          "name": "蒂尔达·斯文顿",
		          "id": "1025152"
		        },
		        {
		          "alt": "https://movie.douban.com/celebrity/1040529/",
		          "avatars": {
		            "small": "http://img7.doubanio.com/img/celebrity/small/57893.jpg",
		            "large": "http://img7.doubanio.com/img/celebrity/large/57893.jpg",
		            "medium": "http://img7.doubanio.com/img/celebrity/medium/57893.jpg"
		          },
		          "name": "麦斯·米科尔森",
		          "id": "1040529"
		        }
		      ],
		      "collect_count": 147270,
		      "original_title": "Doctor Strange",
		      "subtype": "movie",
		      "directors": [
		        {
		          "alt": "https://movie.douban.com/celebrity/1320372/",
		          "avatars": {
		            "small": "http://img3.doubanio.com/img/celebrity/small/49077.jpg",
		            "large": "http://img3.doubanio.com/img/celebrity/large/49077.jpg",
		            "medium": "http://img3.doubanio.com/img/celebrity/medium/49077.jpg"
		          },
		          "name": "斯科特·德瑞克森",
		          "id": "1320372"
		        }
		      ],
		      "year": "2016",
		      "images": {
		        "small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2388501883.jpg",
		        "large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2388501883.jpg",
		        "medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2388501883.jpg"
		      },
		      "alt": "https://movie.douban.com/subject/3025375/",
		      "id": "3025375"
		    }
		  ],
		  "title": "正在上映的电影-北京"
		};*/
			//模块
	angular.module('myApp.inTheaters', ['ngRoute','myApp.http_server'])
	//路由
	.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/in_theaters/:page', {
	    templateUrl: 'in_theaters/view.html',
	    controller: 'InTheatersController'
	  });
	}])

	.controller('InTheatersController', ['$scope','HttpServer','$routeParams',function($scope,HttpServer,$routeParams) {
		$scope.subjects = [];
		$scope.total = 0;  //总数
		$scope.pageCount = 0; //总页数

		var count = 10;
		var page = parseInt($routeParams.page);
		var start = (page-1)*10;

		HttpServer.jsonp('http://api.douban.com/v2/movie/in_theaters',{count:count,start:start},function(data){
			$scope.subjects = data.subjects;
			$scope.total = data.total;
			$scope.pageCount = Math.ceil($scope.total / count);
			$scope.$apply();
		});
		//console.log($scope.subjects);
	}]);
})(angular);
