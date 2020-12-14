var hr, min, sec;
var scAngle, minAngle, hrAngle;
function setup() {
  createCanvas(800,400);
//to use angle in DEGREES
angleMode(DEGREES);

}

function draw() {
  background(255,255,255);

//Translation and Rotation
translate(200,200);
rotate(-90);
  
//calculating time usinf predefined functions
hr = hour();
min = minute();
sec = second();

//to create a iterative rotation
scAngle = map(sec, 0, 60, 0, 360);
minAngle = map(min, 0, 60, 0, 360);
hrAngle = map(hr, 0, 24, 0, 360);

//drawing seconds hand
  push();
  rotate(scAngle);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0, 0, 100, 0);
  pop();

// Again repeat above 6 lines to create mintes hand and hour hand

stroke(255,0,255);
point(0,0)
  
//drawing the arcs
 strokeWeight(10);
 noFill();

//now make seconds arc, minutes arc and hour arc using stroke() and arc()
}