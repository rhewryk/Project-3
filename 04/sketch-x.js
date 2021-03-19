function setup() {
	var c = createCanvas(1000,1000); // width and height in pixels
background(255)

angleMode(RADIANS)

stroke(0)
noFill();
for (i=0;i<6;i++) {
	push();
		translate(500,500)
		rotate(i)
		rect(0,0,500,500)
	pop();
}
//right side
fill(255)
stroke(255)
rect(502,500,2,1)
rect(504,499,7,5)
rect(510,495,15,15)
rect(521,489,500,35)
rect(553,520,500,60)
rect(615,545,450,100)
rect(780,550,300,450)

//left side
rect(0,250,250,350)
rect(250,380,130,170)
rect(355,440,90,90)
rect(445,470,20,50)
rect(465,482,17,25)
rect(481,492,10,12)
rect(490,496,5,6)
rect(494,498,2,3)
rect(496.8,498.5,.5,.5)
rect(497,499.9,.5,.5)




	
	







}



function mousePressed() {
	saveCanvas("sketch-04","jpg")
}


//constants:
//half_pi
//pi
//quarter_pi
//two_pi
//degrees
//radians

//math:
//abs()
//dist()
//log()
//max()
//min()
//sq()
//sqrt()
//fract()

//Trigonometry:
//acos()
//asin()
//atan()
//atan2()
//cos()
//sin()
//tan()
//degrees()
//radians()
//angleMode()
