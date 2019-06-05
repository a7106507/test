function move(ele,data,callback){
	clearInterval(ele.timer);
	ele.timer=setInterval(function(){
		var onoff=true;
		for(var attr in data){
			if(attr == "opacity"){
				var iNow = getStyle(ele,attr)*100;
			}else{
				var iNow = parseInt(getStyle(ele,attr));
			}
			var speed = (data[attr] - iNow)/10;//data[attr]为对象输入的值，INow为元素当前属性的值。
			if(speed<0){
				speed = Math.floor(speed);
			}else{
				speed = Math.ceil(speed);
			}
			if(attr == "opacity"){
				ele.style[attr]=(iNow+speed)/100;
			}else{
				ele.style[attr]=iNow + speed  +"px";
			}
//			console.log(data[attr])
//			console.log(iNow)
			if(data[attr] != iNow){
				onoff = false;
			}
//			console.log(speed)
//			console.log(onoff);
			if(onoff){
				clearInterval(ele.timer);
			}
			
		}
	},30)
}
function getStyle(ele,attr){
	if(getComputedStyle){
		return getComputedStyle(ele,false)[attr];
	}else{
		return ele.currentStyle[attr];
	}
}
