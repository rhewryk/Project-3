function setup() {
	var c = createCanvas(1000,1000); //WIDTH AND HEIGHT IN PIXELS
	background(255); //0 IS BLACK AND 255 IS WHITE ANYTHIN GINBETWEEN IS A SHADE OF GREY


	//ellipse(250,720,100,100)


	//rect(550,750,100,100)



	var i = 0;
	stroke(0)
	while(i<100) {
		//add our code here

		//ellipse(10*i,10*i,250,250)
		i++;
	}

//fill(0)
	//stroke(255)
//	noStroke(255)

	//ellipse(500,500,100,100)
//	rect(550,550,100,100)
//	rect(500,500,100,100)
	//rect(450,450,100,100)
//	rect(400,400,100,100)
	//rect(350,350,100,100)
//	rect(300,300,100,100)
//	rect(250,250,100,100)

//	rect(250,550,100,100)
//	rect(300,500,100,100)
	//rect(350,450,100,100)
//	rect(500,300,100,100)
//	rect(550,250,100,100)


}

function draw() {
	stroke(0)
	noFill()
	rRadius = random(50)+50
	ellipse(mouseX,mouseY,rRadius,rRadius)
}



function mousePressed() {
	saveCanvas("sketch-01","jpg")
}