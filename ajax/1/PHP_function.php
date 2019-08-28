<!DOCTYPE html>
<html>

	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>

	<body>
		<?php
			//自定义函数
			function foo($info){
				return $info;
			}
			$ret = foo("hi");
			echo $ret;
			
			echo "<br>";
				
			//系统函数
			$arr = array(111,222,333);
			$arr1 = array("username"=>"liming","age"=>"23");
			$ret = json_encode($arr);
			$ret1 = json_encode($arr1);
			echo $ret;
			echo "<br>";
			echo $ret1;
		?>
	</body>

</html>