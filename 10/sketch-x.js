const sketchNumber = "10";
const sWidth = 1000;
const sHeight = 1000;

let a = 0.0;
let aVelocity = 0.0;
let aAcceleration = 0.1

function preload() {
	font = loadFont('PERTILI.TTF')
}

function setup() {
	createCanvas(sWidth,sHeight);
	textFont(font);
	textSize(40);
	text('X', 100, 100)
}




function draw() {
	a+= aVelocity;
	aVelocity +=aAcceleration;

	aAcceleration = map(mouseX,0,width,-0.001, 0.001)
	background(255)
	stroke(0)
	fill(127)
	translate(width/2,height/2)
	rotate(a)
	rect(0,0,64,36)
}




//https://www.youtube.com/watch?v=4hA7G3gup-4

function mousePressed() {
	saveCanvas("sketch-10","jpg")
}

