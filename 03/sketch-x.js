function setup() {
	var c = createCanvas(1000,1000); // width and height in pixels
background(250)

fill(0)
	ellipse(10,10,100,100)


}



function mousePressed() {
	saveCanvas("sketch-04","jpg")
}