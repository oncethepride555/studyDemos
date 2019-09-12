var stage;
var canvas;
var txt;
var count = 0;
window.onload = function() {
	canvas = document.getElementById("canvas");
	stage = new createjs.Stage(canvas);
	txt = new createjs.Text("number->", "20px Arial", "#fff000");
	stage.addChild(txt);
	//添加监听
	createjs.Ticker.setFPS(10);//FPS ： 每秒传输帧数
	createjs.Ticker.addEventListener("tick", tick);
}

function tick(e) {
	count++;
	txt.text = "number->" + count + "!";//text为小写！
	stage.update();
}