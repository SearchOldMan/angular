### 一、what is angular?
#### 我们对于一个新的语言，首先是要查看官方的网站，查看api,这里我们在本地必须通过安装http-server的服务才能查看angular在本地的api
#### ...
    npm install http-server -g
    启动http服务：http-server
    在地址栏输入：localhost：8080或者127.0.0.1:8080
#### ...
### 二、why learn angular?
+  模板功能强大丰富，并且是声明式的，自带了丰富的Angular指令；
+  是一个比较完善的前端MV*框架，包含模板，数据双向绑定，路由，模块化，服务，过滤器，依赖注入等所有功能；
+  自定义Directive，比jQuery插件还灵活，但是需要深入了解Directive的一些特性，简单的封装容易，复杂一点官方没有提供详细的介绍文档，我们可以通过阅读源代码来找到某些我们需要的东西，如：在directive使用 $parse。
+ 补充：Angular支持单元测试和e2e-testing。

### 三、how to learn?
#### 1.下载angular.js源代码；
#### 2.一些基本的ng指令：
##### ++**ng-app**:我们把用来管理ng代码的容器++； 
###### ...
        <div ng-app></div>
###### ...
##### ++ng-init:初始化ng页面当中的数据，相当于window.onload++；
###### ...
        <div ng-app ng-init = "username='zhangsan'"></div>
###### ...
###### ng-model:用于建立页面上用到的数据模型
###### ...
        <div ng-app>
            <p><input type="text" ng-model="username"></p>
    </div>
##### ...
##### ++ng-controller:为某一片段添加一个控制器，该控制器实现对片段的初始化；
###### ...
        // 注册一个模块 
			//第一个参数是这个模块的名字，第二个参数是这个模块要依赖的模块
		var app = angular.module("myApp",[]);
		//添加模块的控制器
			//控制器执行后要执行的函数，有一个固定的参数$scope
		app.controller('demoController',function($scope){})
###### ...
##### 一个需要注意的地方，由于我们在是生产环境，代码需要压缩，所以参数会被改变，我们标准的是采用数组的形式定义参数
###### ...
        app.controller('demoController',['$scope',function(a){}]);
###### ...
##### ng-cloak:在ng执行完页面自动移除的指令，不至于在页面出现表达式
###### ...
    <style>
        [ng-cloak]{display:none}
    </style>
    <div ng-cloak>
        {{expression}}
    </div>
###### ...
#### ng-bind-html:在页面添加标签的效果，需引入解析标签的包 angular-sanitize;另外我们还要自定义自己的模块，并且依赖于ngSanitize模块
######  ...
    <div ng-app="myapp">
        
    </div>
    <script src="../angular.js"></script>
    <script src="../angular-sanitize.js"></script>
    <script>
        var myApp = angular.module('myapp',['ngSanitize']);
    </script>
######  ...
#### ng-repeat:遍历数组的元素，追加到视图上。格式就是ng-repeat="item in data"
###### ...
    <div ng-app="myapp">
		<ul ng-controller="list">
			<li ng-repeat="item in data" data-id="{{item.id}}"><strong>{{item.name}}</strong>&nbsp;&nbsp;<span>{{item.age}}</span></li>
		</ul>
	</div>
	<script src="bower_components/angular/angular.js"></script>
	<script>
		var myapp = angular.module('myapp',[]);
		myapp.controller('list', ['$scope', function($scope){
			
			$scope.data = [];
			for(var i=1;i<10;i++)
			{
				$scope.data[$scope.data.length] = {
					id:i,
					name:'zhangsan'+i,
					age:20+i
				};
			}
		}]);
	</script>
###### ...
#### ng-class:根据当前的对象设置属性和属性值。
###### ...
    ng-class="{red:$even,green:$odd}"
###### ...
##### ng-show:值有true，false;定义不同的值，显示和隐藏；display:block
##### ng-hide:display:none;
##### ng-if:删除了整个层
###### ...
    <body ng-controller="mycontroller" ng-app="myapp">
	
	<div>
		aaaa
	</div>
	<div class="tops" ng-show ="loading">
		loading
	</div>

	<script>
		angular.module('myapp',[])
			.controller('mycontroller', ['$scope', '$timeout',function($scope,$timeout){
				$scope.loading = true;

				$timeout(function(){
					$scope.loading = false;
				},2000);
			}]);
	</script>
</body>
##### ...
#### ng-src:路径的导航，实现图片或者网页的链接功能
#### ng-href:a链接的属性；
#### ng-checked:会从数据到视图的同步，但是不会同步视图到数据，也就是说设置ng-cheched的值只会影响当前的视图对象；
#### ng-submit:表单提交，我们可以把表单的标签放在里面，这样实现了enter就可以确认提交的功能；
#### ng-click:点击事件；
#### ng-dbclick:双击事件；
##### 过滤器：可以把暴露视图上的数据解析成各种格式。[](https://code.angularjs.org/1.4.9/docs/api/ng/filter/number)
### 我们还可以自定义过滤器，实现相对严格的过滤
#### ...
    <body ng-app="myapp">
	<input type="text" placeholder="输入体重" ng-model="weight">
	<p>您{{weight}}</p>
	<p>{{weight | weight}}</p>
	<script>
		/**
		* myapp Module
		*
		* Description
		*/
		angular.module('myapp', [])
			.filter('weight',function(){    //自定义过滤器的名字
				return function(input){    //处理我们要过滤出来的数据
					if(input>200)
					{
  						return '太胖了';   //返回到页面上
					}else{
						return '太瘦了';
					}
				}
		});
	</script>
</body>
#### ...
##### $scope.$watch('',function(now,old))监视的是$scope的成员对象;
### 四、自定义指令：
#### 1.我们可以使用自定义指令，把一些常用的，但是angular没有的指令封装起来，在后面当页面需要重复用到时加上指令就可以避免页面的重复代码出现；例如:bootstrap上的一些导航栏、分页、图片轮播。。。
#### ...
    <body ng-app="myapp">
	
	<btnsuccess>哈哈</btnsuccess>
	<script>
		var app = angular.module('myapp',[]);
		//创建指令
		app.directive('btnsuccess',[function(){
			return {
			    scope:{
			        参数1：'@参数1',
			        参数2：'@参数2'
			        ...
			    },
				transclude:true,  //转置
				template:'<button class="btn btn-success btn-lg"
				ng-transclude></button>',  //模板
				templateUrl:''  //模板路径
				replace:true,   //替换
				link:function(scope,element,attributes){
				    
				} //把暴露出来的参数传过来
			};
		}]);
	</script>
</body>
#### ...
+ 特别注意的一点：我们在访问模板地址时经常出现浏览器阻止跨域的问题
#### ... 
    Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https, chrome-extension-resource.
#### ... 
这是我们要启动http服务来实现跨域请求;或者我们要在同一页面上引入script标签
#### ...
    <div ng-view></div>   //用来显示模板的视图
    <script id="" type="text/template"></script>
#### ...
#### 2.我们使用todomvc来进行实例：http://todomvc.com
+ index.html是用来改造的模板，我们可以按照的自己的需求改造
+ app.js文件用来暴露数据在页面上;
+ 遍历数组时，如果对象作为属性添加，直接就是obj.xxx;如果作为文本内容时：{{obj.xxx}}
+ 我们在定义数组时，一般情况下都要声明一个变量是id,这个id在很多情况下都是要用到的！！！采用随机数产生最好
### 五、路由器模块：
+ 这是一个单独存在的模块，我们在使用时要先把包引进来  ngRoute;
+ 路由的配置，以及对应的控制器：
#### ...
    <script>
		/**
		*  Module
		*
		* Description
		*/
		var app = angular.module('app', ['ngRoute']);
		//路由配置
		app.config(['$routeProvider',function($routeProvider) {
			$routeProvider
				.when('/a',{
					controller:'Acontroller',
					templateUrl:'./view/a.html'   //必须要有的
				})
				.when('/b',{
					controller:'Bcontroller',
					templateUrl:'./view/b.html'  //必须要有的
				})
				.when('/c',{
					controller:'Ccontroller',
					templateUrl:'./view/c.html'
				});
		}]);

		//控制器
		app.controller('Acontroller', ['$scope', function($scope){
			$scope.title = 'aaaaa';
		}]);

		app.controller('Bcontroller', ['$scope', function($scope){
			$scope.title = 'BBBBBB';
		}]);

		app.controller('Ccontroller', ['$scope', function($scope){
			$scope.title = 'CCCCCC';
		}]);
	</script>
#### ...
### 六、服务：
    所有的业务逻辑都是服务，而且所有与数据有关的又都是业务；
#### ...
    angular.module('myapp',[])
        .service('serviceName',[function(){
            this.fn1 = funtion(){};
            this.fn2 = function(){};
        }]);
#### ...
### 七、我们使用cdn来引用一些别人服务器上的js文件，实现了网页响应速度加快。
##### cdn.code.baidu.com   百度静态资源公共库
### 八、我们使用豆瓣的api和angular-boilerplate制作同步更新的电影列表
+ 1、下载安装angular-boilerplate;
+ 2、对影响的控制器、模块进行合理的命名;
+ 3、进行小小的测试，比如说在每个页面加上h3标签；
+ 4、编写第一个模块的数据，然后第二个，第三个；
+ 5、到这步之后，我们只是在本地的数据上进行页面的渲染，怎么实现在api的帮助下同步呢？这里涉及到了跨域的问题：angular提供了jsonp进行跨域请求，
 jsonp格式：jsonp(url,[config]),但是使用豆瓣api时又不支持jsonp的请求。  我们想到用script标签把jsonp返回的函数作为src的参数渲染到页面上，这样就可以实现跨域了。
+ 6.一点需要特别注意，实现跨域使用的是angular的服务模块，先把要实现跨域的服务先写好，然后在需要的页面控制器里注入进来。
+ 7.我们的库文件都是通过异步加载的，这样必然导致了有的文件比较小，先加载进来执行，所以我们引入了load.js的文件，处理angular加载库文件顺序的问题。


### 九.总结：
+   其实，不难看出，angular在开发过程中要划分不同的模块：主模块和子模块。主模块依赖多个字模块，子模块又有自身的路由控制器组成。
+   我们要在主模块中对子模块进行依赖。
+   主模块路由和控制器针对公共的部分进行路由设置和暴露数据。
+   子模块又依赖别的模块进行路由设置和暴露数据，例如：http服务等。