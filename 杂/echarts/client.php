<?php
//连接数据库
include(realpath("./")."/db1.php");
// 查询数据
$sql='select * from echarts';
$result = mysqli_query($con,$sql);
// 将数据转化成json格式
$json_data = array('city'=>array(),'data'=>array());
while ($row = mysqli_fetch_array($result,MYSQLI_ASSOC)){
    array_push($json_data['data'],$row['data']);//将字符串转化为数值
    array_push($json_data['city'],$row['city']);
}
echo json_encode($json_data);//打印编码后的json字符串
?>
