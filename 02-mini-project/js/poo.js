class Poo{
    constructor(y){
        this.vel = 3;
        this.r = random(5,8);
        this.g = 0.6;
        this.x = width/2;
        this.y = y;
        this.windSpeed = 2;
        this.vel = 1;   
  }   
  show(){
      fill("#5f512eff");
      ellipse(this.x,this.y,this.r*2);
  }
  update(){
      this.vel += this.g;
      this.y += this.vel;
      this.x -= this.windSpeed;
      if (this.y > height - this.r) {
      this.y = height - this.r;
      this.vel = 0;
    }
  }

}

