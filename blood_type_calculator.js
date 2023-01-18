let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
context.fillStyle = "Red";

function drawTable(){
	for(let i=0; i<8; i++){
		context.fillRect(0+i*50, 200, 50, 100);
		context.strokeRect(0+i*50, 200, 50, 100);
	}
}
drawTable();