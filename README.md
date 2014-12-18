backToTop
=========
回到顶部组件
---------

原生Js，功能简单，即缓冲移动**回到顶部**，并且可以配合callback回调函数进行操作

API如下:

```
 1. el:          /* string(id) or object*/
 2. startToShow: /* 出现的位置, 默认为document.documentElement.clientHeight/2 */ 
 3. target:      /* number(defalut 0) 滚动停止的地方，   
                 若想滚到底部可以document.documentElement.offsetHeight-document.documentElement.clientHeight*/
 4. speed:       /* 三个之中选参数("fast", "normal", "slow") */
 5. callback     /* 回调函数function */
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
