let port; // Serial Communication port
let connectBtn;

let recvStr;
let cleanedStr;
let sensorVal;
let w;
let h;
let updateCol;
let randomVal;
let squareArray=[];
let size = 20;
let gapDistance; // the closer person is to screen -> more area break
let affectedAmt;
let fadeStrength =4;
let gravity = 0.5;
let randomAfflictedMaxAmt,randomAfflictedMinAmt;
let gap = 0;
let paperImage;

// == INTERFACE ==
let gapDistanceSlider, gravitySlider; // gravitySlider;
let myObject;
function setup() {
  serialPort();
  // colorMode(HSB,360,100,100,100);
  w=windowWidth;
  h=windowHeight;
  createCanvas(w, h);
  stroke(0);
  background(255);

    //RANDOM OFFSET TO FALLING CONDITION
  randomAfflictedMaxAmt = (h/10)*3
  randomAfflictedMinAmt = randomAfflictedMaxAmt*-1
  createCanvas(w, h);
  stroke(0);
  strokeWeight(1);
  background(255);
    // == INTERFACE ==
  // gapdistance
  gapDistanceSlider = createSlider(0, 500, 0, 1);
  gapDistanceSlider.position(10, h - 24);

  // gravity
  gravitySlider = createSlider(-1, 1, 0.05, 0.01);
  gravitySlider.position(10, h - 55);

  //reset grid
  resetButton = createButton("Reset Grid");
  resetButton.position(w-resetButton.width, h-50);
  resetButton.mousePressed(resetGrid);

  //   == DRAW GRID ONCE ==
  createGrid();
  
// == CREATE GRID IN ARRAY ==
  
}

function draw() {
    // == GET DISTANCE VALUE EVERY X AMT OF FRAMES ==
  // if (frameCount % 20 == 0) {
    
  //   // gapDistance=floor(random(1,300));
  //   // gapDistance=500;
  //   // console.log(gapDistance);
  //   console.log(gravitySlider.value());
  // }
  background(255);
  
  // == CONVERT GAP DISTANCE TO AFFECTED AMT VALUE ==
  

  // == UPDATE EACH SQUARE ==
  for (let sq of squareArray) {
    sq.breakUpdate(affectedAmt, gapDistance);
    sq.show();
  }
    // == INTERFACE ==
  fill(0);
  rect(0,h-60,w,60);
  fill(255);
  noStroke();
  textSize(14);

  //== CLEAN FRAME ==
  background(255);
  // == RECEIVE ARDUINO ==
   if (port.opened()) {
    // read value from port and convert to float 
    let recvStr = port.readUntil("\n");
    if(recvStr && recvStr.includes("cm")){
      let cleanedStr= recvStr.replace("cm","").trim(); //remove cm
      let sensorVal= int(cleanedStr); //convert to float

      if (!isNaN(sensorVal)){
        gapDistance = sensorVal;

        // debugPrint("sensorVal: "+sensorVal);
        convertValue(gapDistance); 
        

      }else{
        console.warn("NaN detected - cleanedStr was:", cleanedStr);
      }
    // == UPDATE EACH SQUARE ==
  for (let sq of squareArray) {
    sq.breakUpdate(affectedAmt, gapDistance);
    sq.show();
  }
  }
}
}
