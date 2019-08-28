<?php
    $uname = $_GET['username'];
    $pwd = $_GET['password'];
    if($uname == 'admin' && $pwd == '123'){
        echo '1';
    }else{
        echo $uname;
    }
?>