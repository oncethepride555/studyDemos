<?php
    $code = $_GET['code'];
    $books = array();
    $books['sgyy'] = array("name"=>"三国演义","author"=>"罗贯中");
    $books['xyj'] = array("name"=>"西游记","author"=>"吴承恩");
    $books['hlm'] = array("name"=>"红楼梦","author"=>"曹雪芹");
    //array_key_exists(目标键,数组名);用来判断数组中有没有对应键
    if(array_key_exists($code,$books) == 1){
        //根据参数获取一本书的信息
        $book = $books[$code];
        echo json_encode($book);
    }else{
        echo '{"flag":0}';
    }
    // echo "qq";//error 假设服务器端发生错误
?>