var ocode = document.getElementsByClassName("code");
		var oBig = document.getElementsByClassName("bigcode");
		ocode[0].onmouseover=function(){
			oBig[0].style.display = "block";
		}
		ocode[0].onmouseout=function(){
			oBig[0].style.display = "none";
		}
		var url = "http://localhost/1903PHP/tongmengshangcheng/json/navdata.json"
		function menu(){
			this.omenu1 = document.getElementById("menu1");
			this.oul = this.omenu1.children[0];
			this.omenu2 = document.getElementById("menu2");
			this.omenu3 = document.getElementById("menu3");
			this.init();
		}
		menu.prototype.init=function(){
			var that = this;
			ajax(url,function(res){
				that.data = JSON.parse(res);
			})
			this.omenu1.onmouseover=function(){
				that.oul.style.display="block";
				that.threemenu();
			}
			this.omenu1.onmouseout=function(){
				that.oul.style.display="none";
			}
		}
		menu.prototype.threemenu=function(){
			var that = this;
			this.oul.onmouseover=function(eve){
				var e = eve || window.event;
				var target = e.target||e.srcElement;
				if(target.className == "li"){
					that.index = that.data[target.id];
					that.display();
				}
			}
		}
		menu.prototype.display=function(){
			if(menu3){
				menu3.remove();
			}
			var menu3 = document.createElement("div");
			menu3.id="menu3";
			for(var i in this.index){
				var h3 = document.createElement("h3");
				h3.innerHTML=i;
				var div = document.createElement("div");
				for(var j=0;j<this.index[i].length;j++){
					var a = document.createElement("a");
					a.innerHTML=this.index[i][j];
					div.appendChild(a);
				}
				menu3.appendChild(h3);
				menu3.appendChild(div);
			}
			this.omenu2.appendChild(menu3);
		}
		new menu();
		
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
		function banner(){
			this.oul=document.getElementById("banner-box");
			this.oli=this.oul.children;
			this.obanbtn = document.getElementById("banbtn");
			this.index = 0;
			this.next;
			this.init();
			this.timer();
		}
		banner.prototype.init=function(){
			var that = this;
			for(var i=0;i<this.oli.length-1;i++){
				var oi = document.createElement("i");
				oi.setAttribute("index",i);
				oi.className="sbtn"
				this.obanbtn.appendChild(oi);
			}
			this.obanbtn.onmouseover=function(eve){
				clearInterval(that.time);
				var e = eve||window.event;
				var target = e.target||e.srcElement;
				if(target.className == "sbtn"){
					target.getAttribute("index");
					var num = parseInt(target.getAttribute("index"));
					move(that.oul,{top:-that.oli[0].offsetHeight*num})
				}
			}
			this.obanbtn.onmouseout=function(){
				that.timer();
			}
		}
		banner.prototype.timer=function(){
			var that = this;
			this.time = setInterval(function(){
					that.move();
				},3000)
		}
		banner.prototype.move=function(){
			if(this.index == this.oli.length-1){
				this.oul.style.top="0";
				this.index = 1;
			}else{
				this.index++;
			}
			move(this.oul,{top:-this.oli[0].offsetHeight*this.index});
		}
		new banner();
		var goodsurl = "http://localhost/1903PHP/tongmengshangcheng/json/goods.json";
		var ele = document.getElementById("new-goods-1");
		function newgoods(url,ele,num){
			this.url = url;
			this.oele = ele;
			this.num = num;
			this.init();
		}
		newgoods.prototype.init=function(){
			var that = this;
			ajax(this.url,function(res){
				that.data = JSON.parse(res);
				that.display();
			})
		}
		newgoods.prototype.display=function(){
			var src = "";
			for(var i=0;i<this.num;i++){
				src = src+`<li>
								<a class="goods-img" href="details.html" target="_blank"><img src="${this.data[i].url}" index="${this.data[i].id}"/></a>
								<a class="title" index="${this.data[i].id}" href="details.html" target="_blank">${this.data[i].name}</a>
								<p>市场价：<span>${this.data[i].price}</span></p>
								<p>本店价： <i>电话联系</i></p>
							</li>`
			}
			this.oele.innerHTML = src;
		}
		new newgoods(goodsurl,ele,8);
		var ele2 = document.getElementById("new-goods-2");
		new newgoods(goodsurl,ele2,10);
		var ele3 = document.getElementById("new-goods-3");
		new newgoods(goodsurl,ele3,5);
		var ele4 = document.getElementById("new-goods-4");
		new newgoods(goodsurl,ele4,5);
		var ele5 = document.getElementById("new-goods-5");
		new newgoods(goodsurl,ele5,5);
		class index{
			constructor(){
				var that = this;
				document.onclick=function(eve){
					var e = eve||window.event;
					var target = e.target||e.srcElement;
					if(target.getAttribute("index")){
						that.index = target.getAttribute("index");
						that.init();
					}
				}
			}
			init(){
				console.log(this.index);
				localStorage.index = this.index;
			}
		}
		new index();
