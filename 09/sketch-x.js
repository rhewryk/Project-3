function setup() {
	var c = createCanvas(1000,1000); // width and height in pixels
background(255)


//function setup() {
	let a = 1.0;
	let inc = PI / 60.0;
	for (let i = 0; i < 50; i++) {
		line(i * 15, 300, i * 5, 600 + sin(a) * 350.0);
		//line(i * 5, 500, i * 8, 600 + cos(a) * 300.0);
		line(i * 5, 300, i * 15, 600 + tan(a) * 350.0);
		a = a + inc;
}
fill(255)
stroke(255)
rect(30,0,400,299.9)
rect(0,299,100,15)
rect(0,310,95,30)
rect(0,335,90,35)
rect(0,368,88,40)
rect(0,405,85,37)
rect(0,437,82,38)
rect(0,472,76,38)
rect(0,510,73,39)
rect(0,548,70,43)
rect(0,585,63,64)
rect(0,645,58,68)
rect(0,710,62,35)
rect(0,740,62,260)




}
//https://p5js.org/reference/#/p5/cos

function mousePressed() {
	saveCanvas("sketch-09","jpg")
}

