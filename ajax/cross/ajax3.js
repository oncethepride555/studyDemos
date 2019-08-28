function ajax(obj) {
    //默认参数
    var defaults = {
        type: 'get',
        data: {},
        dataType: 'text',
        jsonp: 'callback',
        url: '#',
        async: true,//异步，如果是同步的方式，则为 false，此时就不执行回调函数了。
        success: function (data) { console.log(data); }
    };
    //处理形参，传递参数的时候覆盖默认参数，不传递就使用默认参数
    for (var key in obj) {//循环的是对象中的所有属性
        defaults[key] = obj[key];
    }

    if (defaults.dataType == 'jsonp') {
        ajax4Jsonp(defaults);
    } else {
        ajax4Json(defaults);
    }
}

function ajax4Json(defaults) {
    //1.创建XMLHttpRequest对象
    var xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject(Microsoft.XMLHTTP);
    }

    //拼接参数，把对象形式的参数转化为字符串形式的参数
    var param = '';
    for (var attr in defaults.data) {
        param += attr + '=' + defaults.data[attr] + '&';
    }
    if (param) {//去掉末尾的 &
        param = param.substring(0, param.length - 1);//截取
    }
    //处理get请求参数，并且处理中文乱码问题
    if (defaults.type == 'get') {
        defaults.url += '?' + encodeURI(param);
    }

    //2.准备发送(设置发送的参数)
    xhr.open(defaults.type, defaults.url, defaults.async);
    //处理post请求参数，并且设置请求头信息（必须设置）
    var data = null;
    if (defaults.type == 'post') {
        data = param;
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    }
    //3.执行发送动作
    xhr.send(data);
    //处理同步请求，不会调用回调函数
    if (!defaults.async) {
        if (defaults.dataType == 'json') {
            return JSON.parse(xhr.responseText);
        } else {
            return xhr.responseText;
        }
    }
    //4.指定回调函数（处理服务器响应数据）  处理异步请求
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                var data = xhr.responseText;
                if (defaults.dataType == 'json') {
                    data = JSON.parse(data);
                }
                defaults.success(data);
            }
        }
    }
}

function ajax4Jsonp(defaults) {
    //默认的回调函数名称
    var cbName = 'jQuery' + ('1.1.11' + Math.random()).replace(/\D/g, "");//把非数字去掉
    if (defaults.jsonpCallback) {
        cbName = defaults.jsonpCallback;
    }

    //这里就是回调函数，调用方式：服务器响应的内容来调用
    //向window对象添加一个方法，方法名称是变量cbName的值
    window[cbName] = function (data) {
        defaults.success(data);
    }

    //参数
    var param = '';
    for (var attr in defaults.data) {
        param += attr + '=' + defaults.data[attr] + '&';
    }
    if (param) {
        param = param.substring(0, param.length - 1);
        param = '&' + param;
    }

    var script = document.createElement('script');
    var head = document.getElementsByTagName('head')[0];
    script.src = defaults.url + '?' + defaults.jsonp + '=' + cbName + param;
    head.appendChild(script);
}