<?php 
    header("Content-Type:text/xml");
    //这里设置响应头信息，保证浏览器可以把响应内容识别为xml文件类型
?>
<?xml version="1.0" encoding="utf-8"?>
<booklist>
    <book>
        <name>三国演义</name>
        <author>罗贯中</author>
    </book>
</booklist>
<!-- 描述文本数据的数据称为元数据，就是那些标签数据 -->
