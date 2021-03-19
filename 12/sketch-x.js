function setup() {
	var c = createCanvas(1000,1000); // width and height in pixels
background(255);

scale(8.5);
noFill();
strokeWeight(1);
beginShape();
vertex(20,20);
quadraticVertex(80, 20, 50, 50);
quadraticVertex(20, 80, 80, 80);
vertex(80, 80);
endShape();


beginShape();
vertex(80,20);
quadraticVertex(20, 80, 50, 50);
quadraticVertex(80, 20, 20, 80);
vertex(20,80);
endShape();


//beginShape();
//vertex(80,20);
//quadraticVertex(20, 80, 50, 50);
//quadraticVertex(80, 20, 20, 80);
//vertex(20,80);
//endShape();
}






//https://p5js.org/reference/#/p5/quadraticVertex

function mousePressed() {
	saveCanvas("sketch-12","jpg")
}

