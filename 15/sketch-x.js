function setup() {
   createCanvas(1000, 1000);
   

randomSeed(99);
for (let i = 0; i < 1000; i++) {
  let r = random(0, 255);
  stroke(r);
  line(i, 0, i, 1000);
}
noStroke();
rotate(TWO_PI / 8);
rect(40, 100, 600, 600);
rect(800, 100, 600, 600);
rect(50, -650, 600, 600);
rect(800, -670, 600, 600);

}



//https://p5js.org/reference/#/p5/randomGaussian
//https://p5js.org/reference/#/p5/mouseMoved





function mousePressed() {
	saveCanvas("sketch-15","jpg")
}


//string-any letter, word, sentence
//