// DM2008 – Activity 5a
// Colliding Circles (30 min)

let balls = [];
let noOfBall = 10;
function setup() {
  createCanvas(400, 400);
  for (i = 0; i < noOfBall; i++) {
    balls.push(new Ball(width / 2, height / 2));
  }
  // Step 1: create two Ball objects
}

function draw() {
  background(230);

  // Step 2: update and display each ball
  for (let i = 0; i < balls.length; i++) {
    let b = balls[i];
    b.move();
    b.show();
    b.checkCollision(balls);

    // Step 3: check collisions
    // Use dist() between ball centers
    // Trigger feedback (color, bounce, etc.)
  }
}

class Ball {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.r = 30;
    this.vel = createVector(random(-2, 2), random(-2, 2));
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x < -this.r) {
      this.pos.x = width + this.r;
    }
    if (this.pos.x > width + this.r) {
      this.pos.x = -this.r;
    }
    if (this.pos.y < -this.r) {
      this.pos.y = height + this.r;
    }
    if (this.pos.y > height + this.r) {
      this.pos.y = -this.r;
    }
  }

  // TODO: wrap around OR bounce off edges

  show() {
    fill(100, 180, 220);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
  checkCollision(others) {
    for (let i = 0; i < others.length; i++) {
      if (others[i] !== this) {
        let d = dist(this.pos.x, this.pos.y, others[i].pos.x, others[i].pos.y);
        if (d < others[i].r + this.r) {
          push();
          console.log("collided");
          fill(200);
          ellipse(this.pos.x, this.pos.y, this.r * 2);  
          pop();
          
        }
      }
    }
  }
}
// Step 4: Add a method to checkCollision(others)
// Use dist() and respond visually
