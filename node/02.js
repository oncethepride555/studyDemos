/* 
模块化开发

传统非模块化开发的缺点：
1.命名冲突
2.文件依赖

前端标准的模块化规范：
1.AMD   requirejs    国外
2.CMD   seajs      阿里

服务器端的模块化规范：
1.CommonJS   相应的实现是：Node.js

前端和服务器端模块化的区别：
前端模块化，js文件要通过网络从服务器传输到浏览器端，文件的加载是异步的，保证页面渲染的效率
而服务端模块化，文件本来就在服务器当中，文件的加载只需要从磁盘加载到内存就可以了，文件的加载是同步的

模块化相关的规则：
1.如何定义模块：一个js文件就是一个模块，模块内部的成员都是相互独立的，模块之间不能随意访问，需要用到模块成员的导出和引入
2.模块成员的导出和引入
*/
var sum = function(a,b){
    return parseInt(a) + parseInt(b);
}

// 导出模块---方式1
// exports.sum = sum;
// 上面语句的ES6写法为：
/* const _sum = sum;
export { _sum as sum }; */


// 导出模块---导出成员的方式2
module.exports = sum;
// 上面语句的ES6写法为：
// export default sum;