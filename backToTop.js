(function(){
	var BackToTop = function(cfg){
		/* config为默认参数，cfg为传入参数 */
		this.config = {
			el: "backToTop",
			startToShow: document.documentElement.clientHeight/2,
			isFade: true,
			target: 0,
			speed: "normal",
			callback: function(){
				console.log("I am callback!");
			}
		}
		this.init(cfg);
	};

	BackToTop.prototype = {
		/* 初始化，包括参数合并 */
		init: function(cfg){
			var self = this;
			for(var c in cfg){
				this.config[c] = cfg[c];
			}
			this.el = typeof this.config.el === "string" ? document.getElementById(this.config.el) : this.config.el;
			/* 转换速度 */
			switch(this.config.speed){
				case "fast":
					this.speed = "20";
					break;
				case "normal":
					this.speed = "30";
					break;
				case "slow":
					this.speed = "40";
					break;
			}
			/*事件监听*/
			this.el.addEventListener("click",function(){
				self.toTop();
			});
			window.onscroll = function(){
				var scrollTop = document.documentElement.scrollTop + document.body.scrollTop;
				self.displayTrigger(scrollTop);
			}
			window.onscroll(); //立即触发，当为0时依然会出现
		},
		/* 滚动的函数 */
		toTop: function(){
			var self = this;
			var current = 0;
			var speed = 0;
			var timer = setInterval(function(){
				current = document.documentElement.scrollTop + document.body.scrollTop; //获取当前的值,并转化成数字
				speed = (self.config.target - current)/6;
				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
				if((current == self.config.target) || (speed == 0)){
					clearInterval(timer);
					if(self.config.callback){
						self.config.callback();
					}
				}else{
					document.documentElement.scrollTop = current + speed;
					document.body.scrollTop = current + speed;
				}
			} ,this.speed)
		},
		/* 判断何时出现 */
		displayTrigger: function(scrollTop){
			if(scrollTop >= this.config.startToShow){
				this.el.style.display = "block";
			}else{
				this.el.style.display = "none";
			}
		}
	}
	/*初始化*/
	var backToTop = new BackToTop({
		el: "backToTop",    //传入id 或者 对象object
		startToShow: document.documentElement.clientHeight/2, //出现的位置,当为0时,表示不消失
		target: 0,      	  //回滚到哪儿, 默认为顶部0
		speed: "normal",    //三个参数可选"fast", "normal", "slow"
		callback: function(){
			console.log("I am callback! Set it by yourself");
		}
	});
})()
