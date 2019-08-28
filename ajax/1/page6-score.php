<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>
	<body>
		<?php
			//先模拟一堆数据
			$arr = array();
			$arr['123'] = array("username"=>"zhangsan","score"=>"120");
			$arr['124'] = array("username"=>"lisi","score"=>"113");
			$arr['125'] = array("username"=>"wangwu","score"=>"90");
			$arr['126'] = array("username"=>"zhaoliu","score"=>"72");
						
			$code = $_POST['code'];
			
			//服务器端渲染页面
			if($code == 'admin'){
				foreach($arr as $value){
					echo '<ul><li>'.$value["username"].'</li><li>'.$value["score"].'</li></ul>';
				}
			}else{
				echo '<ul><li>'.$arr[$code]["username"].'</li><li>'.$arr[$code]["score"].'</li></ul>';
			}
		?>
	</body>
</html>