//Pattern Making - generative pattern 
// Repeating pattern changes based on role 
var gap;
var gapShift;
var rectSize;
let color = 0;
let fillColor = 0;

function setup() {
  
  createCanvas(400, 400);
  noStroke();
  rectMode(CENTER);
  
  gapShift = rectSize;
  rectSize = 20;
  gap = rectSize+1.5;
}

function draw() {
  background(220);
//   line of gradiant down the canvas
  for(var i = 0; i<=width; i +=gap){
    for(var j = 0; j<=height;j+=gap){
      fillColor = random(0,255);
      fill(fillColor);
      drawRect(i,j,rectSize,rectSize);
    }
  }
}
function drawRect(x,y,w,h){
  rect(x,y,w,h);
}

function keyPressed(){
    rectSize+=1;
}