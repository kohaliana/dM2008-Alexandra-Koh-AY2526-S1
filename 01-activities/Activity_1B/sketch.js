//FINAL
// DM2008
// Activity 1b (Georg Nees)

let x;
let y;
let w;
let c1;
let c2;
let c3;
let b =1;

function setup() {
  createCanvas(800, 800)
  background(240);
  rectMode(CENTER)
}

function draw() {
  
  x = random(width);
  y = random(height);
  w = random(10, 200);
  c1= random(0,255)
  c2= random(0,255)
  c3= random(0,255)
  b=0
  
  
  noStroke();
  // strokeWeight(random(0.5, 2));
  fill(c1,c2,c3);
  rect(mouseX, mouseY, w, w);
}
function mouseClicked(){
  b += 100;
  background(240,b);
}
function keyPressed() {
    saveCanvas("activity1b-image", "jpg");
}