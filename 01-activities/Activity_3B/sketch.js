var gap;
var gapShift;
var circleSize;
let color
// DM2008 — Activity 3b
// (One Function Wonder, 15 min)
let palette =["#fff","#FFD8D8","#FF8787","#FF8D8D"]
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  fill(255);
  noStroke();
  gap = circleSize*2;
  gapShift = circleSize;
  circleSize = 10;
  
  for(var i = 0; i<=width; i +=gap){
    for(var j = 0; j<=height;j+=gap){
      fill(random(palette));
      drawCircle(i,j,circleSize);
    }
  }

  // TODO 1:
  // Define a function that draws something (a shape or group of shapes).
  // It should take at least one parameter (e.g., position, size, or color).

  // TODO 2:
  // Call your function multiple times with different parameter values.
  // myShape(100, 200, 50);
  // myShape(300, 200, 80);

  // TODO 3:
  // (Challenge) Call your function inside a for loop
  // to create a repeating pattern or variation.
}

// Example starter function:
// function myShape(x, y, s) {
//   ellipse(x, y, s, s);
// }

function drawCircle(x,y,w){
  ellipse(x,y,w);
}
function keyPressed(){
  
}