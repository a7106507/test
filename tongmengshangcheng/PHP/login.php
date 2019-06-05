<?php
	$u = @$_POST["user"];
	$p = @$_POST["pass"];
	
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
	$insert = @mysql_query('INSERT INTO data(user,pass) VALUES("'.$u.'","'.$p.'")');
//	$insert = @mysql_query('INSERT INTO File(title,cont) VALUES("'.$t.'","'.$c.'")');
	if($insert){
		echo 3;
	}else{
		echo 4;
	}
?>