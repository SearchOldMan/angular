
define(function(require,exports,module){

	//面向对象
	function Pager(current,total,show){
		this.current = current;
		this.total = total;
		this.show = show;

		//正常情况下，左右显示的序号
		var iSpeed = Math.floor(show / 2) //3 12 45,  间隔
		//开始序号
		var begin = this.current - iSpeed;  //从第几页开始  5 3,6 4
		begin = begin < 0?1:begin;
		//结束序号
		var end = begin + show;
		if(end > total)
		{
			end = total + 1;
			begin = end - show;
			begin = begin < 0?1:begin;
		}

		this.begin = begin;
		this.end = end;
	};

	//渲染页面，也就是dom操作
	Pager.prototype.render = function(container){
		 // body...  
	  //dom操作
		if(typeof container === 'string')
		{
			//dom数组
			container = document.querySelectorAll(container);
		}
		if(container.length === undefined)
		{
			container = [container];
		}

		for(var j=0;j<container.length;j++)
		{
			container = container[j];
			
			//上一页
			var prev = document.createElement('li');
			prev.innerHTML = '<a href="#">&laquo;</a>';
			container.appendChild(prev);

			//当前是第一页
			if(this.current == 1)
			{
				prev.classList.add('disabled');
			}
			for(var i=this.begin;i<this.end;i++)
			{
				//console.log(i)
				var liele = document.createElement('li');
				liele.innerHTML = '<a href="#">'+i+'</a>';
				if( i == this.current)
				{
					liele.classList.add('active');
				}
				container.appendChild(liele);
			}
			//下一页
			var next = document.createElement('li');
			next.innerHTML = '<a href="#">&raquo;</a>';


			//最后一页
			if(this.current == this.total)
			{
				next.classList.add('disabled');
			}
			container.appendChild(next);
		}


		console.log(111);
	};

	module.exports = Pager;
});