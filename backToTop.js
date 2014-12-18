(function(){
	var BackToTop = function(cfg){
		var self = this;
		/* config为默认参数，cfg为传入参数 */
		this.config = {
			el: "backToTop",
			startToShow: document.documentElement.clientHeight/2,
			target: 0,
			speed: "normal",
			callback: function(){
				console.log("I am callback!");
			}
		}
		for(var c in cfg){
			this.config[c] = cfg[c];
		}

		this.el = typeof this.config.el === "string" ? document.getElementById(this.config.el) : this.config.el;
		/*转换速度*/
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
			if(scrollTop >= self.config.startToShow){
				self.showUp();
			}else{
				self.hideOut();
			}
		}
		window.onscroll(); //立即触发，当为0时依然会出现
	};

	/*对象方法*/
	BackToTop.prototype.toTop = function(){
		var self = this;
		clearInterval(this.timer);
		var current = 0;
		this.timer = setInterval(function(){
			current = document.documentElement.scrollTop + document.body.scrollTop; //获取当前的值,并转化成数字
			speed = Math.ceil((self.config.target - current)/6);
			if((current == self.config.target) || (speed == 0)){
				clearInterval(self.timer);
				if(self.config.callback){
					self.config.callback();
				}
			}else{
				document.documentElement.scrollTop = current + speed;
				document.body.scrollTop = current + speed;
			}
		},this.speed)
	};
	BackToTop.prototype.showUp = function(){
		this.el.style.display = "block";
	};
	BackToTop.prototype.hideOut = function(){
		this.el.style.display = "none";
	};
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
