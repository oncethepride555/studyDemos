<?php 
    /*
    省市县后台数据接口
    接口调用规则：
    1.参数一：flag，区分省市县
    2.参数二：选择省的时候，传递pId ;选择市的时候，传递cId  
    */
    //引入数据文件
    // include('./selectdata.php');
    require('./selectdata.php');
    // 省市县数据来自selectdata.php文件
    $province = $provinceJson;
    $city = $cityJson;
    $county = $countyJson;

    //通过flag来区分请求的是省还是市还是县级数据
    $flag = $_GET['flag'];
    // 省级数据
    if($flag == 1){
        //把数组转换成json格式字符串
        echo json_encode($province);
    // 市级数据
    }else if($flag == 2){
        $pId = $_GET['pId'];//省id
        $cityData = array();//根据省级id查到的市级数据放到此数组中
        foreach ($city as $value) {//遍历市级数据中哪些属于该省
            if($value->id == $pId){//访问每一个对象{}中的id属性
                // 直辖市---->省级id和市级id一样
                array_push($cityData,$value);
                break;
            }else if($value->parent == $pId){
                // 非直辖市
                array_push($cityData,$value);
            }
        }
        echo json_encode($cityData);
    // 县级数据
    }else if($flag == 3){
        $cId = $_GET['cId'];//市id
        $countyData = array();
        foreach ($county as $value) {
            if($value->parent == $cId){
                array_push($countyData,$value);
            }
        }
        echo json_encode($countyData);
    }
?>