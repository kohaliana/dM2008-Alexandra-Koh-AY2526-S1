class lineSquare {
  constructor(a, b, s, g) {
    this.a = a; // X
    this.b = b; // Y
    this.s = s; // SIZE
    this.originalB = b; // STORE Y
    this.gravity = g;
    this.delays = [0, random(10), random(10, 20), random(20, 30)]; // frame delays per point
    this.restoring = false;
    this.restoreDelay = int(random(10, 60)); // staggered delay
    this.restoreFrame = 0;

    this.points = [
      createVector(this.a, this.b), // p1 - top-left
      createVector(this.a + this.s, this.b), // p2 - top-right
      createVector(this.a + this.s, this.b + this.s), // p3 - bottom-right
      createVector(this.a, this.b + this.s), // p4 - bottom-left
    ];

    // Store previous positions for verlet-like motion
    for (let p of this.points) {
      p.prev = p.copy();
    }
  }
  
   show() {
    stroke(0);
    strokeWeight(2);
    if (this.restoring) {
      stroke(100, 100, 255);
    } else {
      stroke(0); 
    }
    let [p1, p2, p3, p4] = this.points;
    line(p1.x, p1.y, p2.x, p2.y); // top
    line(p2.x, p2.y, p3.x, p3.y); // right
    line(p3.x, p3.y, p4.x, p4.y); // bottom
    line(p4.x, p4.y, p1.x, p1.y); // left
  }
  
  // affected amt, gap distance
  breakUpdate(c, s) {
    //== CHECK IF SQUARE's Y > THRESHOLD
    if (this.points[0].y > c+random(randomAfflictedMinAmt,randomAfflictedMaxAmt)) {
      this.drop(); 
    }
    // START RESTORE MODE IF MORE THAN THRESHOLD
    if (s > 300 && !this.restoring) {
      this.restoring = true;
      this.restoreFrame = frameCount;
    }
    
    if (this.restoring) {
      if (frameCount - this.restoreFrame > this.restoreDelay) {
        let allClose = true;
        for (let i = 0; i < this.points.length; i++) {
          let p = this.points[i];
          let targetY = this.originalB + (i >= 2 ? this.s : 0); 
          let targetX = this.a + (i === 1 || i === 2 ? this.s : 0);

          // Elastic easing (tweak factor for bounce)
          let easing = 0.08;
          p.y += (targetY - p.y) * easing;
          p.x += (targetX - p.x) * easing;

          if (abs(p.y - targetY) > 0.5 || abs(p.x - targetX) > 0.5) {
            allClose = false;
          }
        }

        if (allClose) {
          this.restoring = false;
        }
      }
    }
  }

  drop() {
    for (let i = 0; i < this.points.length; i++) {
      if (frameCount > this.delays[i]) {
        let p = this.points[i];

        // Verlet velocity approximation
        let velocity = p5.Vector.sub(p, p.prev);

        // Store current position into prev for next frame
        p.prev = p.copy();

        // Apply gravity and velocity
        p.x += velocity.x;
        p.y += velocity.y + this.gravity + random(0.3);

        // == RANDOM X SHAKE ==
        p.x += random(-0.2, 0.2);
      }
    }
  }
  
  updatePointsFromAB() {
    this.points[0].set(this.a, this.b);
    this.points[1].set(this.a + this.s, this.b);
    this.points[2].set(this.a + this.s, this.b + this.s);
    this.points[3].set(this.a, this.b + this.s);

    for (let p of this.points) {
      p.prev = p.copy(); // keep velocities correct
    }
  }
}
