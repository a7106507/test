var url = "http://localhost/1903PHP/tongmengshangcheng/json/navdata.json"
function ajax(url,fn){
			var ajax=new XMLHttpRequest;
			ajax.open("GET",url,true);
			ajax.onreadystatechange=function(){
				if(ajax.readyState == 4&&ajax.status == 200){
					fn(ajax.responseText)
				}
			}
			ajax.send();
		}