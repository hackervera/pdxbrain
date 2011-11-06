function time(){
	var newTime = new Date();
	//console.log(newTime.toString());
	$("#time").html(newTime.toString());
}

function drawCanvas(){
	var canvas = $("#canvas")[0];
	//console.log(canvas);
	var context = canvas.getContext('2d');
	context.fillStyle = "rgb(255,0,0)";
	context.fillRect(30, 30, 50, 50);
}

time();
drawCanvas();
