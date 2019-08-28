<?php
    $uname = $_POST['username'];
    $pwd = $_POST['password'];
    if($uname == 'admin' && $pwd == '123'){
?>
        <script type="text/javascript">
            parent.document.getElementById('info').innerHTML = '登录成功';
        </script>
<?php
    }else{
?>  
        <script type="text/javascript">
            parent.document.getElementById('info').innerHTML = '登录失败';
        </script>
<?php
    }
?>