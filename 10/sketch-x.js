const sketchNumber = "10";

let font;
function preload() {
	font = loadFont('PERTILI.TTF');
}


let points;
let bounds;

function setup() {
	createCanvas(1000,1000);
	background(255);
	textFont(font);
	textSize(1000);
	text('X', 150, 870);
	fill(0)


	points = font.textToPoints('X', 0, 0, 10, {
		sampleFactor: 10,
		simplifyThreshold: 0
	});
	bounds = font.textBounds('X', 0, 0, 10);
}

function draw() {
	background(255);
	beginShape();
	translate(-bounds.x * width / bounds.w, -bounds.y * height / bounds.h);
	for (let i = 10; i < points.length; i++) {
		let p = points[i];
		vertex(
			p.x * width / bounds.w +
			tan(2 * p.y / bounds.h + millis() / 1000) * width / 80, p.y * height / bounds.h
			);
	}
	endShape(CLOSE);
}







//https://www.youtube.com/watch?v=4hA7G3gup-4

function mousePressed() {
	saveCanvas("sketch-"+sketchNumber,"jpg")
}

