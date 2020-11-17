// 用setTimeout模拟setInterval：
/* let num = 0;
function f(){
    console.log(num++);
}
function mySetInterval(){
    f();
    setTimeout(function(){
        mySetInterval();
    },1000);
}
mySetInterval(); */

// 用setInterval模拟setTimeout：
function mySetTimeout(){
    let time = setInterval(() => {
        console.log('模拟setTimeout');
        clearInterval(time);
    }, 1000);
}
mySetTimeout();