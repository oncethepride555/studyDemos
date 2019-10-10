<?php
    header('Content-Type:text/event-stream');
    header('Cache-Control:no-cache');

    function sendMsg($id, $msg) {
        // EventSource对象并不能够自行设定刷新时间，这依赖于浏览器的具体实现，
        // 比如在Chrome中的刷新时间是3秒，但是在Firefox中刷新时间为5秒。
        // 事实上，如果你可以控制服务器的话，可以在服务器端使用retry头信息，
        // 指定通信的最大间隔时间。
        echo 'retry:1000' . PHP_EOL;
        // PHP_EOL php中的换行符可以用这个
        echo "id: $id" . PHP_EOL;
        echo "data: $msg" . PHP_EOL;
        echo PHP_EOL;
        ob_flush();
        flush();
    }

    $serverTime = time();

    sendMsg($serverTime, 'server time: ' . date("h:i:s", time()));