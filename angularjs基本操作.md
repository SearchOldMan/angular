### 一、what is angular?
### 二、why learn angular?
### 三、how to learn?
#### 1.下载angular.js源代码；
#### 2.一些基本的ng指令：
###### ++**ng-app**:我们把用来管理ng代码的容器++； 
###### ...
        <div ng-app></div>
###### ...
###### ++ng-init:初始化ng页面当中的数据，相当于window.onload++；
###### ...
        <div ng-app ng-init = "username='zhangsan'"></div>
###### ...
###### ng-model:用于建立页面上用到的数据模型
###### ...
        <div ng-app>
            <p><input type="text" ng-model="username"></p>
    </div>
###### ...
###### ++ng-controller:为某一片段添加一个控制器，该控制器实现对片段的初始化；
###### ...
        // 注册一个模块 
			//第一个参数是这个模块的名字，第二个参数是这个模块要依赖的模块
		var app = angular.module("myApp",[]);
		//添加模块的控制器
			//控制器执行后要执行的函数，有一个固定的参数$scope
		app.controller('demoController',function($scope){})
###### ...
###### 一个需要注意的地方，由于我们在是生产环境，代码需要压缩，所以参数会被改变，我们标准的是采用数组的形式定义参数
###### ...
        app.controller('demoController',['$scope',function(a){}]);
###### ...
###### ng-cloak:在ng执行完页面自动移除的指令，不至于在页面出现表达式
###### ...
    <style>
        [ng-cloak]{display:none}
    </style>
    <div ng-cloak>
        {{expression}}
    </div>
###### ...
###### ng-bind-html:在页面添加标签的效果，需引入解析标签的包 angular-sanitize;另外我们还要自定义自己的模块，并且依赖于ngSanitize模块
######  ...
    <div ng-app="myapp">
        
    </div>
    <script src="../angular.js"></script>
    <script src="../angular-sanitize.js"></script>
    <script>
        var myApp = angular.module('myapp',['ngSanitize']);
    </script>
######  ...
###### ng-repeat:遍历数组的元素，追加到视图上。格式就是ng-repeat="item in data"
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
###### ng-class:根据当前的对象设置属性和属性值。
###### ...
    ng-class="{red:$even,green:$odd}"
###### ...
### 四、我们使用cdn来引用一些别人服务器上的js文件，实现了网页响应速度加快。
##### cdn.code.baidu.com   百度静态资源公共库