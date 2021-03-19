function setup() {
	var c = createCanvas(1000,1000); // width and height in pixels

scale(11.5);
noFill();
stroke(255, 102, 0);
bezier(85, 20, 10, 10, 90, 90, 15, 80);


noFill();
stroke(255, 102, 0);
bezier(0, 20, 65, 10, 10, 90, 85, 80);



}






//https://p5js.org/reference/#/p5/bezier

function mousePressed() {
	saveCanvas("sketch-11","jpg")
}

