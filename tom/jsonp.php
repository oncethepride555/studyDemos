<?php
	$arr = array("username"=>"zhangsan","password"=>"123");
	$cb = $_GET['callback'];//这里默认是callback，但是要注意与前端ajax()方法中的jsonp的值保持一致
	echo $cb.'('.json_encode($arr).')';//返回的是一个函数的调用
?>