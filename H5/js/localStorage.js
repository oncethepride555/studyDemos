var ta;
var btn;
window.onload = function(){
	ta = document.getElementById("ta");
	if(localStorage.text){//判断localStorage储存的数据是否为空
		ta.value = localStorage.text;//如果不是空，就把它存储的数据赋给文本框
	}
	btn = document.getElementById("btn");
	btn.onclick = function(){
		localStorage.text = ta.value;
	}
}
