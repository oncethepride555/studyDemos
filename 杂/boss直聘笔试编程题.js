// 求一个数组的中位数，最小值，最大值，top9
var dataArr = [-999,100,2000,-3000,4,7,666];
dataArr.sort(function(x,y){
    if(x<y) return -1;
    else if(x>y) return 1;
    else return 0;
});
console.log(dataArr);
var res = [];
var mid;//中位数
if(dataArr.length%2==0){
    mid = Math.ceil((dataArr[dataArr.length/2 - 1] + dataArr[dataArr.length/2])/2);
}else{
    mid = Math.ceil(dataArr[(dataArr.length + 1)/2 - 1]);
}
res.push(mid);
var min = dataArr[0];
var max = dataArr[dataArr.length-1];
res.push(min);
res.push(max);
var tp9 = dataArr[Math.ceil(dataArr.length * 0.9) - 1];
res.push(tp9);
console.log(res);

//-----------------------题目分界线--------------------------------

// 找出一句话中的敏感词
/* var content = "While there is life, there is hope.";
var sensitiveWords = ["hope", "here"];
var res = [];
content = content.split(' ');
for(let i of content){
    for(let j = 0; j < sensitiveWords.length; j++){
        let sen = sensitiveWords[j];
        if(i.indexOf(sen) >= 0) res.push(sen);
    }
    
}
console.log(res); */

//-----------------------题目分界线--------------------------------

// 找出所有IP中在黑名单中的IP
/* var ipArr = ["192.168.1.1", "192.168.1.2", "192.168.1.3"]; // 所有IP
var blackIpArr = ["192.168.1.3", "192.168.1.4"]; // 黑名单IP
var res = [];
for(let i of ipArr){
    if(blackIpArr.includes(i)) res.push(true);
    else res.push(false);    
}
console.log(res); */