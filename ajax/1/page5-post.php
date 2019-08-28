<?php
	//设置服务器响应的文件类型以及字符集编码   text/plain 纯文本类型
	header("Content-Type:text/plain;charset=utf-8");
	$uname = $_POST['username'];//根据表单中的name属性获取值
	$pwd = $_POST['password'];
	if($uname == "admin" && $pwd == "123"){
		echo '登录成功';
	}else{
		echo '用户名或密码不正确';
	}
?>