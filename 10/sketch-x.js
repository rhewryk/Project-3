var font;

function preload() {
	font = loadFont('PERTILI.TTF')
}

function setup() {
	createCanvas(1000,1000);
	textFont(font);
	textSize(40);
	text('X', 100, 100);
}







//https://www.youtube.com/watch?v=4hA7G3gup-4

function mousePressed() {
	saveCanvas("sketch-10","jpg")
}

