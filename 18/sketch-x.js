const sketchNumber = "18";

let points;
let vehilces = [];
let size = [];
let size = [];
direction = [];

function preload() {
	font = loadFont('PERTILI.TTF');
}



function setup() {
	createCanvas(1000,1000);
	//textFont(font);
	//fill(0);

points = font.textToPoints('X',150,870,1000,{sampleFactor:0.05});


for (i=0;i<points.length;i++) {
	let vehicle = newVehicle(points[i].x, points[i].y)
	vehicles.push(vehicle)
}

}






function draw() {
	background(255);

	for (let i=0; i<points.length;i++) {

		vehicles[i].behaviors()
		vehicles[i].update()
		vehicles[i].show();

	}
	}
	







//https://www.youtube.com/watch?v=4hA7G3gup-4

function mousePressed() {
	saveCanvas("sketch-"+sketchNumber,"jpg")
}

