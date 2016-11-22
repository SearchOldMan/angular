(function(angular){
	'use strict';
	 /**
	*  Module
	*
	* Description
	*/
	var http = angular.module('myApp.http_server', []);

	http.service('HttpServer', ['$window','$document', function($window,$document){
		this.jsonp = function(url,data,callback){
			//拼接地址栏
			var cbName = 'my_jsonp'+Math.random().toString().replace('.','');   //防止script已经加载完成还没有完成地址的拼接
			//把随机的函数名赋给全局，以便可以cbName直接执行
			$window[cbName] = callback;

			var querystring = url.indexOf('?') == -1 ? '?':'&';


			for(var k in data)
			{
				querystring += k + '=' + data[k] + '&'
			}

			//callback=?
			querystring += 'callback=' + cbName;


			//dom操作
			var scriptElement = $document[0].createElement('script');
			scriptElement.src = url + querystring;

			$document[0].body.appendChild(scriptElement);
		};	
	}])
})(angular);


