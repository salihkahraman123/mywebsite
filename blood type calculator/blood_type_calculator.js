let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
let mother = document.getElementById("input1");
let father = document.getElementById("input2");
let butonche = document.getElementById("buton");
context.fillStyle = "Red";

let a = mother.value;
let b = father.value;

function calculate(){
	console.log(a + " " + b);
}

function drawTable(){
	for(let i=0; i<8; i++){
		context.fillRect(0+i*50, 200, 50, 100);
		context.strokeRect(0+i*50, 200, 50, 100);
	}
}

drawTable();