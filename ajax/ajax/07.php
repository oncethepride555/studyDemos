<?php
    $uname = "zhangsan";
    $age = 14;
    echo '{"name":"'.$uname.'","age":'.$age.'}';
    // $arr = array("zhangsan","lisi","wangwu","zhaoliu");
    // $d = json_encode($arr);//json_encode()   把数组转化成json形式的字符串
    // echo $d;//["zhangsan","lisi","wangwu","zhaoliu"]

    $arr1 = array("name"=>"zhangsan","age"=>"12","sex"=>"man");
    $d1 = json_encode($arr1);
    echo $d1;//{"name":"zhangsan","age":"12","sex":"man"}
?>