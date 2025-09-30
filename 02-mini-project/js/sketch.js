let played = false;
let states = 0;
let pipes = [];
let flappy;
let score = 0;
let scoreStep = 1;
let lost = false;
let text1 = "SCORE";
let highScore;
let palette = ["#37402F", "#455925", "#B6D96C", "#DFF299", "#262625","#FFEB3B","#a04545ff","#5e472aff"];
let pooArray=[];
let pooLot=[0,1,2]
function preload(){
  pointSound = loadSound("./Assets/getCoin.mp3");
  loseSound = loadSound("./Assets/sadWhistle.mp3");
  myFont = loadFont("./Assets/Jersey15-Regular.ttf");
}

function setup() {
  textFont(myFont);
  createCanvas(400, 600);
  noStroke();
  textAlign(CENTER);
  highScore = score;
  //constructor(x, y, r, v, g, l)
  flappy = new Bird(width / 2, height / 2, 18, 0, 0.6, -20);
  states = 0;
  
}

function draw() {
  // console.log(states);
  switch (states) {
    case 0:
      menu();
      break;
    case 1:
      play();
      break;
    case 2:
      lose();
      break;
  }
  
}
//state 0 
function menu() {
  background(palette[4]);
  textSize(50);
  fill(palette[2]);
  text('MENU', width / 2, height/4);
  textSize(20);
  text('SPACE to retry', width/2, (height/4)*3.5);
}
//state 2 
function lose() {
  if (score>highScore){
  highScore=score;}
  background(palette[4]);
  textSize(50);
  fill(palette[6]);
  
  text('LOSE', width / 2, height/4);
  fill(palette[2]);
  text('SCORE:'+score, width / 2, (height/4)*2);
  
  textSize(20);
  text('HIGH SCORE:'+ highScore, width / 2, (height/4)*2.5);
  text('SPACE to retry', width/2, (height/4)*3.5);
  if (played==false){
    loseSound.play();}
  played = true;
  pooArray=[];
}
//state 1
function play() {
  //random turd generator
  if(frameCount %100 ==0 && random(pooLot)==0){
    pooArray.push(new Poo(flappy.pos.y));
  }
  if(pooArray.length>=3){
    pooArray.splice(0,1 );
  }
  //score text 
  background(palette[4]);
  fill(palette[3]);
  textSize(50);
  text(score, width / 2, height/4);
  //pipe 
  for (let i = pipes.length - 1; i >= 0; i--) {
    if (pipes.length > 0) {
      pipes[i].update();
      pipes[i].show();
    }
    //==LOSE==
    if (pipes[i] != undefined && pipes[i].hits(flappy)) {
      fill(palette[2]);
      pipes.splice(0, pipes.length);
      states = 2;
    }

    if (pipes[i] != undefined && pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
    //==ADD SCORE==
    if (pipes[i] != undefined && pipes[i].middlescreen() && lost == false) {
      pointSound.play();
      score += scoreStep;
      text1 = score;
      console.log("passed a pipe" + score);
    }
  }

  pooPlay();
  flappy.update();
  flappy.show();
 

  //hit ceiling or floor check 
  if (flappy.hitSurface()){
    fill(palette[2]);
    pipes.splice(0, pipes.length);
    states = 2;
  }
  //pipe generator 
  if (frameCount % 120 == 0 && lost == false) {
    pipes.push(new Pipe());
    console.log(pooArray);
  }
}
function pooPlay(){
    for(let i = 0; i<pooArray.length;i++){
      pooArray[i].update();
      pooArray[i].show();
    } 
}
//==INPUT==
function keyPressed() {
  if (key == " " && states == 1) {
    flappy.up();
  }
  if (key == " " && states == 2) {
    score = 0;
    text1 = score;
    flappy = new Bird(width / 2, height / 2, 20, 0, 0.6, -15);
    states = 1;
    played = false;
  }
  if (key == " " && states == 0) {
    states=1;
  }
}
