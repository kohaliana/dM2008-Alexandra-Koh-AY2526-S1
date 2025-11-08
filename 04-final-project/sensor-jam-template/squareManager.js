class lineSquare{
  constructor(a,b,s){
    this.a=a;
    this.b=b;
    this.s=s;
    this.randomVal=random(3);

    this.originalB = b; 

  }
  breakUpdate(g,s){
    if (this.b>g){
        this.b+=random(10)*(this.b/1000);
    }
    if (s > 450) {
  this.b = lerp(this.b, this.originalB, 0.1); // smooth transition
}

  }
  show(){
        // stroke(40,50,30,100);
       
        line(this.a,this.b,this.a+this.s,this.b); //top
        // stroke(random(255));
        line(this.a,this.b,this.a,this.b+this.s); //left
        // stroke(random(255));
        line(this.a+this.s,this.b,this.a+this.s,this.b+this.s);//right
        // stroke(random(255));
        line(this.a,this.b+this.s,this.a+this.s,this.b+this.s);//bottom
  }
}


function debugPrint(k) {
  console.log(k);
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