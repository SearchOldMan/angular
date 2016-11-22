
define(function(require,exports,module){

	var Pager = require('./page.js');

	var p = new Pager(4,20,5);

	console.log(p);
	p.render('.pagination');
});