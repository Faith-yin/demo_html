//定义一个函数，可以实现多个浏览器的事件绑定，即兼容
function bindEvent(dom,ytpe,fn) {
	//判断事件类型
	if (type.toLowerCase() === "mousewheel") {
		//判断是否是火狐浏览器
		var isFF = window.navigator.userAgent.indexOf("Firefox") === -1? false:true;
		
		//如果是火狐浏览器
		if (isFF) {
			dom.addEventListener("DOMMouseScroll",fn,false);
			return;
		}
		
		//使用能力检测，检测浏览器支持哪种能力
		if (dom.addListener) {
			//说明是高级浏览器
			dom.addListener(type,fn,false);
		} else if(dom.attachEvent) {
			//说明是IE中的高版本
			dom.attachEvent("on"+type,fn);
		} else {
			//说明是其他不知名的浏览器
			dom["on"+type] = fn;
		}
	}
}
