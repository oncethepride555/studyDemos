<!-- 连接数据库 -->
<?php
    $con = mysqli_connect('localhost', 'root', '') or die(mysqli_error());
    mysqli_select_db($con,'data');
    mysqli_query($con,'set names utf8');
?>