<!DOCTYPE html>
<html>

	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>

	<body>
		<?php
//		// php的数据类型与JavaScript的数据类型是类似的，都是弱类型语言
//      // gettype() 内置函数，用来判断变量的类型
//      $num = 123;
//      $float = 1.2;
//      $str = 'hello';
//      $flag = true;
//      $v=NULL;
//      $arr = array(1,2,3);
//
//      echo gettype($num);//integer
//      echo '<br>';
//      echo gettype($float);//double
//      echo '<br>';
//      echo gettype($str);//string
//      echo '<br>';
//      echo gettype($flag);//boolean
//      echo '<br>';
//      echo gettype($v);//NULL
//      echo '<br>';
//      echo gettype($arr);//array

    // ----------------------------------------
    // count()是内置函数，用来计算数组的长度
       $arr = array(123,456,789);
       for($i=0;$i<count($arr);$i++){
           echo $arr[$i].'<br>';//这里的分号不可以省略，而js中的结尾分号可以省略，但是推荐加上分号。
       }
       
       foreach($arr as $value){
           echo $value.'-----<br>';
       }
       
       	$arr1 = array("username"=>"zhangsan","age"=>"12");
    	foreach($arr1 as $key => $value){//$key => $value 写成这种形式，就可以通过$key访问key的具体内容了
        echo $key.'===='.$value.'<br>';
    }
		?>
	</body>

</html>