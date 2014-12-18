(function(){
	var BackToTop = function(cfg){
		var self = this;
		/* config为默认参数，cfg为传入参数 */
		this.config = {
			el : "backToTop",
			target : 0,
			speed: "normal"
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
		})
	};
	BackToTop.prototype.toTop = function(cb){
		var self = this;
		clearInterval(this.timer);
		var current = 0;
		this.timer = setInterval(function(){
			current = document.documentElement.scrollTop + document.body.scrollTop; //获取当前的值,并转化成数字
			speed = Math.ceil((self.config.target - current)/6);
			if((current == self.config.target) || (speed == 0)){
				console.log("clear");
				clearInterval(self.timer);
			}else{
				document.documentElement.scrollTop = current + speed;
			}
		},this.speed)
	};
	var backToTop = new BackToTop({
		el: "backToTop", //id or object
		target: 250,      //where to stop? number(add "px" by itself autolly)
		speed: "fast"    //"fast", "normal", "slow"
	});
})()
