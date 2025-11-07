let port; // Serial Communication port
let connectBtn;

let recvStr;
let sensorVal;

let updateCol;
let randomVal;
let squareArray=[];
let size = 10;
let far =1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(0);
  // colorMode(HSB,360,100,100,100);
  background(220);
  for (let i=0;i<=500;i+=500){
    for (let j=0;j<=height;j+=size){
      x=i;
      y=j;
      squareArray.push(new lineSquare(x,y,size));
      
    }
  }
  port = createSerial(9600); // creates the Serial Port
  // Connection helpers
  connectBtn = createButton("Connect to Arduino");
  connectBtn.position(20, 20);
  connectBtn.mousePressed(connectBtnClick);
}

function draw() {

  background(220);
  fill(0);

  // Receive data from Arduino
  if (port.opened()) {
    // read value from port and convert to float 
    let recvStr = port.readUntil("\n");
    if(recvStr && recvStr.includes("cm")){
      let cleanedStr= recvStr.replace("cm","").trim(); //remove cm
      let sensorVal= int(cleanedStr); //convert to float

      if (!isNaN(sensorVal)){
        //far= sensorVal;
        updateCol=sensorVal;

        debugPrint("sensorVal: "+sensorVal);
        debugPrint("updateCol: " +updateCol);

      }else{
        console.warn("NaN detected - cleanedStr was:", cleanedStr);
      }
      ellipse(width/2,height/2,updateCol); // check
      
    //   for (let i=0;i<=500;i+=size){
    //     for (let j=0;j<=500;j+=size){
    //       let x=i;
    //       let y=j;
    //       squareArray.push(new lineSquare(x,y,size));
    //   }
    // }
  }
    // console.log("far: "+ far);
    debugPrint("far: "+ far);
    //== MY CODE==

    for (let i = 0; i<squareArray.length;i++){
      squareArray[i].update();
      squareArray[i].show();
    }
  // UPDATE CANVAS
    
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
class lineSquare{
  constructor(a,b,s){
    this.a=a;
    this.b=b;
    this.s=s;
    this.randomVal=random(3);
  }
  update(){
    if (this.a >far && this.a<width-far && this.b>far && this.b<height-far){
      this.b+=random(3);
    }
  }
  show(){
    // stroke(random(255));
    line(this.a+this.randomVal,this.b,this.a+this.s,this.b); //top
    // stroke(random(255));
    line(this.a,this.b,this.a,this.b+this.s); //left
    // stroke(random(255));
    line(this.a+this.s,this.b,this.a+this.s,this.b+this.s);//right
    // stroke(random(255));
    line(this.a,this.b+this.s,this.a+this.s,this.b+this.s);//bottom
  }
}

function debugPrint(s) {
  console.log(s);
}