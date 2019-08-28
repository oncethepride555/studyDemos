<?php
	$arr = array();
	$arr['123'] = array("username"=>"张三","age"=>"12");
	echo json_encode($arr);//{"123":{"username":"\u5f20\u4e09","age":"12"}}
	//\u5f20\u4e09 就是Unicode编码
?>