const sketchNumber = "20";
const sWidth = 1000;
const sHeight = 1000;

let font;
let fSize;
let msg;
let pts = [];


function preload() {
	font  = loadFont('PERTILI.TTF')
}

function setup() {
	createCanvas(sWidth,sHeight);
	textFont(font);
	textSize(900);
	msg = 'x';
	pts = font.textToPoints(msg, 85, 700);
	//console.log(pts)
	for (i=0; i < pts.length; i++) {
		ellipseSize = random(1, 18);
		ellipse(pts[i].x,pts[i].y,ellipseSize, ellipseSize)
	}

	stroke(255)
	strokeWeight(2)
	//noFill();

	}


	



function mousePressed() {
	saveCanvas("sketch-"+sketchNumber,"png")
}

