<?php
    $uname = $_POST['username'];
    $pwd = $_POST['password'];
    if($uname == 'admin' && $pwd == '123'){
        echo '1';
    }else{
        echo $uname;
    }
?>