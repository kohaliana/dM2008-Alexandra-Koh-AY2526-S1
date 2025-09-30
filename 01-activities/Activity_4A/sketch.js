//3a cookie flavour randomiser + move 
let chip;
let cookieColor;
let newCookie;
let cookieArray;

let chipArray;
let colorArray;

function setup() {
  createCanvas(400, 400);
  background(240);
  colorMode(HSB,360,100,100,100);
  noStroke();
  
  cocoColor = [20,40,70,100];
  matchaColor = [120,30,90,100];
  vanillaColor = [40,35,95,100];
  
  chipMatchaCol= [100,0,100,100];
  chipCocoCol= [20,70,40,100];
  
  colorArray = [cocoColor,matchaColor,vanillaColor]
  chipArray = [chipMatchaCol,chipCocoCol]
  
  newCookie = new Cookie(200,200,100,colorArray[0],10,7,chipArray);}
function draw(){
  if (keyIsPressed){
    newCookie.move();
  }
 if (mouseIsPressed){
    newCookie.create();
  }
}
  
class Cookie{
  constructor(x,y,s,baseCol,chipNo,chipSize,chipCol){
    this.x = x;
    this.y = y;
    this.s = s;
    this.baseCol = baseCol;
    this.chipNo = chipNo;
    this.chipSize = chipSize;
    this.chipCol = chipCol;
  }
  create(){
    background(30);
    //draw cookie base
    
    this.baseCol = random(colorArray);
    fill(this.baseCol);
    ellipse(this.x,this.y,this.s);
  
    //draw choco chips
    fill(random(this.chipCol));
    for(chip = 0; chip<this.chipNo;chip++)
    {
        ellipse(random(this.x-this.s/2.5,this.x+this.s/2.5),random(this.y-this.s/2.5,this.y+this.s/2.5),this.chipSize);
    }
  }
  
  move(){
    this.x +=1;
    if(this.x>width){
      this.x = 0;
    }
    
  }
}