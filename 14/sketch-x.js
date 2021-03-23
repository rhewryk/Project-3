let distribution = new Array(360);
function setup() {
   createCanvas(1000, 1000);
   for (let i = 0; i < distribution.length; i++) {
     distribution[i] = floor(randomGaussian(0, 95));

translate(300, 600);
}
   
 }


function draw() {
   background(255);
  translate(width / 2.5, width / 7.5);
  for (let i = 0; i < distribution.length; i++) {
     rotate(QUARTER_PI / distribution.length);
     stroke(0);
     let dist = abs(distribution[i]);
     //line(500, 20, dist, 500);


scale(1.0005);

stroke(0);
//line(10, 10, 300, 300);
rotate(PI / 2);
//rect(200, 200, 100, 200);
rotate(RADIANS / 290);
line(10, 700, 650, 15, 5);




   }
 }









//https://p5js.org/reference/#/p5/randomGaussian
//https://p5js.org/reference/#/p5/mouseMoved





function mousePressed() {
	saveCanvas("sketch-14","jpg")
}


//string-any letter, word, sentence
//