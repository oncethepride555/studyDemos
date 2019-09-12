var num = 0;
var txt;
var btn;
window.onload = function() {
	btn = document.getElementById("addbtn");
	txt = document.getElementById("txt");
	if(sessionStorage.num) {
		num = sessionStorage.num;
		showNum();
	}

	btn.onclick = function() {
		num++;
		sessionStorage.num = num;
		showNum();
	}
}

function showNum() {
	txt.innerHTML = num;
}