const sketchNumber = "19";
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
	pts = font.textToPoints(msg, 85, 140, fSize, {
		sampleFactor: 5.9,
		simplifyThreshold: 0.09
	});
	console.log(pts)

	stroke(255)
	strokeWeight(2)
	noFill();

	}


	

function draw() {
	background(0);

	const d = 10 + sin(frameCount/50.) * 50
	const angle = frameCount/100.

	push();
	translate(10, height*5/8);

	for (let i = 0; i < pts.length; i++) {
		const p = pts[i]
		push();
		translate(p.x, p.y);
		rotate(angle);
		line(-d, -d, +d, +d);
		pop();
	}
	pop();

}

function mousePressed() {
	saveCanvas("sketch-"+sketchNumber,"png")
}

