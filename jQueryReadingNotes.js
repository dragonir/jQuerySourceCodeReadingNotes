// Powered by WANGBIN 2017.10.20

(function(){

	// Jquery code runs here

})();
// 整个jQuery代码都定义在一个自运行的匿名函数中。这个匿名函数所形成的闭包会避免作用域污染，避免与外部代码发生冲突，另外，匿名函数也保证了jQuery能在第一时间运行


var _jQuery = window.jQuery,
		_$ 	= window.$;
// 在存在多个库的情况下，可能会与别的库使用相同的关键字，则需要把别的库的jQuery、$关键字保存下来，然后再换上自己的，需要的时候再把自己的jQuery、$卸载掉，恢复其他库的代码。上面两行代码分别表示：保存jQuery关键字，避免重写后无法恢复；保留$关键字，避免重写后无法恢复。


var
			


