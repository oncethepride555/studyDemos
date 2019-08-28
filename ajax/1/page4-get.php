<!DOCTYPE html>
<html>

	<head>
		<meta charset="UTF-8">
		<title>php基础语法-get</title>
	</head>

	<body>
		<?php
			//http://localhost/page4-get.php?flag=1
			$flag = $_GET['flag'];
//			echo $flag;//1
			if($flag == 1){
				echo "得到了数据";
			}else{
				echo "参数错误";
			}
		?>
	</body>

</html>