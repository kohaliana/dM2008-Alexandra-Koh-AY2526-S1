

function setup() {
  createCanvas(400, 400);
  background(220);
  // strokeWeight(10);
  // stroke(100);
}

function draw() {
  noStroke();
  fill(165,140,140);
  ellipse(width/2,height/2,270);
  ellipse(width/5,height/4,90);
  ellipse(width-(width/5),height/4,90);
  
  fill(20);
  //eyes
  ellipse(width/3,(height/5)*2,20);
  ellipse(width-(width/3),(height/5)*2,20);
  
  fill(200);
  //snout
  ellipse(width/2,(height/5)*3,150,125);
  fill(30);
  //nose
  ellipse((width/2),(height/7)*3.1,50,20);
  rectMode(CENTER);
  rect(width/2,(height/7)*3.3,10,40);
  rect(width/2,(height/7)*3.6,50,10);
  
}

function mouseClicked(){
  saveCanvas()
}