(function() {
	console.log('京喜工厂开始自动收取电力，开心！');
	setTimeout(function(){
			lifecycle();
	}, 2000);
})();

function lifecycle() {
	let timeid = setInterval(function() {
		console.log('执行lifecycle了');
		//var myDate = new Date();
		//console.log('当前时间：' + myDate.getHours() + ':' + myDate.getMinutes() + ':' + myDate.getSeconds());
        //if(myDate.getHours() >= 6){ // 6点以后
			if (document.querySelector('#alternator')) {
				//var num = document.querySelector(".alternator-num-n").innerText;
				console.log("监测电力值 --->> ");
				//num = parseFloat(num);
				//if(){
                        clearInterval(timeid);
                        console.log("电力值到300啦");
                        document.getElementById("alternator").click(); // 点击左下角300
                        var btn = document.getElementsByClassName('simple_dialog_btn')[0];
                        if(btn != undefined){
							setTimeout(() => {
								btn.click(); // 点击翻倍
							}, 10000);
                        }
                        //flag = false;
                        setTimeout(() => {
							console.log('从第一个页面点击翻倍后执行lifecycle');
                            lifecycle();
                        }, 2000);			
				//}
            }else{  // 商品页
                clearInterval(timeid);
				var secStr = '已完成';
				var timeid_2 = setInterval(function(){
					//secStr = document.querySelector(".floating_title").innerText;
					console.log("监测倒计时 --->> " + secStr);
					if (secStr === "10s") {
						console.log("滑动页面");
						//document.querySelector(".scroll-view").scrollTo(0, 800);
					}else if(secStr === "已完成"){
                        clearInterval(timeid_2);
						console.log("完成啦")
                        document.querySelector(".floating_name").click(); // 去领奖
                        //flag = true;
						setTimeout(function() {
							console.log('从第二个页面执行lifecycle');
							lifecycle();
						}, 2000);
					}			
				},1000);
				
			}
		//}
	}, 2000);
}