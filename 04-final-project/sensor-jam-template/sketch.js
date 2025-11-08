let port; // Serial Communication port
let connectBtn;

let recvStr;
let sensorVal;
let w;
let h;
let updateCol;
let randomVal;
let squareArray=[];
let size = 10;
let gapDistance; // the closer person is to screen -> more area break
let affectedAmt;
let fadeStrength =4;
function setup() {
  // colorMode(HSB,360,100,100,100);
  w=windowWidth;
  h=windowHeight;
  createCanvas(w, h);
  stroke(0);
  background(220);

// == CREATE GRID IN ARRAY ==
  for (let i=0;i<=w;i+=size){
    for (let j=0;j<=h;j+=size){
      x=i;
      y=j;
      squareArray.push(new lineSquare(x,y,size));
    }
  }
  serialPort();
}

function draw() {
  
  //== CLEAN FRAME ==
  background(220);
  fill(0);
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
      // ellipse(width/2,height/2,far); // check
  }
  //== UPDATE AND SHOW ==
    for (let i = 0; i<squareArray.length;i++){
      // squareArray[i].breakUpdate(w/2,h/2,affectedAmt); //radius of affected area
      squareArray[i].show(w/2,h/2,affectedAmt);
    }
  }
}


