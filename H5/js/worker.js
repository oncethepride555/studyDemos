var numDiv;
var start, stop;
var worker = null;

window.onload = function() {
	numDiv = document.getElementById("numDiv");
	start = document.getElementById("start");
	stop = document.getElementById("stop");

	start.onclick = function() {
		worker = new Worker("js/count.js"); //路径一定要对
		worker.onmessage = function(e) {
			numDiv.innerHTML = e.data;
		}
		
	}
	
	stop.onclick = function(){
		if(worker){
			worker.terminate();
			//worker = null;
		}
	}

}