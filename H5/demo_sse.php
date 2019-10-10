<?php
    header('Content-Type:text/event-stream');
    header('Cache-Control:no-cache');

    // date() 函数格式化本地日期和时间，并返回已格式化的日期字符串。
    $time = date("h:i:s");
    
    // 输出发送日期
    // 服务端返回数据需要特殊的格式,它分为四种消息类型：event, data, id, retry
    // event指定自定义消息的名称
    // data指定具体的消息体，可以是对象或者字符串
    // 在消息体后面有两个换行符\n，代表当前消息体发送完毕，
    // 一个换行符标识当前消息并未结束，浏览器需要等待后面数据的到来后再触发事件；
    // id为当前消息的标识符，可以不设置。
    // retry设置当前http连接失败后，重新连接的间隔。
    // 每个字段都有名称，紧接着有个”:“。当出现一个没有名称的字段而只有”:“时，这就会被服务端理解为”注释“，并不会被发送至浏览器端
    echo "retry:1000\n";
    echo "event:myevent\n";
    echo "data:The server time is:$time \n";
    echo "data:foo\n\n";
    // 向网页刷新输出数据
    ob_flush();
    flush();
?>