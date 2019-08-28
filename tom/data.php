<?php
	$arr = array("username"=>"zhangsan","password"=>"123");
	$cb = $_GET['callback'];
	echo $cb.'('.json_encode($arr).')';
?>