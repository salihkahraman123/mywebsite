let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
let mother = document.getElementById("input1");
let father = document.getElementById("input2");
context.fillStyle = "Red";

function calculate(){
	let x = mother.value.slice(0, Number(mother.value.length)-1);
	let y = father.value.slice(0, Number(father.value.length)-1);
	
	if (y == "AB"){
		y = mother.value.slice(0, Number(mother.value.length)-1);
		x = "AB"
	}
	if(x == "AB"){
		if (y == "0"){
				console.log("A, B");
			}else if (y = "A"){
				console.log("A, B, AB");
			}else if (y = "B"){
				console.log("A, B, AB");
			}else console.log("A, B, AB");
	} else {
		if (y == "A"){
		y = mother.value.slice(0, Number(mother.value.length)-1);
		x = "A";
		}
		if (x == "A"){
			if (y == "B"){
				console.log("A, B, 0, AB");
			}else if(y == "0"){
				console.log("A, 0");
			}else console.log("A, 0");
		} else 	console.log("B, 0");
	}
	
}

function drawTable(){
	for(let i=0; i<8; i++){
		context.fillRect(0+i*50, 200, 50, 100);
		context.strokeRect(0+i*50, 200, 50, 100);
	}
}

drawTable();