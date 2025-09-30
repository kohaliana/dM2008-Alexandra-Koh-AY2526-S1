class Pipe {
  constructor() {
    this.between = height / 4;
    this.top = random((height / 4) * 3);
    this.bottom = height - this.top - this.between + 10;
    this.x = 400;
    this.w = 70;
    this.speed = 2;
    this.highlight = false;
    this.vel = 0.01;
    this.m = 10;
  }

  show() {
    fill(palette[2]);
    if (this.highlight) {
      fill(palette[4]);
    }
    rectMode(CORNER);
    //main rect
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height - this.bottom, this.w, this.bottom);
    //round rect
    rect(this.x - this.m / 2, this.top - 20, this.w + 10, 20, 5);
    rect(this.x - this.m / 2, height - this.bottom, this.w + 10, 20, 5);
  }

  update() {
    // this.speed+=this.vel;
    this.x -= this.speed;
  }

  middlescreen() {
    if (this.x == width / 2) {
      return true;
    } else {
      return false;
    }
  }
  offscreen() {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  }

  hits(flappy) {
    if (
      flappy.pos.y - flappy.r < this.top ||
      flappy.pos.y + flappy.r > height - this.bottom
    ) {
      if (
        flappy.pos.x + flappy.r > this.x + flappy.r &&
        flappy.pos.x + flappy.r < this.x + this.w + flappy.r
      ) {
        this.highlight = true;
        flappy.drop();
        this.speed = 0;
        return true;
      }
    }

    this.highlight = false;
    return false;
  }
}
