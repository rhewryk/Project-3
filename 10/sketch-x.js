const sketchNumber = "10";


function preload() {
	font = loadFont('PERTILI.TTF')
}

function setup() {
	createCanvas(1000,1000);
	textFont(font);
	textSize(1000);
	text('X', 150, 870)
}






//https://www.youtube.com/watch?v=4hA7G3gup-4

function mousePressed() {
	saveCanvas("sketch-"+sketchNumber,"jpg")
}

