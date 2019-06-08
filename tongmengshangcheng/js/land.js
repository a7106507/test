function land(){
			this.header = document.getElementsByClassName("header-l")[0];
			this.init();
		}
		land.prototype.init=function(){
			var cookie = document.cookie.split(";");
			for(var i=0;i<cookie.length;i++){
				if(cookie[i].split("=")[0] == "landing"){
					var res = `<p>欢迎光临云同盟商城</p>
								<a>用户</a>
								<span>|</span>
								<a>注销</a>`
					this.header.innerHTML = res;
					this.logout();
				}
			}
		}
		land.prototype.logout=function(){
			var that = this;
			this.header.onclick=function(eve){
				var e = eve || window.event;
				var target = e.target||e.srcElement;
				if(target.innerHTML == "注销"){
					var d = new Date();
					d.setDate(d.getDate()-1);
					document.cookie = "landing=123134;expires="+d;
					history.go(0);
				}
			}
		}
		new land();