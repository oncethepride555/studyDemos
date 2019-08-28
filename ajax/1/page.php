<!DOCTYPE html>
<html>

	<head>
		<meta charset="UTF-8">
		<title></title>
		<script>
			//json字符串
			var json = '{"username":"zhangsan","age":"12","sex":"male"}';
			//转化为json对象
			var obj = JSON.parse(json);
			console.dir(obj);
			
			//js中定义数组的第一种方式
			var arr = [1,2,3,4];
			console.log(arr[0]);
			console.log(arr[1]);
			//js中定义数组的第二种方式
			var arr1 = new Array(1,2,3);
			console.log(arr1[0]);
			
			//二维数组
			var array = [];
			array[0] = [1,2,3];
			array[1] = [4,5,6];
			array[2] = [7,8,9];
			console.dir(array);
			//遍历循环出每一个数组的内容
			for(var i = 0;i< array.length;i++){
				for(var j = 0;j< array[i].length;j++){
					console.log(array[i][j]);
				}
			}
		</script>
	</head>

	<body>
		<?php
			$arr = array("hello","hi");
			echo "$arr[0]";
			echo "<br />";
			
			echo "$arr[1]";
			echo "<br />";
			
			print_r($arr);//Array ( [0] => hello [1] => hi )
			echo "<br />";
			
			$arr1 = array("username"=>"zhangsan","age"=>"12");
			print_r($arr1);//Array ( [username] => zhangsan [age] => 12 ) 
			echo "<br />";
			echo $arr1["username"];
			echo "这个是双引号里的：{$arr1['username']}";
			$x = "张三";
			echo "我是$x,你是李四";
			var_dump($arr1);
//			array (size=2)
//              'username' => string 'zhangsan' (length=8)
//              'age' => string '12' (length=2)
			//二维数组
			$array = array();
			$array[0] = array(11,22,33);
			$array[1] = array(44,55,66);
			print_r($array);
//			Array ( [0] => Array ( [0] => 11 [1] => 22 [2] => 33 ) 
//			        [1] => Array ( [0] => 44 [1] => 55 [2] => 66 ) )
			foreach($array as $value){
				echo '<br/>'.$value[0].'<br/>';
			}
		?>
	</body>

</html>