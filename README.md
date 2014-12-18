backToTop
=========
回到顶部组件
---------

原生Js，功能简单，即缓冲移动**回到顶部**，并且可以配合callback回调函数进行操作

API如下:

```
 1. el:      /*string(id) or object*/
 2. target:  /*number(defalut 0) 停止的地方 to stop*/
 3. speed:   /*string select("fast", "normal", "slow")*/
 4. callback /*function*/
```

初始化方法如下

```
var backToTop = new BackToTop({
  el: "backToTop",
  target: 0,
  speed: "normal",
  callback: function(){
    console.log("do something...");
  }
})
```

可以结合demo学习使用
