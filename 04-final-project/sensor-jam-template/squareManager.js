class lineSquare{
  constructor(a,b,s){
    this.a=a;
    this.b=b;
    this.s=s;
    this.randomVal=random(3);

  }
  breakUpdate(cx,cy,r){
    // if in the affected area
    // if (this.a >gapDistance && this.a<width-gapDistance && this.b>gapDistance && this.b<height-gapDistance){
    //   this.b+=random(3);
    // }

    if (this.isInsideFadedCircle(cx, cy, r,fadeStrength)) {
        this.b+=random(3);
    }
  }
  show(){
    if (this.isInsideFadedCircle(cx, cy, r,fadeStrength)) {
        line(this.a,this.b,this.a+this.s,this.b); //top
        line(this.a+random(3),this.b+random(3),this.a,this.b+this.s); //left
        line(this.a+random(3)+this.s+random(3),this.b,this.a+this.s,this.b+this.s);//right
        line(this.a,this.b+this.s,this.a+this.s,this.b+this.s);//bottom
        }
    else{

        // stroke(random(255));
        line(this.a,this.b,this.a+this.s,this.b); //top
        // stroke(random(255));
        line(this.a,this.b,this.a,this.b+this.s); //left
        // stroke(random(255));
        line(this.a+this.s,this.b,this.a+this.s,this.b+this.s);//right
        // stroke(random(255));
        line(this.a,this.b+this.s,this.a+this.s,this.b+this.s);//bottom
    }
  }
    //copilot
// Check if this square is within a faded circular area
  isInsideFadedCircle(cx, cy, r, fadeStrength) {
    let dx = this.a - cx;
    let dy = this.b - cy;
    let distSq = dx * dx + dy * dy;
    let rSq = r * r;

    let norm = distSq / rSq; // 0 at center, 1 at edge
    let threshold = pow(norm, fadeStrength); // sharper fade near edge

    return random() > threshold; // true = keep, false = discard
  }

}

function debugPrint(s) {
  console.log(s);
}

function convertValue(c){
    if (c>=500){
        affectedAmt=0;
    }
    else if(c>=400){ 
        affectedAmt=10; 
    }
    else if(c>=30){
        affectedAmt=120; 
    }   
    else if(c>=10){
        affectedAmt=300; 
    }
    console.log("gapDistance: "+ c  + "affectedAmt:"+ affectedAmt);
}