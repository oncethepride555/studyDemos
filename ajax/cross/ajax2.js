function ajax(obj){
    var defaults={
        url:'#',
        dataType:'jsonp',
        data:{},
        jsonp:'callback',
        success:function(data){console.log(data);}
    };

    for(var key in obj){
        defaults[key] = obj[key];
    }

    //默认的回调函数名称
    var cbName = 'jQuery' + ('1.1.11' + Math.random()).replace(/\D/g,"");//把非数字去掉
    if(defaults.jsonpCallback){
        cbName = defaults.jsonpCallback;
    }

    //这里就是回调函数，调用方式：服务器响应的内容来调用
    //向window对象添加一个方法，方法名称是变量cbName的值
    window[cbName] = function(data){
        defaults.success(data);
    }

    //参数
    var param = '';
    for(var attr in defaults.data){
        param += attr + '=' + defaults.data[attr] + '&';
    }
    if(param){
        param = param.substring(0,param.length - 1);
        param = '&' + param;
    }

    var script = document.createElement('script');
    var head = document.getElementsByTagName('head')[0];
    script.src = defaults.url + '?' + defaults.jsonp + '=' + cbName + param;
    head.appendChild(script);
}