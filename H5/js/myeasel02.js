var canvas;
var stage;
var img = new Image();
var sprite;

window.onload = function() {
	canvas = document.getElementById("canvas");//画布
	stage = new createjs.Stage(canvas);//舞台

	stage.addEventListener("stagemousedown", clickCanvas);//鼠标点击事件
	stage.addEventListener("stagemousemove", moveCanvas);//鼠标移动事件

	//创建一个data序列
	var data = {
		images: ["img/2.png"],//图片地址
		frames: {//每一帧开始的宽高，以及动画效果和鼠标所在位置的偏移
			width: 2,
			height: 2,
			regX: 0,
			regY: 0
		}
	}
	//sprite的原理其实很简单就是连续捕捉图片的部分像素组成一个动画，但是效率要比movieclip高很多。
	sprite = new createjs.Sprite(new createjs.SpriteSheet(data));
	createjs.Ticker.setFPS(20);//FPS ： 每秒传输帧数，类似于动画播放的快慢
	createjs.Ticker.addEventListener("tick", tick);
}

function tick(e) {
	var t = stage.getNumChildren();// 移动或者点击时候所产生的数量
	for(var i = t - 1; i > 0; i--) {
		var s = stage.getChildAt(i);

		s.vY += 2;
		s.vX += 1;
		s.x += s.vX;
		s.y += s.vY;
		s.scaleX = s.scaleY = s.scaleX + s.vS;//缩放，同时变化 不变形
		s.alpha += s.vA;//透明度
		if(s.alpha <= 0 || s.y > canvas.height) {//当完全透明或者位置出了画布时
			stage.removeChildAt(i);//移除小方块
		}
	}
	stage.update();
}

//鼠标点击的时候
function clickCanvas(e) {
	addS(Math.random() * 200 + 100, stage.mouseX, stage.mouseY, 2);//数量多
}

//鼠标移动的时候
function moveCanvas(e) {
	addS(Math.random() * 2 + 1, stage.mouseX, stage.mouseY, 1);//数量少
}

function addS(count, x, y, speed) {//count产生小方块的数量;x,y鼠标所在的点,speed速度用来区分点击和移动速度的不同
	for(var i = 0; i < count; i++) {
		var s = sprite.clone(); //返回的是实例对象
		s.x = x;
		s.y = y;
		s.alpha = Math.random() * 0.5 + 0.5; //透明度，越小越透明
		s.scaleX = s.scaleY = Math.random() + 1.3; //缩放
		var a = Math.PI * 2 * Math.random(); //变化的范围
		var v = (Math.random() - 0.5) *30 * speed; //变化的速度
		s.vX = Math.cos(a) * v ;
		s.vY = Math.sin(a) * v ;
		s.vS = (Math.random() - 0.5) * 0.2; //scale，缩放的速度
		s.vA = -Math.random() * 0.05 - 0.01; //alpha，透明度变化速度，渐渐的变淡
		stage.addChild(s);//添加在舞台
	}
}