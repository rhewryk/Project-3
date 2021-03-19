function setup() {
	var c = createCanvas(1000,1000); // width and height in pixels
	angleMode(DEGREES);
background(0)

}

function draw() {

stroke(255)

	rotate(45);
	//right,top,height,width
	fill(255)
	rect(190,-5,620,70);

	fill(0)
	rect(200,5,600,50);


	rotate(270)
	fill(255)
	rect(-360,440,620,70)
	fill(0)
	rect(-350,450,600,50)
}







function mousePressed() {
	saveCanvas("sketch-05","jpg")
}


//string-any letter, word, sentence
//