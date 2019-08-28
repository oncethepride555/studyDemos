function ajax(type,url,param,json,callback){
    var xhr = null;
    //1.创建对象，做兼容处理
    if(window.XMLHttpRequest){//存在，则是标准浏览器
        xhr = new XMLHttpRequest();
    }else{//不存在，为ie6浏览器
        xhr = new ActiveXObject(Microsoft.XMLHTTP);
    }
    if(type == 'get'){
         param = encodeURI(param);
        url += '?'+ param;
    }
    //2.准备发送
    xhr.open(type,url,true);
    var data = null;
    if(type == 'post'){
        data = param;
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    }
    //3.执行发送动作
    xhr.send(data);
    //4.指定回调函数
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                var data = xhr.responseText;
                if(json == 'json'){
                    var data = JSON.parse(data);
                }
                callback(data);//这里的data是实参
            }
        }
    }
}