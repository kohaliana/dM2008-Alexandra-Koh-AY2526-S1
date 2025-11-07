let port; // Serial Communication port
let connectBtn;

let recvStr;
let sensorVal;
let circleSize = 50;
let targetSize = 50; // used for Option 2
let updateCol;
let roundValue;
let ballsArray=[];
function setup() {
  noStroke();
  colorMode(HSB,360,100,100,100);
  createCanvas(windowWidth, windowHeight);
  port = createSerial(9600); // creates the Serial Port
  // Connection helpers
  connectBtn = createButton("Connect to Arduino");
  connectBtn.position(20, 20);
  connectBtn.mousePressed(connectBtnClick);
}

//== MY CODE==

function draw() {
  background(100);
  fill(0);


  // Receive data from Arduino
  if (port.opened()) {
    // read value from port and convert to float 

    let recvStr = port.readUntil("\n");
    if(recvStr && recvStr.includes("cm")){
      let cleanedStr= recvStr.replace("cm","").trim(); //remove cm
      let sensorVal= int(cleanedStr); //convert to float
      if (!isNaN(sensorVal)){
        updateCol=sensorVal;
        console.log("sensorVal: "+sensorVal);
        console.log("updateCol: " +updateCol);
      }else{
        console.warn("NaN detected - cleanedStr was:", cleanedStr);
      }
    }
    console.log(updateCol);
    ellipse(width/2,height/2,updateCol);
    
  }
}
// DO NOT REMOVE THIS FUNCTION
function connectBtnClick(e) {
  // If port is not already open, open on click,
  // otherwise close the port
  if (!port.opened()) {
    port.open(9600); // opens port with Baud Rate of 9600
    e.target.innerHTML = "Disconnect Arduino";
    e.target.classList.add("connected");
  } else {
    port.close();
    e.target.innerHTML = "Connect to Arduino";
    e.target.classList.remove("connected");
  }
}
