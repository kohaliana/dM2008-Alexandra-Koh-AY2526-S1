//2A: interactive sketch - if else and switch - 3 modes changing sketch in different way
// RGB change color, mouse click, mouse drag, 

//back and forth using boolean 
let shapeColor;
let b = 0;
let dim = false;
let ellipseW = 0;
let ellipseH = 0;
function setup() {
  createCanvas(400, 400);
  shapeColor = color(100); // starts gray
  rectMode(CENTER);
}
function draw() {
  background(b);
  fill(shapeColor);
  ellipse(ellipseW, ellipseH, 100);
  noStroke();
  rect(width/2,height,400,100)
  
   if (dim == false) {
    b++;
    if(b >= 255) {
      dim = true;
    }
  }
  
  if (dim) {
    b-=1;
    if(b <= 0) {
      dim = false;
    }
  }
  
}
function keyPressed() {
  switch (key) {
    case 'r':
      shapeColor = color(255, 0, 0);
      break;
    case 'g':
      shapeColor = color(0, 200, 100);
      break;
    case 'b':
      shapeColor = color(0, 150, 255);
      break;
    default:
      shapeColor = color(100); // fallback
  }
}
function mouseDragged(){
  if (ellipseW < 450){ellipseW+=2;}
  else {ellipseW=0}
  ellipseW+=1;
}
function mousePressed(){
  if (ellipseH < 300){ellipseH+=100;}
  else {ellipseH=0;}
  
}