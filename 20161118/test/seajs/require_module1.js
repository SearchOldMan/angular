
define(function(require){

	console.log('module1----start');

	//相同等级的模块间，我们使用异步加载的方式防止js代码出现阻塞
	
	require.async('./require_module2.js',function(){

	});

	console.log('module1----end');
});