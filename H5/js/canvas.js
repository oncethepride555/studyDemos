var CANVAS_WIDTH = 600,
	CANVAS_HEIGHT = 600;
var mycanvas,context;

window.onload = function() {
	createCanvas();
	//drawRect();
	drawImage();
}

function createCanvas() {
	document.body.innerHTML = "<canvas id='mycanvas' class='canvas' width='" + CANVAS_WIDTH + "' height = '" + CANVAS_HEIGHT + "'></canvas>"
	mycanvas = document.getElementById("mycanvas");
	context = mycanvas.getContext("2d");
}

//绘制图像
function drawRect(){
	context.fillStyle = "#8B4513";
	//context.rotate(45);//旋转45°
	context.translate(100,100)//移动
	context.scale(2,0.5);//宽2倍，高0.5倍
	context.fillRect(0,0,200,200);
}

//绘制图片
function drawImage(){
	//创建image对象来承载image
	var img = new Image();
	img.onload = function(){
		context.drawImage(img,0,0);
	}
	img.src = "img/map.jpg";
}
