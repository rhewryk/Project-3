const sketchNumber = "21";
const sWidth = 1000;
const sHeight = 1000;

let font, tiles, tileSize;
let loopDuration = 2 * 60



function preload() {
	font  = loadFont('PERTILI.TTF')
}


function setup() {
  createCanvas(1000, 1000)
  noStroke()
  
  points = font.textToPoints('X', width / 6.9, height / 1.15, 1000, {
    sampleFactor: 0.1,
    simplifyThreshold: 0
  })

	frameRate(30)

    createLoop(
    duration:10,
    gif:true);

  tiles = 20
  tileSize = width / tiles
}

function draw() {
  let currentFrame = frameCount % loopDuration
  let t = currentFrame / loopDuration
  let u = map((t), 0, 1, 0, PI)
  
  background(0, 50)

  points.forEach(point => {
    push()
    translate(point.x, point.y)
    rotate(u)
    fill('rgba(0, 0, 255, 0.8)')
    ellipse(-6 * sin(u), -6 * cos(u), 40 + 200 * sin(u), 3)
    fill('#4D03FF')
    ellipse(-8 * sin(u), -8 * sin(u), 40 + 190 * sin(u), 3)
    fill('rgba(0, 255, 0, 0.8)')
    ellipse(0 * sin(u), 0 * sin(u), 40 + 180 * sin(u), 3)
    fill('#FF25E9')
    ellipse(8 * sin(u), 8 * sin(u), 40 + 190 * sin(u), 3)
    fill('rgba(255, 0, 0, 0.8)')
    ellipse(6 * sin(u), 6 * sin(u), 40 + 200 * sin(u), 3)
    pop()
  })
}
	


//https://editor.p5js.org/p5user1/sketches/O2_eYNXve



function mousePressed() {
	saveCanvas("sketch-"+sketchNumber,"png")
}

