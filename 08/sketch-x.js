function setup() {
	var c = createCanvas(1000,1000); // width and height in pixels
background(255)


//let b = 2.5;
//let inc = TWO_PI / 55.0;
//for (let i = 0; i < 50; i++) {
//	line(i * 24, 300, i * 24, 300 + cos(b) * 240.0);
//	b = b + inc;

//}

translate(width / .5, height / 2);
rotate(PI / 1);
//function setup() {
	let a = 2.8;
	let inc = PI / 105.0;
	for (let i = 1; i < 205; i++) {
		line(i * 9, 150, i * 12, 140 + sin(a) * 400.0);
		line(i * 9, 150, i * 10, 90 + cos(a) * 400.0);
		a = a + inc;
}
//}




}
//https://p5js.org/reference/#/p5/cos

function mousePressed() {
	saveCanvas("sketch-08","jpg")
}


//string-any letter, word, sentence
//