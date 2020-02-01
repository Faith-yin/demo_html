function getMyTimeYear(){
	//获取系统时间
	var now=new Date();
	var y=now.getFullYear();
	return y;
}
function getMyTimeMonth(){
	var now=new Date();
	var m=now.getMonth()+1;  //月份从0开始算，所以+1
	if(m<10){
		m="0"+m;
	}
	return m;
}
function getMyTimeDate(){
	var now=new Date();
	var d=now.getDate();
	if(d<10){
		d="0"+d;
	}
	return d;
}
function getMyTimeDay(){
	var now=new Date();
	var day=now.getDay();
	switch(day){
		case 1:day="一";return day;
		case 2:day="二";return day;
		case 3:day="三";return day;
		case 4:day="四";return day;
		case 5:day="五";return day;
		case 6:day="六";return day;
		case 0:day="日";return day;
	}
}
function getMyTime(){
	var now=new Date();
	var h=now.getHours();
	var min=now.getMinutes();
	var s=now.getSeconds();
	if(s<10){
		s="0"+s;
	}
	if(min<10){
		min="0"+min;
	}
	if(h<10){
		h="0"+h;
	}
	return h+":"+min+":"+s;
}


function setYear(){
	//将函数getMyTime返回值赋给str
	var str=getMyTimeYear();
	//将str赋给获取到的div中
	document.getElementById("line1_year").innerHTML=str;
	
}
function setMonth(){
	var strM=getMyTimeMonth();
	document.getElementById("line1_month").innerHTML=strM;
}
function setDate(){
	var strD=getMyTimeDate();
	document.getElementById("line1_day").innerHTML=strD;
}
function setDay(){
	var strDAY=getMyTimeDay();
	document.getElementById("line2_week").innerHTML=strDAY;
}
function setTime(){
	var strT=getMyTime();
	document.getElementById("line2_time").innerHTML=strT;
}


//每隔4ms(默认值)执行函数一次
setInterval("setYear()");
setInterval("setMonth()");
setInterval("setDate()");
setInterval("setDay()");
setInterval("setTime()");
