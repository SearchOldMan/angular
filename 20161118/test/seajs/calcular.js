//seajs语法
define(function(require,exports,module){
	//私有化模块定义
	function reltive(input){
		return parseInt(input);
	};

	//加法
	function add(a,b){
		return reltive(a)+reltive(b);
	};

	//减法
	function subtract(a,b){
		return reltive(a)-reltive(b);
	};

	//成法
	function multiply(a,b){
		return reltive(a)*reltive(b);
	};

	//除法
	function diverde(a,b){
		return reltive(a)/reltive(b);
	};

	//暴露公有化模块
	exports.add = add;
	exports.subtract = subtract;
	exports.multiply = multiply;
	exports.diverde = diverde;

	//到处的对象以module.exports为主
	//mudule.exports = {};

	/*优先级：return {}>module.exports>exports*/
});