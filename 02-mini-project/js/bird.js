class Bird {
  constructor(x, y, r, v, g, l) {
    this.pos = createVector(x, y);
    this.vel = v;
    this.g = g;
    this.r = r;
    this.lift = l;}

  update() {
    this.vel += this.g;
    // AIR RESISTANCE shrink velocity
    this.vel *= 0.9;
    this.pos.y += this.vel;

    if (this.pos.y > height - this.r) {
      this.pos.y = height - this.r;
      this.vel = 0;
    }
  }
  
  hitSurface(flappy){
    if (
      this.pos.y < this.r ||
      this.pos.y >= height -this.r
    ) {
      this.drop();
      return true;
      }
    return false;
  }

  show() {
    fill(palette[2]);
    ellipse(this.pos.x, this.pos.y, this.r * 2);
    fill(palette[5]);
    rect(this.pos.x+5, this.pos.y, this.r , this.r/2,5);
    // BEAK
    rect(this.pos.x-this.r-3, this.pos.y-(this.r/2), this.r,this.r,8);
    // EYES
    fill(palette[1]);
    rect(this.pos.x+5, this.pos.y-10, this.r/3,this.r/4,5 );
  }

  up() {
    this.vel += this.lift;
    // console.log(this.vel);
  }

  drop() {
    this.vel = 0;
    // this.g=2;
    this.lift = 0;
  }

  restart(){
    this.vel = v;
    this.g = g;
    this.r = r;
    this.lift = l;
  }
}