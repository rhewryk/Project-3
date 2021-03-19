function setup() {
	var c = createCanvas(1000,1600); // width and height in pixels
background(255)

noFill();
strokeWeight(12);
scale(1.5);
translate(width / 1.102, height /50.9);
rotate(PI / 3.0);


let a = 0.0;
let inc = TWO_PI / 90.0;
for (let i = 4; i < 650; i = i + 15) {
	line(i, 900, i, 900 + tan(a) * 12.0);
	a = a + inc;
}



}



//https://p5js.org/reference/#/p5/rotate
// https://p5js.org/reference/#/p5/tan





function mousePressed() {
	saveCanvas("sketch-13","jpg")
}


//string-any letter, word, sentence
//