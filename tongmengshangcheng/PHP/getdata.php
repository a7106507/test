<?php
	$link = @mysql_connect("localhost:3306","root","a3141592653");
	if(!$link){
		echo 0;
	}
	$db = @mysql_select_db("zaicifangfeiziwo");
	if(!$db){
		echo 1;
	}
	$utf = @mysql_query("set names utf8");
	if(!$utf){
		echo 2;
	}
	echo select();
	function select(){
		$q = mysql_query('SELECT * FROM data');
		if($q){
			$src = "";
			while(true){
				$arr = mysql_fetch_assoc($q);
				if(!$arr){
					break;
				}
				$src = $src.json_encode($arr).",";
			}
			return "[".substr($src,0,-1)."]";
		}else{
			echo 5;
		}
	}
?>